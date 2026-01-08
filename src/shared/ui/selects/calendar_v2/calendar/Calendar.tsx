import { type RefObject, useEffect, useMemo, useRef, useState } from "react";
import styles from "./Calendar.module.css";
import { CalendarPanelItem } from "./CalendarPanelItem/CalendarPanelItem";
import {
  getCurrentMothDays,
  getDaysAmountInAMonth,
  getInitPanelMonth,
  getInitPanelYear,
  getNextMonthDays,
  getPreviousMonthDays,
  getWeekArray,
  monthsRu,
} from "./utils";
import type { SelectDatesType } from "../types";

export interface Props {
  closeCalendar: () => void;
  parentRef: RefObject<HTMLButtonElement | null>;
  dates: SelectDatesType;
  lang: "ru" | "en";
  onChange: (date: Date) => void;
}

export const Calendar = (props: Props) => {
  const todayDate = useMemo(() => new Date(), []);
  const [panelYear, setPanelYear] = useState(() =>
    getInitPanelYear(props.dates),
  );
  const [panelMonth, setPanelMonth] = useState(() =>
    getInitPanelMonth(props.dates),
  );
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [temporaryStart] = useState<Date | null>(null);
  const prevMonthRef = useRef<HTMLButtonElement | null>(null);

  const nextMonth = (panelMonth: number, panelYear: number) => {
    if (panelMonth === 11) {
      setPanelMonth(0);
      setPanelYear(panelYear + 1);
    } else {
      setPanelMonth(panelMonth + 1);
    }
  };

  const prevMonth = (panelMonth: number, panelYear: number) => {
    if (panelMonth === 0) {
      setPanelMonth(11);
      setPanelYear(panelYear - 1);
    } else {
      setPanelMonth(panelMonth - 1);
    }
  };

  const dateCells = useMemo(() => {
    const daysInAMonth = getDaysAmountInAMonth(panelYear, panelMonth);

    const currentMonthDays = getCurrentMothDays(
      panelYear,
      panelMonth,
      daysInAMonth,
    );
    const prevMonthDays = getPreviousMonthDays(
      panelYear,
      panelMonth,
      props.lang,
    );
    const nextMonthDays = getNextMonthDays(panelYear, panelMonth, props.lang);

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }, [panelYear, panelMonth, props.lang]);

  useEffect(() => {
    if (!rootRef.current) return;

    const clickOutside = (e: MouseEvent) => {
      if (!props.parentRef.current) return;
      if (
        rootRef.current &&
        !rootRef.current.contains(e.target as Node) &&
        !props.parentRef.current.contains(e.target as Node)
      ) {
        props.closeCalendar();
      }
    };

    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, [props.parentRef, props.closeCalendar]);

  return (
    <section ref={rootRef} className={styles.root}>
      <div className={styles.content}>
        <header className={styles.headerLine}>
          <h2 className={styles.headerItem}>
            <button
              type="button"
              ref={prevMonthRef}
              onClick={() => prevMonth(panelMonth, panelYear)}
              className={styles.buttonArray}
            >
              {"<"}
            </button>
            <div className={styles.mouthText}>{monthsRu[panelMonth]}</div>
            <button
              type="button"
              onClick={() => nextMonth(panelMonth, panelYear)}
              className={styles.buttonArray}
            >
              {">"}
            </button>
          </h2>
          <h2 className={styles.headerItem}>{panelYear}</h2>
        </header>
        <div className={styles.itemsWrapper}>
          <ul className={styles.calendarDayList}>
            {getWeekArray(props.lang).map((day) => (
              <li key={day} className={styles.dayItem}>
                {day}
              </li>
            ))}
          </ul>

          <ul className={styles.daysList}>
            {dateCells.map((cell) => (
              <CalendarPanelItem
                todayDate={todayDate}
                selectFrom={props.dates?.dateFrom || temporaryStart}
                selectTo={props.dates?.dateTo}
                cell={cell}
                onChange={props.onChange}
                key={`${cell.date}-${cell.month}-${cell.year}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
