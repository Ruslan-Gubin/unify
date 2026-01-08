import { memo, useMemo } from "react";
import { type DateCellItem, getFormattedCellDate, isToday } from "../utils";
import styles from "./CalendarPanelItem.module.css";

type Props = {
  todayDate: Date;
  cell: DateCellItem;
  onChange: (item: Date) => void;
  selectFrom?: Date | null;
  selectTo?: Date | null;
};

export const CalendarPanelItem = memo((props: Props) => {
  const classRootItem = useMemo(() => {
    const classes = [styles.calendarPanelItemNumber];

    const isTodayDate = isToday(props.cell, props.todayDate);
    const isSelectedDate = false;
    let isSelectStart = false;
    let isSelectEnd = false;

    if (props.selectFrom) {
      isSelectStart = isToday(props.cell, props.selectFrom);
    }

    if (props.selectTo) {
      isSelectEnd = isToday(props.cell, props.selectTo);
    }

    if (isSelectedDate || isSelectStart || isSelectEnd) {
      classes.push(styles.calendarPanelItemSelected);
    }

    if (
      props.cell.type !== "current" &&
      !isSelectedDate &&
      !isSelectStart &&
      !isSelectEnd
    ) {
      classes.push(styles.calendarPanelItemNotInRange);
    }

    if (isTodayDate) {
      classes.push(styles.itemToday);
    }

    return classes;
  }, [
    props.cell,
    props.todayDate,
    props.selectTo,
    props.selectFrom,
  ]);

  const checkPassingCell = (
    cell: DateCellItem,
    selectStart: Date | null | undefined,
    selectEnd: Date | null | undefined,
  ) => {
    if (!selectStart || !selectEnd) return false;
    const formattedCurrentCell = getFormattedCellDate(cell);
    return (
      formattedCurrentCell > selectStart && formattedCurrentCell < selectEnd
    );
  };

  return (
    <button
      type="button"
      className={
        checkPassingCell(props.cell, props.selectFrom, props.selectTo)
          ? `${styles.calendarPanelItem} ${styles.calendarPanelItemPassing}`
          : styles.calendarPanelItem
      }
      key={`${props.cell.date}-${props.cell.month}-${props.cell.year}`}
      onClick={() => props.onChange(getFormattedCellDate(props.cell))}
    >
      <div className={classRootItem.join(" ")}>{props.cell.date}</div>
    </button>
  );
});

CalendarPanelItem.displayName = "CalendarPanelItem";
