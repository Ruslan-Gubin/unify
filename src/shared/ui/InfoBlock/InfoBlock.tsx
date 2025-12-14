import styles from "./InfoBlock.module.css";

type Props = {
  title: string;
  infoList?: { label?: string; value: string }[];
};
export const InfoBlock = (props: Props) => {
  return (
    <article className={styles.info__block_article}>
      <h2>{props.title}</h2>
      {props.infoList && (
        <ul className={styles.info__block_list}>
          {props.infoList.map((item, index) => (
            <li key={`${item.label}${index}`}>
              <p>
                {item.label && <b>{item.label}: </b>}
                {item.value}
              </p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};
