import { paginationNumbers } from "./helper";
import styles from "./Pagination.module.css";

type Props = {
  total: number;
  perPage: number;
  page: number;
  className?: string;
  color?: string;
  onChange: (value: number) => void;
};

export const Pagination = (
  props: Props,
) => {
  const lastPage = Math.ceil(props.total / props.perPage);
  const numbers: number[] = [...paginationNumbers(props.page, lastPage)];

  return (
    <ul className={`${styles.pagination} ${props.className ?? ""}`}>
      {numbers.map((currentPage, index) => (
        <li key={index}>
          <button
            type="button"
            onClick={() =>
              currentPage === props.page || !currentPage
                ? false
                : props.onChange(currentPage)
            }
            className={
              currentPage === props.page
                ? `${styles.paginationPage} ${styles.paginationPageWhite} `
                : styles.paginationPage
            }
          >
            {currentPage
              ? currentPage < 10
                ? `0${currentPage}`
                : currentPage
              : "..."}
          </button>
        </li>
      ))}
    </ul>
  );
};
