import { useCallback, useEffect, useRef } from "react";

export const useDebounce = () => {
  const timer = useRef<ReturnType<typeof setTimeout>>(null);

  const run = useCallback((cb: () => void, delay?: number) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(cb, delay ?? 500);
  }, []);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  return run;
};

/* example */

// export defaultwfunction Home() {
//   const debounceFn = useDebounce();
//
//   const handleChangeInput = (value: string) => {
//     setValue(value);
//     debounceFn(() => fetchData("1"));
//   };
//
//   return (<></>);
// }
