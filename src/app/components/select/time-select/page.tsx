import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { TimeSelectContainer } from "@/src/views/TimeSelectContainer/TimeSelectContainer";

export const metadata: Metadata = generateMetadata({
  title: "Time Select Component - My UI Kit",
  description:
    "Документация по компоненту выбора времени (Time Select) в My UI Kit. Узнайте, как создавать и настраивать элементы выбора времени с различными функциями и возможностями.",
  keywords: [
    "select time",
    "v1",
    "компоненты",
    "UI Kit",
    "документация",
    "React",
    "Next.js",
  ],
});

export default async function TimeSelectPage() {
  const codeTsx = await readContentFile(
    "src/shared/ui/selects/SelectTime/SelectTime.tsx",
  );

  const codeCss = await readContentFile(
    "src/shared/ui/selects/SelectTime/SelectTime.module.css",
  );

  const codeSvg = await readContentFile(
    "src/shared/ui/selects/SelectTime/svg/TimeSelectIcon.tsx",
  );

  return (
    <article className="article__page">
      <h1>Time select</h1>
      <InfoBlock
        title="Параметры"
        infoList={[
          {
            value:
              "active - Управляет видимостью модального окна.При значении true модальное окно отображается.",
          },
        ]}
      />
      <TimeSelectContainer />

      {typeof codeTsx === "string" && (
        <CodeWrapper fileName="SelectTime.tsx" title="TSX" code={codeTsx} />
      )}

      {typeof codeCss === "string" && (
        <CodeWrapper
          fileName="SelectTime.module.css"
          title="CSS"
          code={codeCss}
        />
      )}

      {typeof codeSvg === "string" && (
        <CodeWrapper fileName="TimeSelectIcon.tsx" title="SVG" code={codeSvg} />
      )}
    </article>
  );
}
