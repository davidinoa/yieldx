import { useCallback, useState } from "react";

export default function useForceUpdate(): () => void {
  const [, dispatch] = useState<{}>(Object.create(null));

  return useCallback(() => {
    dispatch(Object.create(null));
  }, [dispatch]);
}
