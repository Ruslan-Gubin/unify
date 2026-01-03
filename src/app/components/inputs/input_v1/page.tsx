import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { InputWrapper } from "./InputWrapper";

export const metadata: Metadata = generateMetadata({
    "title": "Поле ввода v1 - My UI Kit",
    "description": "Документация по первой версии поля ввода в My UI Kit. Узнайте, как использовать и настраивать базовую версию поля ввода.",
    "keywords": [
        "поле ввода",
        "v1",
        "компоненты",
        "UI Kit",
        "документация",
        "React",
        "Next.js"
    ]
});

export default async function InputV1Page() {
  const codeTsx = await readContentFile(
    "src/shared/ui/inputs/Input_v1/Input.tsx",
  );

  const codeCss = await readContentFile(
    "src/shared/ui/inputs/Input_v1/Input.module.css",
  );

  return (
    <article className="article__page">
      <h1>Input v1</h1>
      <InfoBlock
        title="Параметры"
        infoList={[
          {
            label: "error",
            value: "Строка с сообщением об ошибке.",
          },
          {
            label: "placeholder",
            value: "Текст-заполнитель для поля ввода.",
          },
          {
            label: "fullWidth",
            value:
              "Флаг, который растягивает компонент на всю ширину родительского контейнера.",
          },
          {
            label: "variant",
            value:
              "Стиль оформления компонента: standard, outlined или filled.",
          },
          {
            label: "variantSize",
            value: "Размер компонента: xs, sm, md или lg.",
          },
          {
            label: "customClass",
            value:
              "Дополнительный пользовательский CSS-класс для кастомизации.",
          },
          {
            label: "variantColor",
            value: "Цветовая схема компонента: teal, error, green или pink.",
          },
          {
            label: "value",
            value: "Текущее значение поля ввода.",
          },
          {
            label: "onClickRightIcon",
            value: "Функция-обработчик клика по правой иконке.",
          },
          {
            label: "leftIcon / rightIcon",
            value:
              "Компоненты иконок, отображаемые слева и справа от текста ввода соответственно.",
          },
          {
            label: "label",
            value: "Текст лейбла (подписи) над полем ввода.",
          },
          {
            label: "name",
            value: "Имя поля, используемое при работе с формами.",
          },
        ]}
      />
      <InputWrapper />

      {typeof codeTsx === "string" && (
        <CodeWrapper fileName="Input.tsx" title="TSX" code={codeTsx} />
      )}

      {typeof codeCss === "string" && (
        <CodeWrapper fileName="Input.module.css" title="CSS" code={codeCss} />
      )}
    </article>
  );
}
