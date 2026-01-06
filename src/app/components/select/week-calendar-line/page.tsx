import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { WeekCalendarLine } from "@/src/shared/ui/selects/WeekCalendarLine/WeekCalendarLine";

export const metadata: Metadata = generateMetadata({
  title: "Week calendar line - My UI Kit",
  description:
    "Страница WeekCalendarLinePage - это документационная страница для компонента WeekCalendarLine в UI Kit. Она предоставляет информацию о том, как использовать и настраивать компонент линейного календаря на неделю. Страница включает в себя интерактивный пример компонента, отображение исходных кодов (TSX, CSS и SVG-иконка). Это позволяет разработчикам легко понять, как интегрировать и настроить компонент линейного календаря в своих приложениях.",
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

export default async function WeekCalendarLinePage() {
  const codeTsx = await readContentFile(
    "src/shared/ui/selects/WeekCalendarLine/WeekCalendarLine.tsx",
  );

  const codeCss = await readContentFile(
    "src/shared/ui/selects/WeekCalendarLine/WeekCalendarLine.module.css",
  );

  const codeSvg = await readContentFile(
    "src/shared/ui/selects/WeekCalendarLine/svg/CalendarArrowIcon.tsx",
  );

  return (
    <article className="article__page">
      <h1>Week calendar line</h1>
      <InfoBlock
        title="Описание"
        infoList={[
          {
            value:
              "Компонент WeekCalendarLine - это UI-компонент, представляющий собой линейный календарь на неделю. Он позволяет пользователю видеть и выбирать даты в пределах недели.",
          },
          {
            value: "Отображение текущего месяца и года",
          },
          {
            value:
              "Возможность перемещаться по неделям с помощью стрелок влево и вправо",
          },
          {
            value: "Выделение текущего дня и выбранной даты",
          },
          {
            value:
              "Компонент использует состояние для отслеживания текущей даты и диапазона дат недели. Он также определяет, является ли текущий день сегодняшним, и выделяет его соответствующим образом. При клике на день недели, дата становится выбранной. Компонент использует локализацию для отображения названий месяцев и дней недели на русском языке.",
          },
        ]}
      />

      <div style={{ maxWidth: "540px" }}>
        <WeekCalendarLine />
      </div>

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
