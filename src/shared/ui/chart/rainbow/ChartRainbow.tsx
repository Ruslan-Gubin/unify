"use client";
import { useAnimatedCounter } from "@/src/shared/hooks/useAnimatedCounter";
import styles from "./ChartRainbow.module.css";

type Props = {
  title: string;
  percent: number;
  sum: string;
  total: string;
};

const getAngle = (percent: number) => (percent * 180) / 100;

const ChartRainbow = ({ percent, sum, total, title }: Props) => {
  const { count } = useAnimatedCounter({ startCount: 0, endCount: percent });

  return (
    <div className={styles.content}>
      <div
        className={styles.circle}
        style={{ transform: `rotate(${getAngle(count)}deg)` }}
      ></div>
      <div className={styles.circleWhite}></div>

      <div className={styles.optionsDescription}>
        <h3 className={styles.optionsDescriptionTitle}>{count}%</h3>
        <span className={styles.optionsCompleteText}>{title}</span>
        <div className={styles.optionsFooterLine}>
          <span className={styles.optionsFooterLineSum}>{sum}</span>
          <span className={styles.optionsFooterLineTotal}>/ {total}</span>
        </div>
      </div>
    </div>
  );
};

export { ChartRainbow };
