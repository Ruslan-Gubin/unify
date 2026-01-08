"use client";
import { useState } from "react";
import { SelectCalendar } from "@/src/shared/ui/selects/calendar_v2/SelectCalendar";
import type { SelectDatesType } from "@/src/shared/ui/selects/calendar_v2/types";

export const CalendarWrapperV2 = () => {
  const [dates, setDates] = useState<SelectDatesType>({
    dateFrom: null,
    dateTo: null,
  });
  const [dates2, setDates2] = useState<SelectDatesType>({
    dateFrom: null,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "12px",
      }}
    >
      <SelectCalendar
        onChange={setDates}
        dates={dates}
        placeholder={["Выберите дату", "до", "Выберите дату"]}
        width={260}
      />
      <SelectCalendar
        onChange={setDates2}
        dates={dates2}
        placeholder={["Выберите дату"]}
        width={150}
      />
    </div>
  );
};
