'use client'
import { useCallback, useEffect, useState } from "react";
import styles from "./ChartCircle.module.css";
import { useCountUp } from "./useCountUp";

type Props = {
  className?: string;
  sections: { color: string; percent: number }[];
  showText?: boolean;
  percent: number;
  timeAnimation?: number;
};

const ChartCircle = ({
  className,
  sections,
  showText,
  percent,
  timeAnimation = 1000,
}: Props) => {
  const { count } = useCountUp({
    startCount: 0,
    endCount: percent,
    timeAnimation,
  });
  const [gradient, setGradient] = useState<string>("");

  const getInitGradientStr = useCallback(() => {
    return sections.reduce(
      (acc, section, index) =>
        acc +
        `${section.color} 0% 0%` +
        (index === sections.length - 1 ? "" : ","),
      "",
    );
  }, [sections]);

  const getGradientString = useCallback(() => {
    if (gradient.length === 0) return;

    const gradientArr = gradient.split(",");
    if (gradientArr.at(-1)?.includes("100%")) return;

    for (let i = 0; i < gradientArr.length; i++) {
      const currentGradient = gradientArr[i].split(" ");
      const firstValue = currentGradient[1];
      const secondValue = parseFloat(currentGradient[2]);
      const maxPercent = sections[i].percent;

      if (maxPercent > secondValue) {
        gradientArr[i] =
          `${currentGradient[0]} ${firstValue} ${secondValue + 1}%`;
        if (secondValue + 1 === maxPercent && gradientArr[i + 1]) {
          gradientArr[i + 1] =
            `${sections[i + 1].color} ${maxPercent + 0.3}% ${maxPercent}%`;
        }
        break;
      }
    }

    setGradient(gradientArr.join(","));
  }, [gradient, sections]);

  useEffect(() => {
    if (gradient.length === 0) {
      return setGradient(`${getInitGradientStr()}`);
    }
    const animate = requestAnimationFrame(getGradientString);
    return () => cancelAnimationFrame(animate);
  }, [getInitGradientStr, getGradientString, gradient.length]);

  return (
    <div
      style={{ backgroundImage: `conic-gradient(${gradient}, #00000007 0%)` }}
      className={`${styles.circle} ${className}`}
    >
      {showText && <h3 className={styles.percentText}>{count}%</h3>}
    </div>
  );
};

export { ChartCircle };
