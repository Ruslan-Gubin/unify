import { GraphLine } from "./graph-line/GraphLine";
import styles from "./WaveLineChart.module.css";

type Props = {
  title: string;
  lines: {
    color: string;
    title: string;
    values: number[];
  }[];
  countLines: string[];
};

const WaveLineChart = ({ title, lines, countLines }: Props) => {
  return (
    <section className={`${styles.rootWrapper} ${styles.root}`}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <ul className={styles.linesList}>
        {lines.map((line) => (
          <li key={line.color} className={styles.linesItem}>
            <div
              className={styles.lineColor}
              style={{ backgroundColor: line.color }}
            ></div>
            <div className={styles.linesLabel}>{line.title}</div>
          </li>
        ))}
      </ul>

      <div className={styles.graphContainer}>
        <GraphLine
          statisticLines={lines.map((line) => line.values)}
          colorsList={lines.map((line) => line.color)}
        />
        <ul className={styles.countList}>
          {countLines.map((count) => (
            <li key={count} className={styles.countListItem}>
              {count}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { WaveLineChart };
