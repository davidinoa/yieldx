import { useEffect, MutableRefObject } from "react";

const useOutsideClick = (
  ref: MutableRefObject<HTMLDivElement | null>,
  callback: () => void,
  ignoreWhenClicked?: MutableRefObject<HTMLButtonElement | null>
) => {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        !ignoreWhenClicked?.current?.contains(e.target as Node)
      ) {
        callback();
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });
};

export default useOutsideClick;
