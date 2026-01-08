import type { Metadata } from "next";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { readContentFile } from "@/src/shared/services/read-content-file";
import { CodeWrapper } from "@/src/shared/ui/CodeWrapper/CodeWrapper";
import { InfoBlock } from "@/src/shared/ui/InfoBlock/InfoBlock";
import { CalendarWrapperV2 } from "@/src/views/CalendarWrapper/CalendarWrapperV2";

export const metadata: Metadata = generateMetadata({
  title: "Календарь - My UI Kit",
  description:
    "Компонент SelectCalendar представляет собой календарь с возможностью выбора даты. Он реализует интерфейс выпадающего списка (select), где пользователь может выбрать дату через календарный интерфейс.",
  keywords: [
    "calendar",
    "компоненты",
    "UI Kit",
    "документация",
    "React",
    "Next.js",
  ],
});

export default async function CalendarV2Page() {
  const selectCalendarTsx = await readContentFile(
    "src/shared/ui/selects/calendar_v2/SelectCalendar.tsx",
  );

  const selectCalendarCss = await readContentFile(
    "src/shared/ui/selects/calendar_v2/SelectCalendar.module.css",
  );

  const calendarIconSvg = await readContentFile(
    "src/shared/ui/selects/calendar_v2/svg/CalendarIcon.tsx",
  );

  const closeIconSvg = await readContentFile(
    "src/shared/ui/selects/calendar_v2/svg/CloseIcon.tsx",
  );

  const calendarTsx = await readContentFile(
    "src/shared/ui/selects/calendar_v2/calendar/Calendar.tsx",
  );

  const calendarCss = await readContentFile(
    "src/shared/ui/selects/calendar_v2/calendar/Calendar.module.css",
  );

  const calendarPanelItemTsx = await readContentFile(
    "src/shared/ui/selects/calendar_v2/calendar/CalendarPanelItem/CalendarPanelItem.tsx",
  );

  const calendarPanelItemCss = await readContentFile(
    "src/shared/ui/selects/calendar_v2/calendar/CalendarPanelItem/CalendarPanelItem.module.css",
  );

  const typesTs = await readContentFile(
    "src/shared/ui/selects/calendar_v2/types.ts",
  );

  return (
    <article className="article__page">
      <h1>Calendar v2</h1>
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
            label: "onChange",
            value:
              "Функция изменения даты, возвращает object ({ dateFrom: Date } или { dateFrom: Date, dateTo: Date })",
          },
          {
            label: "todayDate",
            value:
              "Текущая дата (для отображения сегодняшнего дня в календаре)",
          },
          {
            label: "lang",
            value: "Язык календаря ru | en, default ru",
          },
          {
            label: "width",
            value: "Длина",
          },
          {
            label: "placeholder",
            value:
              "Значение если не выбрана дата ['первое значение', 'центр', 'второе значение']",
          },
        ]}
      />
      <CalendarWrapperV2 />
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
      {typeof calendarIconSvg === "string" && (
        <CodeWrapper
          fileName="CalendarIcon.tsx"
          title="SVG"
          code={calendarIconSvg}
        />
      )}
      {typeof closeIconSvg === "string" && (
        <CodeWrapper fileName="CloseIcon.tsx" title="SVG" code={closeIconSvg} />
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
      {typeof typesTs === "string" && (
        <CodeWrapper fileName="types.tsx" title="TS" code={typesTs} />
      )}
    </article>
  );
}
