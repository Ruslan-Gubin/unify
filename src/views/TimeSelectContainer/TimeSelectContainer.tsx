"use client";
import { useState } from "react";
import { SelectTime } from "@/src/shared/ui/selects/SelectTime/SelectTime";

export const TimeSelectContainer = () => {
  const [hour, setHour] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");

  return (
    <SelectTime
      hour={hour}
      minutes={minutes}
      onChangeHours={setHour}
      onChangeMinutes={setMinutes}
    />
  );
};
