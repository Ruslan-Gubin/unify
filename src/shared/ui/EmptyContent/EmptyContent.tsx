import type { ReactNode } from "react";
import styles from "./EmptyContent.module.css";

type Props = {
  text?: string;
  children?: ReactNode;
};

export const EmptyContent = (props: Props) => {
  return (
    <div className={styles.root}>
      {props.children}
      <h2>{props.text ?? "There is no data to show"}</h2>
    </div>
  );
};
