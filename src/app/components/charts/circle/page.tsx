import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { ProgressCircle } from "@/src/shared/ui/chart/circle/ProgressCircle";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import styles from "./Circle.module.css";

export const metadata: Metadata = generateMetadata({
"title": "Круговые диаграммы - My UI Kit",
    "description": "Документация по круговым диаграммам в My UI Kit. Узнайте, как создавать и настраивать круговые диаграммы для визуализации данных.",
    "keywords": [
        "круговые диаграммы",
        "визуализация данных",
        "Canvas",
        "HTML5",
        "документация"
    ]
});

export default async function ChartsCirclePage() {
  const ProgressCircleTsx = await readContentFile(
    "src/shared/ui/chart/circle/ProgressCircle.tsx",
  );

  const ProgressCircleCss = await readContentFile(
    "src/shared/ui/chart/circle/ProgressCircle.module.css",
  );

  const hookUseCountUp = await readContentFile(
    "src/shared/hooks/useAnimatedCounter.ts",
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
            timeAnimation={800}
            sections={[
              { color: "#20b2aa", percent: 20 },
              { color: "#A6F5FF", percent: 40 },
              { color: "#61EDFF", percent: 60 },
              { color: "#1CE5FF", percent: 80 },
              { color: "#0095A9", percent: 100 },
            ]}
            className={styles.chartCircle}
            percent={100}
          />
        </li>
        <li>
          <ProgressCircle
            timeAnimation={800}
            sections={[
              { color: "#20b2aa", percent: 20 },
              { color: "#A6F5FF", percent: 40 },
              { color: "#61EDFF", percent: 60 },
              { color: "#1CE5FF", percent: 80 },
              { color: "#0095A9", percent: 100 },
            ]}
            className={styles.chartCircle}
          />
        </li>
        <li>
          <ProgressCircle
            timeAnimation={800}
            sections={[
              { color: "#47C0BB", percent: 60 },
              { color: "#A6F5FF", percent: 100 },
            ]}
            className={styles.chartCircle}
            percent={70}
          />
        </li>
        <li>
          <ProgressCircle
            timeAnimation={800}
            sections={[
              { color: "#20b2aa", percent: 86 },
              { color: "#A6F5FF", percent: 100 },
            ]}
            className={styles.chartCircle}
            percent={86}
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
          description="Этот хук useAnimatedCounter плавно увеличивает число от startCount до endCount за заданное время (timeAnimation). Он автоматически обновляет число с адаптивной скоростью, создавая эффект счетчика, который анимированно поднимается до целевого значения."
          fileName="useAnimatedCounter.ts"
          title="Hook"
          code={hookUseCountUp}
        />
      )}
    </article>
  );
}
