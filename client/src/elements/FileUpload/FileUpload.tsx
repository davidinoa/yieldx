import React, { useCallback, useState } from "react";
import { Row, Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { ReactComponent as UploadIcon } from "assets/svg/upload.svg";
import clsx from "clsx";
import {
  DefaultMetadata,
  FileMetadata,
  FileTypes,
  getParserForFile,
  MimeTypes,
  Parser,
  ParseResult,
  ParseXlsx,
  SupportedMimeTypes,
  SupportedParser,
  TextMimeType
} from "elements/FileUpload/Parsers";
import * as Styles from "./FileUpload.styles";

export type FileUploadProps = {
  onFileComplete: (parsed: ParseResult) => void;
  parser?: SupportedParser | Parser;
  maxSize?: number;
  acceptedTypes?:
    | (MimeTypes | FileTypes | string)
    | (MimeTypes | FileTypes | string)[];
  headers?: string[];
};

export function FileUpload({
  onFileComplete,
  parser,
  headers,
  maxSize = 2e6,
  acceptedTypes = SupportedMimeTypes
}: FileUploadProps) {
  const [errors, setError] = useState<string[]>([]);
  const [results, setResults] = useState<ParseResult[]>([]);

  const onError = useCallback(
    err => {
      let newErrors: string[] = [];
      if (err instanceof Array) {
        newErrors = err.map((e: { errors: any }) =>
          e.errors.map(({ message }: { message: string }) => message)
        );
      } else {
        err instanceof Error
          ? newErrors.push(err.message)
          : newErrors.push(err);
      }
      setError([...errors, ...newErrors]);
    },
    [setError, errors]
  );
  const callbackWithMessage = useCallback(
    (message: string) => () => onError(message),
    [onError]
  );
  const onLoad = useCallback(
    (
      r: FileReader,
      meta: FileMetadata = DefaultMetadata
    ): Promise<ParseResult> => {
      if (!r.result) {
        return Promise.reject(new Error("File appears to be empty."));
      }
      let parsedResult: Promise<ParseResult>;
      if (meta.parser instanceof Function) {
        return meta.parser(r.result, meta);
      }
      switch (meta.parser) {
        case SupportedParser.XLSX:
          parsedResult = ParseXlsx(r.result, "binary", headers).then(data => {
            return { meta, data } as ParseResult;
          });
          break;
        case SupportedParser.JSON:
          parsedResult = new Promise((resolve, reject) => {
            try {
              resolve({
                meta,
                data: JSON.parse(r.result as string)
              } as ParseResult);
            } catch (error) {
              reject(error);
            }
          });
          break;
        case SupportedParser.RAW:
        default:
          parsedResult = Promise.resolve({
            meta,
            data: r.result
          } as ParseResult);
          break;
      }
      return parsedResult;
    },
    [headers]
  );
  const onParseComplete = useCallback(
    parsed => {
      onFileComplete(parsed);
      setResults([...results, parsed]);
    },
    [setResults, results, onFileComplete]
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach(file => {
        const metadata = {
          name: file.name,
          type: file.type as MimeTypes,
          size: file.size,
          parser: getParserForFile(file, parser)
        };
        const reader = new FileReader();
        reader.onload = () =>
          onLoad(reader, metadata)
            .then(onParseComplete)
            .catch(err => setError([...errors, err.message]));
        reader.onabort = callbackWithMessage("file reading was aborted");
        reader.onerror = callbackWithMessage("failed to read the file.");

        metadata.type in TextMimeType
          ? reader.readAsText(file)
          : reader.readAsBinaryString(file);
      });
    },
    [parser, errors, onLoad, onParseComplete, callbackWithMessage]
  );

  const { getRootProps, getInputProps, open } = useDropzone({
    maxSize,
    accept: acceptedTypes || "*",
    onDrop,
    onDropRejected: onError
  });
  return (
    <span className={clsx("draw")}>
      <Styles.UploadInner
        data-testid="FileUpload"
        {...getRootProps({ refKey: "innerRef" })}
      >
        <Row>
          <UploadIcon />
        </Row>
        <Row className={clsx("mt-2")}>
          <h2 style={{ fontWeight: "inherit" }}>Drag & drop you file here</h2>
        </Row>
        <Row>
          <Styles.SubTitle>Drag & drop you file here</Styles.SubTitle>
        </Row>
        <Row className={clsx("mt-3 mb-2")}>
          <h3>OR</h3>
        </Row>
        <Row>
          <Button onClick={open}>Browse files</Button>
        </Row>
        <Row>
          <Styles.Note>
            Maximum file size is {Math.round(maxSize / 1e6)}mb
          </Styles.Note>
        </Row>
        <input {...getInputProps()} />
        {errors.map(e => {
          return <Row key={e}>Error: {e}</Row>;
        })}
      </Styles.UploadInner>
    </span>
  );
}
