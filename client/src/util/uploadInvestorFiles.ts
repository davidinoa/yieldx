import { FilesApi } from "@bondhouse/investor";

const isString = (a: any) => typeof a === "string";

const filesToBase64 = (files: FileList) =>
  new Promise<{ fileExtension: string; file: string | ArrayBuffer | null }[]>(
    (res, rej) => {
      const base64FilePromises: Promise<{
        fileExtension: string;
        file: string | ArrayBuffer | null;
      }>[] = [];

      for (let i = 0; i < files.length; i += 1) {
        const currFile = files.item(i);
        if (currFile) {
          base64FilePromises.push(
            // eslint-disable-next-line no-loop-func
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(currFile);
              reader.onload = () => {
                resolve({
                  fileExtension: currFile.type.match(/^.*\/(.*)$/)![1],
                  file: reader.result
                });
              };
              reader.onerror = error => reject(error);
            })
          );
        }
      }
      try {
        res(Promise.all(base64FilePromises));
      } catch (err) {
        rej(err);
      }
    }
  );

export default async (files: FileList) => {
  const resolvedFiles = await filesToBase64(files);
  const filesApi = new FilesApi();
  const uploadPromises = resolvedFiles
    .filter((currFile): currFile is { file: string; fileExtension: string } =>
      isString(currFile.file)
    )
    .map(({ file, fileExtension }) => {
      return filesApi.uploadFile("finra-affiliated-approval", {
        fileExtension,
        file: file.match(/^.*;base64,(.*)$/)![1]
      });
    });
  return Promise.all(uploadPromises);
};
