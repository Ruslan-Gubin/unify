import { paginationNumbers } from "./helper";
import styles from "./Pagination.module.css";
import { ArrowIcon } from "./svg/ArrowIcon";

type Props = {
  total: number;
  perPage: number;
  page: number;
  className?: string;
  color?: string;
  onChange: (value: number) => void;
};

export const Pagination = (props: Props) => {
  const lastPage = Math.ceil(props.total / props.perPage);
  const numbers: number[] = [...paginationNumbers(props.page, lastPage)];

  return (
    <ul
      className={`${styles.pagination} ${props.className ? props.className : ""}`}
    >
      <button
        type="button"
        disabled={props.page === 1}
        onClick={() => props.onChange(props.page - 1)}
        className={styles.paginationButton}
      >
        <ArrowIcon active={props.page > 1} />
        <span className={styles.buttonText}>Prev</span>
      </button>

      {numbers.map((currentPage, index) => (
        <li key={index}>
          <button
            type="button"
            onClick={() => currentPage !== props.page && props.onChange(currentPage)}
            className={`${styles.paginationPage} ${props.page === currentPage ? styles.paginationPageWhite : ""} `}
          >
            {currentPage ? currentPage : "..."}
          </button>
        </li>
      ))}

      <button
        type="button"
        disabled={props.page === lastPage}
        onClick={() => props.onChange(props.page + 1)}
        className={styles.paginationButton}
      >
        <span className={styles.buttonText}>Next</span>
        <div className={styles.arrowRight}>
          <ArrowIcon active={props.page < lastPage} />
        </div>
      </button>
    </ul>
  );
};
