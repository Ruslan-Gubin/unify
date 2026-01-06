import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/src/app/core/generateMetadata";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";
import { WeekCalendarLine } from "@/src/shared/ui/selects/WeekCalendarLine/WeekCalendarLine";
import { CalendarWrapperV1 } from "@/src/views/CalendarWrapper/CalendarWrapperV1";
import { TimeSelectContainer } from "@/src/views/TimeSelectContainer/TimeSelectContainer";

export const metadata: Metadata = generateMetadata({
  title: "Select Components - My UI Kit",
  description:
    "Документация по компонентам выбора (Select) в My UI Kit. Узнайте, как создавать и настраивать различные типы select элементов с различными функциями и возможностями.",
  keywords: [
    "select",
    "компоненты",
    "UI Kit",
    "документация",
    "React",
    "Next.js",
  ],
});

export default function SelectPage() {
  return (
    <article className="article__page">
      <h1>Select</h1>
      <Link href={"/components/select/time-select"}>
        <Button variantColor="blue" variant="link">
          Time select
        </Button>
      </Link>
      <TimeSelectContainer />
      <Link href={"/components/select/week-calendar-line"}>
        <Button variantColor="blue" variant="link">
          Week Calendar Line
        </Button>
      </Link>
      <div style={{ maxWidth: "540px" }}>
        <WeekCalendarLine />
      </div>
      <Link href={"/components/select/calendar-v1"}>
        <Button variantColor="blue" variant="link">
          Calendar v1
        </Button>
      </Link>
      <CalendarWrapperV1 />
    </article>
  );
}
