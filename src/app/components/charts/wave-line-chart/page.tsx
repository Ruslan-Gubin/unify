import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { WaveLineChart } from "@/src/shared/ui/chart/wave-line-chart/WaveLineChart";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";

export const metadata: Metadata = generateMetadata({
  title: "Wave Line Chart Page",
  description: "Wave Line Chart Page description",
});

export default async function WaveLineChartPage() {
  const WaveLineChartTxt = await readContentFile(
    "src/shared/ui/chart/wave-line-chart/WaveLineChart.tsx",
  );

  const WaveLineChartCss = await readContentFile(
    "src/shared/ui/chart/wave-line-chart/WaveLineChart.module.css",
  );

  const GraphLineTsx = await readContentFile(
    "src/shared/ui/chart/wave-line-chart/graph-line/GraphLine.tsx",
  );

  const GraphLineCss = await readContentFile(
    "src/shared/ui/chart/wave-line-chart/graph-line/GraphLine.module.css",
  );

  const lines = [
    { color: "#47C0BB", title: "Requests", values: [10, 25, 110, 170, 200] },
    { color: "#8353E2", title: "Quotations", values: [20, 55, 100, 150, 160] },
    { color: "#4069E5", title: "Orders", values: [0, 30, 70, 40, 70] },
    { color: "#ED7D2D", title: "Shipments", values: [0, 22, 30, 30, 40] },
  ];

  const quantityCountLines = ["200", "150", "100", "50", "0"];

  return (
    <article className="article__page">
      <h1>Wave Line Chart</h1>

      <InfoBlock
        title="Параметры"
        infoList={[
          {
            label: "title",
            value: "название графика.",
          },
          {
            label: "lines",
            value:
              "массив объектов, каждый из которых содержит: color (цвет линии), title (название линии отображается в легенде), values (массив числовых значений для точек на графике).",
          },
          {
            label: "countLines",
            value:
              "массив строк, представляющих метки на оси Y (например, значения шкалы слева: '200','150', '100', '50', '0').",
          },
        ]}
      />

      <WaveLineChart
        title="Quantity"
        lines={lines}
        countLines={quantityCountLines}
      />

      {typeof WaveLineChartTxt === "string" && (
        <CodeWrapper
          fileName="ChartRainbow.tsx"
          title="TSX"
          code={WaveLineChartTxt}
        />
      )}
      {typeof WaveLineChartCss === "string" && (
        <CodeWrapper
          fileName="ChartRainbow.module.css"
          title="CSS"
          code={WaveLineChartCss}
        />
      )}
      {typeof GraphLineTsx === "string" && (
        <CodeWrapper fileName="GraphLine.tsx" title="TSX" code={GraphLineTsx} />
      )}
      {typeof GraphLineCss === "string" && (
        <CodeWrapper fileName="GraphLine.tsx" title="CSS" code={GraphLineCss} />
      )}
    </article>
  );
}
