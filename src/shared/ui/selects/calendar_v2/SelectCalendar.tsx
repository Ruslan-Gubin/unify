import { type MouseEventHandler, useRef, useState } from "react";
import { Calendar } from "./calendar/Calendar";
import styles from "./SelectCalendar.module.css";
import { CalendarIcon } from "./svg/CalendarIcon";
import { CloseIcon } from "./svg/CloseIcon";
import type { SelectDatesType } from "./types";

type Props = {
  onChange: (dates: SelectDatesType) => void;
  lang?: "ru" | "en";
  dates: SelectDatesType;
  placeholder?: string[];
  width?: number;
};

export const SelectCalendar = (props: Props) => {
  const rootRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChangeFrom, setIsChangeFrom] = useState<boolean>(false);
  const isMultiplied = Object.hasOwn(props.dates, "dateTo");

  const onCloseCalendar = () => {
    setIsOpen(false);
    setIsChangeFrom(false);
  };

  const clearDates: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    const clearDates: SelectDatesType = {
      dateFrom: null,
    };

    if (isMultiplied) {
      clearDates.dateTo = null;
    }

    props.onChange(clearDates);
    onCloseCalendar();
  };

  const onChangeDate = (value: Date) => {
    if (!isMultiplied) {
      props.onChange({ dateFrom: value });
      onCloseCalendar();
      return;
    }
    if (!isChangeFrom) {
      props.onChange({ dateFrom: value, dateTo: props.dates.dateTo });
      setIsChangeFrom(true);
    } else {
      props.onChange({
        dateFrom: props.dates.dateFrom
          ? props.dates.dateFrom > value
            ? value
            : props.dates.dateFrom
          : null,
        dateTo: props.dates.dateFrom
          ? props.dates.dateFrom > value
            ? props.dates.dateFrom
            : value
          : null,
      });
      onCloseCalendar();
    }
  };

  return (
    <div className={styles.root} data-width={props.width ?? "auto"}>
      <div
        className={`${styles.select} ${isMultiplied ? styles.selectMultiply : ""} `}
      >
        <button
          type="button"
          onClick={() => (isOpen ? onCloseCalendar() : setIsOpen(true))}
          ref={rootRef}
          className={styles.selectButton}
        >
          <div className={styles.iconContainer}>
            <CalendarIcon />
          </div>
          <p className={styles.selectText}>
            <span
              className={`${styles.dateValue} ${!props.dates.dateFrom ? styles.selectTextDateOpacity : ""}`}
            >
              {props.dates.dateFrom
                ? props.dates.dateFrom.toLocaleDateString()
                : props.placeholder && typeof props.placeholder[0] === "string"
                  ? props.placeholder[0]
                  : "Дата от"}
            </span>

            {isMultiplied && (
              <>
                <span className={styles.dateCenter}>
                  {props.placeholder && typeof props.placeholder[1] === "string"
                    ? props.placeholder[1]
                    : "до"}
                </span>

                <span
                  className={`${styles.dateValue} ${!props.dates.dateTo ? styles.selectTextDateOpacity : ""}`}
                >
                  {props.dates.dateTo
                    ? props.dates.dateTo.toLocaleDateString()
                    : props.placeholder &&
                      typeof props.placeholder[2] === "string"
                      ? props.placeholder[2]
                      : "Дата до"}
                </span>
              </>
            )}
          </p>
        </button>
        <button
          type="button"
          aria-pressed="true"
          className={`${styles.iconContainer} ${styles.clearButton}`}
          onClick={clearDates}
          disabled={!props.dates.dateFrom && !props.dates.dateTo}
        >
          {(props.dates.dateFrom || props.dates.dateTo) && <CloseIcon />}
        </button>
      </div>
      {isOpen && (
        <Calendar
          onChange={onChangeDate}
          lang={props.lang ?? "ru"}
          parentRef={rootRef}
          closeCalendar={onCloseCalendar}
          dates={props.dates}
        />
      )}
    </div>
  );
};
