"use client";
import { useEffect, useState } from "react";

type Props = {
  startCount?: number;
  endCount: number;
  timeAnimation?: number;
};

const useAnimatedCounter = ({
  endCount,
  startCount = 0,
  timeAnimation = 1000,
}: Props) => {
  const getUpdateNextCount = (endCount: number) =>
    endCount > 999
      ? 15
      : endCount > 500
        ? 8
        : endCount > 100
          ? 4
          : endCount > 50
            ? 2
            : 1;

  const [isEndAnimated, setIsEndAnimated] = useState<boolean>(false);
  const [count, setCount] = useState<number>(startCount);
  const [updateNextCount] = useState<number>(getUpdateNextCount(endCount));
  const tick = timeAnimation / (endCount / getUpdateNextCount(endCount));

  useEffect(() => {
    if (isEndAnimated || !endCount) return;


    const changeCount = () => {
      const nextCount = count + updateNextCount;
      const updateCount = nextCount >= endCount ? endCount : nextCount;
      setCount(updateCount);

      if (updateCount >= endCount) {
        setIsEndAnimated(true);
      }
    };

    const timer = setTimeout(changeCount, tick);

    return () => clearTimeout(timer);
  }, [count, endCount, isEndAnimated, updateNextCount, tick]);

  return { count, isEndAnimated };
};

export { useAnimatedCounter };
