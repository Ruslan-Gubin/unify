import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { ChartCircle } from "@/src/shared/ui/chart/chard-circle/ ChartCircle";
import styles from "./ChartCircle.module.css";
import { DashboardSalesChart } from "@/src/shared/ui/chart/chart-v2/ DashboardSalesChart";

export const metadata: Metadata = generateMetadata({
  title: "Charts circle Page",
  description: "Charts circle Page description",
});

export default function ChartsCirclePage() {
  return (
    <div>
      <h1>Chart circle</h1>

      <ChartCircle
        timeAnimation={700}
        sections={[
          { color: "#20b2aa", percent: 12 },
          { color: "#1079f2", percent: 44 },
          { color: "#4db71f", percent: 70 },
          { color: "#e364c7", percent: 96 },
          { color: "#ee6868", percent: 100 },
        ]}
        className={styles.chartCircle}
        percent={100}
        showText
      />
      <DashboardSalesChart title="Completed" percent={33} sum="$ 12" total="$ 22" />
    </div>
  );
}
