import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { CalendarWrapperV1 } from "@/src/views/CalendarWrapper/CalendarWrapperV1";

export const metadata: Metadata = generateMetadata({
  title: "Календарь - My UI Kit",
  description:
    "Компонент SelectCalendar представляет собой календарь с возможностью выбора даты. Он реализует интерфейс выпадающего списка (select), где пользователь может выбрать дату через календарный интерфейс.",
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

export default async function CalendarV1Page() {
  const selectCalendarTsx = await readContentFile(
    "src/shared/ui/selects/calendar_v1/SelectCalendar.tsx",
  );

  const selectCalendarCss = await readContentFile(
    "src/shared/ui/selects/calendar_v1/SelectCalendar.module.css",
  );

  const selectIconSvg = await readContentFile(
    "src/shared/ui/selects/calendar_v1/svg/SelectIcon.tsx",
  );

  const calendarTsx = await readContentFile(
    "src/shared/ui/selects/calendar_v1/calendar/Calendar.tsx",
  );

  const calendarCss = await readContentFile(
    "src/shared/ui/selects/calendar_v1/calendar/Calendar.module.css",
  );

  const arrowIcon = await readContentFile(
    "src/shared/ui/selects/calendar_v1/calendar/svg/ArrowIcon.tsx",
  );

  const calendarPanelItemTsx = await readContentFile(
    "src/shared/ui/selects/calendar_v1/calendar/CalendarPanelItem/CalendarPanelItem.tsx",
  );

  const calendarPanelItemCss = await readContentFile(
    "src/shared/ui/selects/calendar_v1/calendar/CalendarPanelItem/CalendarPanelItem.module.css",
  );

  return (
    <article className="article__page">
      <h1>Calendar v1</h1>
      <InfoBlock
        title="Описание"
        infoList={[
          {
            value:
              "Компонент SelectCalendar представляет собой календарь с возможностью выбора даты. Он реализует интерфейс выпадающего списка (select), где пользователь может выбрать дату через календарный интерфейс.",
          },
        ]}
      />
      <InfoBlock
        title="Параметры"
        infoList={[
 {
    label: 'closeCalendar',
    value: 'Функция для закрытия календаря (устанавливает open в false)'
  },
  {
    label: 'onChange',
    value: 'Функция изменения даты (передается из props.onChange)'
  },
  {
    label: 'parentRef',
    value: 'Ссылка на кнопку-триггер'
  },
  {
    label: 'selectDate',
    value: 'Текущая дата для выделения в календаре (если props.date null, используется текущая дата)'
  },
  {
    label: 'todayDate',
    value: 'Текущая дата (для отображения сегодняшнего дня в календаре)'
  },
  {
    label: 'lang',
    value: 'Язык календаря (всегда "ru")'
  },
        ]}
      />
      <CalendarWrapperV1 />

      {typeof selectCalendarTsx === "string" && (
        <CodeWrapper
          fileName="SelectCalendar.tsx"
          title="TSX"
          code={selectCalendarTsx}
        />
      )}

      {typeof selectCalendarCss === "string" && (
        <CodeWrapper
          fileName="SelectCalendar.module.css"
          title="CSS"
          code={selectCalendarCss}
        />
      )}

      {typeof selectIconSvg === "string" && (
        <CodeWrapper
          fileName="SelectIcon.tsx"
          title="SVG"
          code={selectIconSvg}
        />
      )}

      {typeof calendarTsx === "string" && (
        <CodeWrapper fileName="Calendar.tsx" title="TSX" code={calendarTsx} />
      )}

      {typeof calendarCss === "string" && (
        <CodeWrapper
          fileName="Calendar.module.css"
          title="CSS"
          code={calendarCss}
        />
      )}

      {typeof arrowIcon === "string" && (
        <CodeWrapper fileName="ArrowIcon.tsx" title="SVG" code={arrowIcon} />
      )}

      {typeof calendarPanelItemTsx === "string" && (
        <CodeWrapper
          fileName="CalendarPanelItem.tsx"
          title="TSX"
          code={calendarPanelItemTsx}
        />
      )}

      {typeof calendarPanelItemCss === "string" && (
        <CodeWrapper
          fileName="CalendarPanelItem.module.css"
          title="CSS"
          code={calendarPanelItemCss}
        />
      )}
    </article>
  );
}
