import rfdc from "rfdc";

const clone = rfdc();

function removeEmpty(nestedObj: any): void {
  const keysToDelete: string[] = [];
  Object.entries(nestedObj).forEach(([key, val]) => {
    if (Array.isArray(val) && val.length === 0) {
      keysToDelete.push(key);
    } else if (Array.isArray(val)) {
      // eslint-disable-next-line no-param-reassign
      nestedObj[key] = val.filter(cv => cv);
    } else if (val && typeof val === "object") {
      removeEmpty(val);
    } else if (val === null || val === undefined || val === "") {
      keysToDelete.push(key);
    }
  });
  keysToDelete.forEach((key: string) => {
    // eslint-disable-next-line no-param-reassign
    delete nestedObj[key];
  });
}

function sanitizeObject<T>(obj: T): T {
  const objCopy = clone(obj);
  removeEmpty(objCopy);
  return objCopy;
}

export default sanitizeObject;
