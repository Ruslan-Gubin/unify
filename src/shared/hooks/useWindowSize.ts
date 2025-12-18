"use client";
import { useEffect, useState } from "react";
import { debounce } from "../helpers/debounce";

export const useWindowSize = (ms = 300) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: typeof window !== "undefined" ? window.innerHeight : 850,
  });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const debounceResize = debounce(handleResize, ms);

    window.addEventListener("resize", debounceResize);

    return () => {
      window.removeEventListener("resize", debounceResize);
    };
  }, [ms]);

  return windowSize;
};
