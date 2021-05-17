import { Sheet2JSONOpts } from "xlsx/types";

export enum SupportedParser {
  XLSX = "xlsx",
  JSON = "json",
  TEXT = "text",
  PDF = "pdf",
  RAW = "binary"
}

export type ParserMap = { [key: string]: SupportedParser };
export const TextMimeType: ParserMap = {
  "text/plain": SupportedParser.XLSX,
  "text/csv": SupportedParser.XLSX,
  "application/json": SupportedParser.JSON,
  "application/ld+json": SupportedParser.JSON,
  "text/xml": SupportedParser.XLSX,
  "text/html": SupportedParser.RAW,
  "text/css": SupportedParser.RAW,
  "application/xml": SupportedParser.XLSX
};

export const BinaryMimeType: ParserMap = {
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
    SupportedParser.XLSX,
  "application/vnd.ms-excel": SupportedParser.XLSX,
  "application/pdf": SupportedParser.XLSX
};

export const ExtensionHandlers: ParserMap = {
  "*": SupportedParser.RAW,
  ".pdf": SupportedParser.XLSX,
  ".json": SupportedParser.JSON,
  ".jsonld": SupportedParser.JSON,
  ".xlsx": SupportedParser.XLSX,
  ".xlsb": SupportedParser.XLSX,
  ".xlsm": SupportedParser.XLSX,
  ".xls": SupportedParser.XLSX,
  ".xml": SupportedParser.XLSX,
  ".csv": SupportedParser.XLSX,
  ".txt": SupportedParser.XLSX,
  ".ods": SupportedParser.XLSX,
  ".fods": SupportedParser.XLSX,
  ".uos": SupportedParser.XLSX,
  ".sylk": SupportedParser.XLSX,
  ".dif": SupportedParser.XLSX,
  ".dbf": SupportedParser.XLSX,
  ".prn": SupportedParser.XLSX,
  ".qpw": SupportedParser.XLSX,
  ".123": SupportedParser.XLSX,
  ".wb*": SupportedParser.XLSX,
  ".wq*": SupportedParser.XLSX,
  ".html": SupportedParser.XLSX,
  ".htm": SupportedParser.XLSX
};
export type FileMetadata = {
  type: MimeTypes;
  name: string;
  size: number;
  parser: SupportedParser | Parser;
};

export type ParseResult = {
  meta: FileMetadata;
  data: any;
  [key: string]: any;
};

export interface Parser {
  (data: string | ArrayBuffer | null, meta: FileMetadata): Promise<ParseResult>;
}

export type MimeTypes = Exclude<keyof typeof MimeHandlers, number>;
export type FileTypes = Exclude<keyof typeof ExtensionHandlers, number>;
export const SupportedExtensionRegex = new RegExp(
  "[.](pdf|json|jsonld|xlsx|xlsb|xlsm|xls|xml|csv|txt|ods|fods|uos|sylk|dif|dbf|prn|qpw|123|wb[*]|wq[*]|html|htm)$"
);

export function formatExtension(ext: string): FileTypes {
  return `.${ext}` as FileTypes;
}

export function getParserByFileName(name: string): SupportedParser {
  if (SupportedExtensionRegex.test(name)) {
    const matches = SupportedExtensionRegex.exec(name);
    if (matches?.length) return ExtensionHandlers[formatExtension(matches[0])];
  }
  return SupportedParser.RAW;
}

export function getParserForFile(
  file: File,
  parser?: SupportedParser | Parser
) {
  // Custom parser
  if (parser && parser instanceof Function) return parser;
  if ((file.type as MimeTypes) in MimeHandlers)
    return MimeHandlers[file.type as MimeTypes];
  return getParserByFileName(file.name);
}

export const MimeHandlers = { ...TextMimeType, ...BinaryMimeType };
export const SupportedMimeTypes = Object.keys(MimeHandlers);

export const DefaultMetadata = Object.freeze({
  size: 0,
  type: "text/plain",
  name: "",
  parser: SupportedParser.XLSX
});

export function ParseXlsx(
  data: string | ArrayBuffer | null,
  dataType: "binary" | "buffer" | "base64" | "string" | "file" = "binary",
  headers?: string[]
) {
  return import("xlsx").then(imp => {
    const XLSX = imp.default;
    const wb = XLSX.read(data, { type: dataType });
    /* Get first worksheet */
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    /* Convert array of arrays */
    const options: Sheet2JSONOpts = { blankrows: false };
    if (headers?.length) options.header = headers;
    return XLSX.utils.sheet_to_json(ws, options);
    /* Update state */
  });
}
