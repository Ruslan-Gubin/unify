import {
  type RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./Calendar.module.css";
import { CalendarPanelItem } from "./CalendarPanelItem/CalendarPanelItem";
import { ArrowIcon } from "./svg/ArrowIcon";
import {
  type DateCellItem,
  getCurrentMothDays,
  getDaysAmountInAMonth,
  getNextMonthDays,
  getPreviousMonthDays,
  monthsRu,
  weekList,
} from "./utils";

export type Props = {
  onChange: (value: Date) => void;
  closeCalendar: () => void;
  todayDate: Date;
  selectDate: Date;
  parentRef: RefObject<HTMLButtonElement | null>;
  lang: "ru" | "en";
};

export const Calendar = ({
  onChange,
  selectDate,
  closeCalendar,
  todayDate,
  parentRef,
  lang,
}: Props) => {
  const [panelYear, setPanelYear] = useState(() => selectDate.getFullYear());
  const [panelMonth, setPanelMonth] = useState(() => selectDate.getMonth());
  const rootRef = useRef<HTMLDivElement>(null);

  const nextMonth = () => {
    if (panelMonth === 11) {
      setPanelMonth(0);
      setPanelYear(panelYear + 1);
    } else {
      setPanelMonth(panelMonth + 1);
    }
  };

  const prevMonth = () => {
    if (panelMonth === 0) {
      setPanelMonth(11);
      setPanelYear(panelYear - 1);
    } else {
      setPanelMonth(panelMonth - 1);
    }
  };

  const prevYear = () => {
    setPanelYear((prev) => prev - 1);
  };

  const nextYear = () => {
    setPanelYear((prev) => prev + 1);
  };

  const dateCells = useMemo(() => {
    const daysInAMonth = getDaysAmountInAMonth(panelYear, panelMonth);

    const currentMonthDays = getCurrentMothDays(
      panelYear,
      panelMonth,
      daysInAMonth,
    );
    const prevMonthDays = getPreviousMonthDays(panelYear, panelMonth, lang);
    const nextMonthDays = getNextMonthDays(panelYear, panelMonth, lang);

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }, [panelYear, panelMonth, lang]);

  const onDateSelect = useCallback(
    (item: DateCellItem) => (
      onChange(new Date(item.year, item.month, item.date)), closeCalendar()
    ),
    [closeCalendar, onChange],
  );

  useEffect(() => {
    if (!rootRef.current) return;

    const clickOutside = (e: MouseEvent) => {
      if (!parentRef.current) return;
      if (
        rootRef.current &&
        !rootRef.current.contains(e.target as Node) &&
        !parentRef.current.contains(e.target as Node)
      ) {
        closeCalendar();
      }
    };

    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, [closeCalendar, parentRef]);

  return (
    <section ref={rootRef} className={`${styles.root}`}>
      <section className={styles.content}>
        <header className={styles.headerLine}>
          <div className={styles.monthValue}>
            <button
              type="button"
              onClick={prevMonth}
              className={styles.buttonArray}
            >
              <ArrowIcon direction="left" />
            </button>
            <div className={styles.mouthText}>{monthsRu[panelMonth]}</div>
            <button
              type="button"
              onClick={nextMonth}
              className={styles.buttonArray}
            >
              <ArrowIcon direction="right" />
            </button>
          </div>

          <div className={styles.monthValue}>
            <button
              type="button"
              onClick={prevYear}
              className={styles.buttonArray}
            >
              <ArrowIcon direction="left" />
            </button>
            <div className={styles.mouthTextYear}>{panelYear}</div>
            <button
              type="button"
              onClick={nextYear}
              className={styles.buttonArray}
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </header>
        <div className={styles.itemsWrapper}>
          <ul className={styles.calendarDayList}>
            {weekList.map((day) => (
              <li key={day} className={styles.dayItem}>
                {day[0]}
              </li>
            ))}
          </ul>

          <ul className={styles.daysList}>
            {dateCells.map((cell) => (
              <CalendarPanelItem
                todayDate={todayDate}
                selectDate={selectDate}
                cell={cell}
                onDateSelect={onDateSelect}
                key={`${cell.date}-${cell.month}-${cell.year}`}
              />
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};
