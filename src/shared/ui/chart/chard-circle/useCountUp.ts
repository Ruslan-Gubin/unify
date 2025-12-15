'use client'
import { useEffect, useState } from "react";

type Props = {
  startCount: number;
  endCount: number;
  timeAnimation?: number;
}

const getUpdateNextCount = (endCount: number) => endCount > 999 ? 15 : endCount > 500 ? 8 : endCount > 100 ? 4 : endCount > 50 ? 2 : 1;

const useCountUp = ({ endCount,  startCount=0, timeAnimation=1000 }: Props) => {
  const [isEndAnimated, setIsEndAnimated] = useState<boolean>(false);
  const [count, setCount] = useState<number>(startCount);
  const [updateNextCount] = useState<number>(getUpdateNextCount(endCount));
  const [tick] = useState<number>(timeAnimation / (endCount / getUpdateNextCount(endCount)));
  

  useEffect(() => {
    if (isEndAnimated || !endCount) return;

    const isSuccessCount = (count === endCount || count > endCount);

    if (isSuccessCount) {
     return  setIsEndAnimated(true);
    }

    const changeCount = () => {
      const nextCount = count + updateNextCount;
      const updateCount = nextCount === endCount || nextCount > endCount ? endCount : nextCount;
      setCount(updateCount)
    };

    const timer = setTimeout(changeCount, tick);

    return () => clearTimeout(timer);
  }, [count, endCount, isEndAnimated, updateNextCount, timeAnimation, tick]);


  return { count, isEndAnimated };
};

export { useCountUp };

