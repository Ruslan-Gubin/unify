import { useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.css";
import { ArrowIcon } from "./svg/ArrowIcon";

type Props = {
	options: { value: string; label: string }[];
	onChange: (value: string) => void;
	value: string;
	width?: number | string;
	menuHeight?: number;
	placeholder?: string;
	disabled?: boolean;
};

export const Dropdown = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const handleOptionClick = (value: string) => {
		props.onChange(value);
		setIsOpen(false);
	};

	useEffect(() => {
		const handleCheckClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};

		window.document.addEventListener("click", handleCheckClickOutside);

		return () => {
			window.document.removeEventListener("click", handleCheckClickOutside);
		};
	}, []);

	return (
		<div
			data-width={props.width ? `${props.width}` : "100%"}
			ref={ref}
			className={styles.dropdown}
		>
			<button
				type="button"
				onClick={() => setIsOpen((prev) => !prev)}
				className={`${styles.selectValueButton} ${isOpen ? styles.selectValueButtonAction : ""}`}
				disabled={props.disabled}
			>
				<span
					className={`${styles.dropdownSelectedValue} ${props.placeholder && !props.value ? styles.dropdownSelectedValueOpacity : ""}`}
				>
					{props.value
						? (props.options.find((el) => el.value === props.value)?.label ??
							"")
						: (props.placeholder ?? "")}
				</span>
				<div
					className={`${styles.arrowIcon} ${isOpen ? styles.arrowIconActive : ""}`}
				>
					{!props.disabled && <ArrowIcon />}
				</div>
			</button>

			{isOpen && (
				<ul
					data-height={props.menuHeight ? props.menuHeight : "auto"}
					className={`${styles.dropdownMenu} ${isOpen ? styles.dropdownMenuActive : ""}`}
				>
					{props.options.map((option) => (
						<li key={option.value}>
							<button
								type="button"
								onClick={() => handleOptionClick(option.value)}
								className={`${styles.dropdownMenuItemButton} ${props.value === option.value ? styles.dropdownMenuItemButtonActive : ""}`}
								disabled={props.disabled}
							>
								<span className={styles.dropdownMenuItemButtonText}>
									{option.label}
								</span>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
