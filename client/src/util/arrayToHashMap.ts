export default function arrayToHashMap<T>(
  arr: Array<T>,
  lookUpProperty?: keyof T
): Record<string, T> {
  return arr.reduce<Record<string, T>>((acc, cv) => {
    const uniqueId = lookUpProperty ? cv[lookUpProperty] : String(cv);
    if (typeof uniqueId !== "string")
      throw Error("Look up property has to be string");
    acc[uniqueId] = cv;
    return acc;
  }, {});
}
