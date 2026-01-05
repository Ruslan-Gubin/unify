import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { ChartColumn } from "@/src/shared/ui/chart/ChartColumn/ChartColumn";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";

export const metadata: Metadata = generateMetadata({
  title: "Диаграммы колонами - My UI Kit",
  description:
    "Документация по диаграммы колонок в My UI Kit. Узнайте, как создавать и настраивать диаграммы для визуализации данных.",
  keywords: [
    "круговые диаграммы",
    "визуализация данных",
    "Canvas",
    "HTML5",
    "документация",
  ],
});

export default async function ChartColumnPage() {
  const codeTsx = await readContentFile(
    "src/shared/ui/chart/ChartColumn/ChartColumn.tsx",
  );

  const codeCss = await readContentFile(
    "src/shared/ui/chart/ChartColumn/ChartColumn.module.css",
  );

  const data = [
    { id: 1, date: "19", online: 61, offline: 61, value: 9 },
    { id: 2, date: "20", online: 73, offline: 79, value: 12 },
    { id: 3, date: "21", online: 73, offline: 73, value: 11 },
    { id: 4, date: "22", online: 91, offline: 91, value: 14 },
    { id: 5, date: "23", online: 67, offline: 67, value: 10 },
    { id: 6, date: "24", online: 79, offline: 79, value: 12 },
    { id: 7, date: "25", online: 140, offline: 140, value: 21 },
    { id: 8, date: "26", online: 79, offline: 79, value: 12 },
    { id: 9, date: "27", online: 73, offline: 79, value: 12 },
    { id: 10, date: "28", online: 79, offline: 79, value: 12 },
    { id: 11, date: "29", online: 67, offline: 73, value: 11 },
    { id: 12, date: "30", online: 31, offline: 37, value: 5 },
    { id: 13, date: "31", online: 55, offline: 55, value: 8 },
    { id: 14, date: "01", online: 91, offline: 91, value: 14 },
  ];

  return (
    <article className="article__page">
      <h1>Chart column</h1>

      <InfoBlock
        title="Параметры"
        infoList={[
          {
            label: "data",
            value:
              "Принимает массив данных { id: number, data: string, online: number, offline: number, value: number }",
          },
        ]}
      />

      <ChartColumn data={data} />

      {typeof codeTsx === "string" && (
        <CodeWrapper fileName="ProgressCircle.tsx" title="TSX" code={codeTsx} />
      )}

      {typeof codeCss === "string" && (
        <CodeWrapper
          fileName="ProgressCircle.module.css"
          title="CSS"
          code={codeCss}
        />
      )}
    </article>
  );
}
