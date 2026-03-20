import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { TextAreaResizeWrapper } from "@/src/views/TextAreaResizeWrapper/TextAreaResizeWrapper";

export const metadata: Metadata = generateMetadata({
  title: "Область ввода - My UI Kit",
  description:
    "Компонент TextAreaResize представляет собой кастомное поле ввода с возможностью автоматического изменения высоты по мере ввода текста. Это удобное и гибкое решение для реализации расширяемого текстового поля, которое автоматически подстраивается под объем введенного содержимого.",
  keywords: [
    "область ввода",
    "v2",
    "компоненты",
    "UI Kit",
    "документация",
    "React",
    "Next.js",
  ],
});

export default async function TextAreaResizePage() {
  const codeTsx = await readContentFile(
    "src/shared/ui/inputs/TextAreaResize/TextAreaResize.tsx",
  );

  const codeCss = await readContentFile(
    "src/shared/ui/inputs/TextAreaResize/TextAreaResize.module.css",
  );

  return (
    <article className="article__page">
      <h1>TextAreaResize</h1>
      <InfoBlock
        title="Параметры"
        infoList={[
          {
            label: "label",
            value: "Текст лейбла (подписи) над полем ввода.",
          },
          {
            label: "name",
            value:
              "Имя поля, используется для идентификации поля и связки с лейблом.",
          },
          {
            label: "error",
            value: "Текст ошибки, отображаемый при наличии ошибок в вводе.",
          },
          {
            label: "disabled",
            value: "Флаг, указывающий, что поле недоступно для редактирования.",
          },
          {
            label: "onChange",
            value:
              "Обработчик изменения текста, вызывается при каждом вводе пользователя.",
          },
        ]}
      />

      <TextAreaResizeWrapper />

      {typeof codeTsx === "string" && (
        <CodeWrapper fileName="TextAreaResize.tsx" title="TSX" code={codeTsx} />
      )}

      {typeof codeCss === "string" && (
        <CodeWrapper
          fileName="TextAreaResize.module.css"
          title="CSS"
          code={codeCss}
        />
      )}
    </article>
  );
}
