"use client";
import { useState } from "react";
import { SelectCalendar } from "@/src/shared/ui/selects/calendar_v1/SelectCalendar";

export const CalendarWrapperV1 = () => {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <div style={{ width: "130px" }}>
      <SelectCalendar
        onChange={setDate}
        placeholder="Выберите дату"
        date={date}
      />
    </div>
  );
};
