import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";

export const metadata: Metadata = generateMetadata({
    title: "Рисование круговой диаграммы - My UI Kit",
    description: "Документация по рисованию круговой диаграммы с использованием Canvas в My UI Kit. Узнайте,  как создавать и настраивать круговые диаграммы.",
keywords: ['Canvas', 'круговая диаграмма', 'графика',
  'рисование', 'HTML5', 'документация'],
  });

export default async function PieChartDrawPage() {
  const codeTs = await readContentFile(
    "src/shared/services/canvas/PieChartDraw.ts",
  );

  return (
    <article className="article__page">
      <h1>{"Pie Chart Draw"}</h1>
      {typeof codeTs === "string" && (
        <CodeWrapper
          description="Сервис для отрисовки круговой диаграммы (pie chart) на canvas: создание сегментов диаграммы с заданными цветами и пропорциями, отображение общего количества в центре диаграммы."
          fileName="PieChartDraw.ts"
          title="TS"
          code={codeTs}
        />
      )}
    </article>
  );
}
