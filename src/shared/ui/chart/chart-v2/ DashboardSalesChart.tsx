"use client";
import { useCountUp } from "../chard-circle/useCountUp";
// import { DashboardChartCard } from "../dashboard-chart-card/DashboardChartCard";
// import { DashboardChartTitle } from "../dashboard-chart-title/DashboardChartTitle";

import styles from "./DashboardSalesChart.module.css";

type Props = {
  title: string;
  percent: number;
  sum: string;
  total: string;
};

const getAngle = (percent: number) => (percent * 180) / 100;

const DashboardSalesChart = ({ percent, sum, total, title }: Props) => {
  const { count } = useCountUp({ startCount: 0, endCount: percent });

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

export { DashboardSalesChart };
