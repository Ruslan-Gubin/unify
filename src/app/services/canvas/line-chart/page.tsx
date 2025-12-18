import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";

export const metadata: Metadata = generateMetadata({
  title: "Canvas line chart",
  description: "Canvas line chart page",
});

export default async function LineChartPage() {
  const codeTs = await readContentFile(
    "src/shared/services/canvas/LineChart.ts",
  );

  return (
    <article className="article__page">
      <h1>{"Canvas Line Chart"}</h1>
      {typeof codeTs === "string" && (
        <CodeWrapper
          description="Сервис для отрисовки линейных диаграмм на canvas: создание координат точек, рисование кривых и окружностей, обновление графика с учетом цветов и параметров сетки."
          fileName="LineChart.ts"
          title="TS"
          code={codeTs}
        />
      )}
    </article>
  );
}
