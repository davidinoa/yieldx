type Prop = string | number | symbol;

export default function dontForward(...props: string[]) {
  const excluded: Record<string, boolean> = {};
  props.forEach(prop => {
    excluded[prop] = true;
  });
  const shouldForwardProp = (prop: Prop) => {
    if (typeof prop === "string") {
      return !excluded[prop];
    }
    return true;
  };
  return { shouldForwardProp };
}
