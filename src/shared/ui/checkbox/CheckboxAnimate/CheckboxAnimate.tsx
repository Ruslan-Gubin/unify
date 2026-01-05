import styles from "./CheckboxAnimate.module.css";

type Props = {
	checked: boolean;
	onChange?: () => void;
};

export const CheckboxAnimate = (props: Props) => {
	return (
		<button
			type="button"
			onClick={props.onChange}
			className={
				props.checked ? `${styles.root} ${styles.rootActive}` : styles.root
			}
		>
			<div
				className={
					props.checked
						? `${styles.circle} ${styles.circleActive}`
						: styles.circle
				}
			></div>
		</button>
	);
};
