import { memo, useMemo } from "react";
import { type DateCellItem, isToday } from "../utils";

import styles from "./CalendarPanelItem.module.css";

type Props = {
  todayDate: Date;
  cell: DateCellItem;
  onDateSelect: (item: DateCellItem) => void;
  selectDate: Date;
};

export const CalendarPanelItem = memo((props: Props) => {
  const { todayDate, cell, onDateSelect, selectDate } = props;

  const classRootItem = useMemo(() => {
    const classes = [styles.calendarPanelItemNumber];

    const isSelectedDate = isToday(cell, selectDate);
    const isTodayDate = isToday(cell, todayDate);

    if (isSelectedDate) {
      classes.push(styles.calendarPanelItemSelected);
    }

    if (cell.type !== "current" && !isSelectedDate) {
      classes.push(styles.calendarPanelItemNotInRange);
    }

    if (isTodayDate) {
      classes.push(styles.itemToday);
    }

    return classes;
  }, [cell, selectDate, todayDate]);

  const handleSelectDate = () => {
    if (cell.type !== "current") return;
    onDateSelect(cell);
  };

  return (
    <button
      type="button"
      className={styles.calendarPanelItem}
      key={`${cell.date}-${cell.month}-${cell.year}`}
      onClick={handleSelectDate}
    >
      <div className={classRootItem.join(" ")}>{cell.date}</div>
    </button>
  );
});

CalendarPanelItem.displayName = "CalendarPanelItem";

