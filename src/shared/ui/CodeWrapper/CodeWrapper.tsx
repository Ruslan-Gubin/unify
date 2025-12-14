import { CopyCodeButton } from "./CopyCodeButton/CopyCodeButton";
import styles from "./CodeWrapper.module.css";

type Props = {
  code: string;
  title: string;
  fileName: string;
  description?: string;
};

export const CodeWrapper = (props: Props) => {
  return (
    <article className={styles.codeWrapperArticle}>
      <header className={styles.codeWrapperHeaderContent}>
        <h2>{props.title}</h2>
        {props.description && <p>{props.description}</p>}
      </header>
      <pre className={styles.codeWrapperPre}>
        <header className={styles.codeWrapperHeader}>
          <h4>{props.fileName}</h4>
          <div className={styles.codeWrapperHeaderActions}>
            <CopyCodeButton code={props.code} />
          </div>
        </header>
        <code className={styles.codeWrapperCode}>{props.code}</code>
      </pre>
    </article>
  );
};
