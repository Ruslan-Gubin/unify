import styles from "./ChartColumn.module.css";

type Props = {
  data: {
    id: number;
    date: string;
    online: number;
    offline: number;
    value: number;
  }[];
};

export const ChartColumn = (props: Props) => {
  return (
    <ul className={styles.chartItems}>
      {props.data.map((item) => (
        <li key={item.id} className={styles.chartItem}>
          <div className={styles.chartItemValue}>{item.value}</div>
          <div
            className={styles.chartItemBox}
            style={{
              height: item.online > item.offline ? item.online : item.offline,
            }}
          >
            <div
              className={styles.chartItemBoxOffline}
              style={{ height: item.offline }}
            ></div>
            <div
              className={styles.chartItemBoxOnline}
              style={{ height: item.online }}
            ></div>
          </div>
          <div className={styles.chartItemDate}>{item.date}</div>
        </li>
      ))}
    </ul>
  );
};
