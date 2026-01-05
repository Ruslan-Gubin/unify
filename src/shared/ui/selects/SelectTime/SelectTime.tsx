import { useEffect, useRef, useState } from "react";
import styles from "./SelectTime.module.css";
import { TimeSelectIcon } from "./svg/TimeSelectIcon";

type Props = {
  hour: string;
  minutes: string;
  onChangeHours: (value: string) => void;
  onChangeMinutes: (value: string) => void;
};

export const SelectTime = ({
  hour,
  minutes,
  onChangeHours,
  onChangeMinutes,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const clickOutside = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        parentRef.current &&
        !parentRef.current.contains(e.target as Node) &&
        open
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, [open]);

  const hoursList = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];

  const minutesList = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
  ];

  return (
    <div ref={parentRef} className={styles.root}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={styles.value}
      >
        <TimeSelectIcon />
        <span className={styles.valueDate}>
          {hour}:{minutes}
        </span>
      </button>

      {open && (
        <div ref={ref} className={styles.menuContainer}>
          <ul className={styles.timesList}>
            {hoursList.map((time) => (
              <li
                key={time}
                className={
                  hour === time
                    ? `${styles.timesItem} ${styles.timesItemActive}`
                    : styles.timesItem
                }
              >
                <button type="button" onClick={() => onChangeHours(time)}>
                  {time}
                </button>
              </li>
            ))}
          </ul>
          <ul className={styles.timesList}>
            {minutesList.map((time) => (
              <li
                key={time}
                className={
                  minutes === time
                    ? `${styles.timesItem} ${styles.timesItemActive}`
                    : styles.timesItem
                }
              >
                <button type="button" onClick={() => onChangeMinutes(time)}>
                  {time}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
