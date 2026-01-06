import { useRef, useState } from "react";
import { Calendar } from "./calendar/Calendar";
import styles from "./SelectCalendar.module.css";
import { SelectIcon } from "./svg/SelectIcon";

type Props = {
  label?: string;
  date: Date | null;
  onChange: (date: Date) => void;
};

export const SelectCalendar = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement | null>(null);

  return (
    <section className={styles.selectCalendar}>
      <button
        type="button"
        ref={ref}
        onClick={() => setOpen((prev) => !prev)}
        className={styles.value}
      >
        <div className={styles.iconContainer}>
          <SelectIcon />
        </div>
        <span className={styles.valueDate}>
          {props.date ? (
            props.date.toLocaleString().slice(0, 10)
          ) : (
            <p className={styles.label}>{props.label ?? ""}</p>
          )}
        </span>
      </button>
      <div className={styles.menuContainer}>
        {open && (
          <Calendar
            closeCalendar={() => setOpen(false)}
            onChange={props.onChange}
            parentRef={ref}
            selectDate={props.date ? props.date : new Date()}
            todayDate={new Date()}
            lang="ru"
          />
        )}
      </div>
    </section>
  );
};
