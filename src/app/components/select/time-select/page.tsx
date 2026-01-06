import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { TimeSelectContainer } from "@/src/views/TimeSelectContainer/TimeSelectContainer";

export const metadata: Metadata = generateMetadata({
  title: "Time Select Component - My UI Kit",
  description:
    "Страница TimeSelectPage - это документационная страница для компонента выбора времени (Time Select) в UI Kit. Она предоставляет информацию о том, как использовать и настраивать элемент выбора времени, включая интерактивный пример и исходный код. Страница включает в себя описание параметров компонента, интерактивный пример компонента и отображение исходных кодов (TSX, CSS и SVG-иконка). Это позволяет разработчикам легко понять, как интегрировать и настроить компонент выбора времени в своих приложениях.",
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
        title="Описание"
        infoList={[
          {
            value:
              "Компонент SelectTime - это UI-компонент для выбора времени, позволяющий пользователю выбрать часы и минуты. Он состоит из кнопки с отображением текущего времени и выпадающего меню с двумя списками: один для часов (от 01 до 23) и другой для минут (от 01 до 59).",
          },
          {
            value:
              "Компонент имеет состояние open, которое управляет отображением выпадающего списка. При клике вне компонента, список закрывается. Выбранные значения выделяются стилем. Компонент включает иконку часов и отображает выбранное время в формате ЧЧ:ММ.",
          },
        ]}
      />
      <InfoBlock
        title="Параметры"
        infoList={[
          {
            label: "hour (string)",
            value: "текущий выбранный час",
          },
          {
            label: "minutes (string)",
            value: "текущие выбранные минуты",
          },
          {
            label: "onChangeHours (function) ",
            value: "функция обратного вызова, вызываемая при изменении часа",
          },
          {
            label: "onChangeMinutes (function)",
            value: "функция обратного вызова, вызываемая при изменении минут",
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
