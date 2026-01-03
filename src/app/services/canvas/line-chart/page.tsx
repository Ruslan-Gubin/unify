import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";

export const metadata: Metadata = generateMetadata({
title: 'Линейный график - My UI Kit',
description: 'Документация по созданию линейного графика с использованием Canvas в My UI Kit. Узнайте, как строить и настраивать линейные графики.',
keywords: ['Canvas', 'линейный график', 'графика', 
      'рисование', 'HTML5', 'документация']
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
