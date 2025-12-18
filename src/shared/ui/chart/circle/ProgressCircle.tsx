"use client";
import { useCallback, useEffect, useState } from "react";
import { useAnimatedCounter } from "@/src/shared/hooks/useAnimatedCounter";
import styles from "./ProgressCircle.module.css";

type Props = {
  className?: string;
  sections: { color: string; percent: number }[];
  percent: number;
  timeAnimation?: number;
};

const ProgressCircle = ({
  className,
  sections,
  percent,
  timeAnimation = 1000,
}: Props) => {
  const { count } = useAnimatedCounter({
    endCount: percent,
    timeAnimation,
  });

  const getInitGradientStr = (
    sections: { color: string; percent: number }[],
  ) => {
    return sections.reduce(
      (acc, section, index) =>
        acc +
        `${section.color} 0% 0%` +
        (index === sections.length - 1 ? "" : ","),
      "",
    );
  };

  const [gradient, setGradient] = useState<string>(
    () => `${getInitGradientStr(sections)}`,
  );

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
    const animate = requestAnimationFrame(getGradientString);
    return () => cancelAnimationFrame(animate);
  }, [getGradientString]);

  return (
    <div
      style={{ backgroundImage: `conic-gradient(${gradient}, #00000007 0%)` }}
      className={`${styles.circle} ${className}`}
    >
      {percent && <h3 className={styles.percentText}>{count}%</h3>}
    </div>
  );
};

export { ProgressCircle };
