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

export const Pagination = ({
	perPage,
	total,
	page,
	className,
	onChange,
}: Props) => {
	const lastPage = Math.ceil(total / perPage);
	const numbers: number[] = [...paginationNumbers(page, lastPage)];

	const getPageNumber = (page: number) => {
		return page < 10 ? `0${page}` : page;
	};

	return (
		<ul className={`${styles.pagination} ${className ?? ""}`}>
			{numbers.map((currentPage, index) => (
				<li key={index}>
					<button
						type="button"
						onClick={() =>
							currentPage === page || !currentPage
								? false
								: onChange(currentPage)
						}
						className={
							currentPage === page
								? `${styles.paginationPage} ${styles.paginationPageWhite} `
								: styles.paginationPage
						}
					>
						{currentPage === 0 ? <div>...</div> : getPageNumber(currentPage)}
					</button>
				</li>
			))}
		</ul>
	);
};
