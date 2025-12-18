import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { ChartRainbow } from "@/src/shared/ui/chart/rainbow/ChartRainbow";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";

export const metadata: Metadata = generateMetadata({
  title: "Charts circle Page",
  description: "Charts circle Page description",
});

export default async function ChartsCirclePage() {
  const ChartRainbowTxt = await readContentFile(
    "src/shared/ui/chart/rainbow/ChartRainbow.tsx",
  );

  const ChartRainbowCss = await readContentFile(
    "src/shared/ui/chart/rainbow/ChartRainbow.module.css",
  );

  const hookUseAnimatedCounter = await readContentFile(
    "src/shared/hooks/useAnimatedCounter.ts",
  );

  return (
    <article className="article__page">
      <h1>Chart Rainbow</h1>

      <InfoBlock
        title="Параметры"
        infoList={[
          {
            label: "title",
            value: "название графика.",
          },
          {
            label: "percent",
            value: "для отображения  процент заполнения.",
          },
          {
            label: "sum",
            value: "текущая сумма",
          },
          {
            label: "total",
            value: "всего",
          },
        ]}
      />

      <ChartRainbow title="Completed" percent={33} sum="$ 12" total="$ 22" />

      {typeof ChartRainbowTxt === "string" && (
        <CodeWrapper
          fileName="ChartRainbow.tsx"
          title="TSX"
          code={ChartRainbowTxt}
        />
      )}
      {typeof ChartRainbowCss === "string" && (
        <CodeWrapper
          fileName="ChartRainbow.module.css"
          title="CSS"
          code={ChartRainbowCss}
        />
      )}
      {typeof hookUseAnimatedCounter === "string" && (
        <CodeWrapper
          description="Этот хук useAnimatedCounter плавно увеличивает число от startCount до endCount за заданное время (timeAnimation). Он автоматически обновляет число с адаптивной скоростью, создавая эффект счетчика, который анимированно поднимается до целевого значения."
          fileName="useAnimatedCounter.ts"
          title="Hook"
          code={hookUseAnimatedCounter}
        />
      )}
    </article>
  );
}
