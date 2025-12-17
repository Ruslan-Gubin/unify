import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { ProgressCircle } from "@/src/shared/ui/chart/circle/ProgressCircle";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import styles from "./Circle.module.css";

export const metadata: Metadata = generateMetadata({
  title: "Charts circle Page",
  description: "Charts circle Page description",
});

export default async function ChartsCirclePage() {
  const ProgressCircleTsx = await readContentFile(
    "src/shared/ui/chart/circle/ProgressCircle.tsx",
  );

  const ProgressCircleCss = await readContentFile(
    "src/shared/ui/chart/circle/ProgressCircle.module.css",
  );

  const hookUseCountUp = await readContentFile(
    "src/shared/hooks/useCountUp.ts",
  );

  return (
    <article className="article__page">
      <h1>Progress Circle</h1>

      <InfoBlock
        title="Параметры"
        infoList={[
          {
            label: "timeAnimation",
            value: "опция изменить время анимации. Принимает на вход число",
          },
          {
            label: "className",
            value:
              "опция для общего размера компонента и дополнительных стилей.",
          },
          {
            label: "sections",
            value:
              "принимает массив структуры { color: string, percent: number } [], цвет и процент заполнения.",
          },
          {
            label: "percent",
            value:
              "опционально, для отображения в центре процент заполнения, можно получить по последнему значению в списке sections[at -1].percent.",
          },
        ]}
      />

      <ul style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <li>
          <ProgressCircle
            timeAnimation={1500}
            sections={[
              { color: "#20b2aa", percent: 12 },
              { color: "#1079f2", percent: 44 },
              { color: "#4db71f", percent: 70 },
              { color: "#e364c7", percent: 96 },
              { color: "#ee6868", percent: 100 },
            ]}
            className={styles.chartCircle}
            percent={100}
          />
        </li>
        <li>
          <ProgressCircle
            timeAnimation={1000}
            sections={[
              { color: "#4cb872", percent: 12 },
              { color: "#6cd08f", percent: 50 },
              { color: "#a4f4c0", percent: 70 },
            ]}
            className={styles.chartCircle}
            percent={70}
          />
        </li>
        <li>
          <ProgressCircle
            timeAnimation={1200}
            sections={[{ color: "#20b2aa", percent: 85 }]}
            className={styles.chartCircle}
            percent={85}
          />
        </li>
      </ul>

      {typeof ProgressCircleTsx === "string" && (
        <CodeWrapper
          fileName="ProgressCircle.tsx"
          title="TSX"
          code={ProgressCircleTsx}
        />
      )}
      {typeof ProgressCircleCss === "string" && (
        <CodeWrapper
          fileName="ProgressCircle.module.css"
          title="CSS"
          code={ProgressCircleCss}
        />
      )}
      {typeof hookUseCountUp === "string" && (
        <CodeWrapper
          description="Этот хук useCountUp плавно увеличивает число от startCount до endCount за заданное время (timeAnimation). Он автоматически обновляет число с адаптивной скоростью, создавая эффект счетчика, который анимированно поднимается до целевого значения."
          fileName="useCountUp.ts"
          title="Hook"
          code={hookUseCountUp}
        />
      )}
    </article>
  );
}
