import styles from "./Input.module.css";
import { CancelInputIcon } from "./svg/CancelIcon/CancelInputIcon";
import { SearchIcon } from "./svg/SearchIcon/SearchIcon";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  variant?: "outlined" | "filled" | "standard";
  size?: "xs" | "sm" | "md" | "lg";
  customClass?: string;
  variantColor?: "teal" | "error" | "green" | "pink";
  value: string;
}
export const Input = ({
  fullWidth,
  customClass,
  variantColor,
  size,
  variant = "standard",
  value,
  ...rest
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <SearchIcon />
      <input
        value={value}
        className={`${styles[size]} ${styles.input} ${variantColor ? styles[variantColor] : styles.defaultVariantColor} ${fullWidth ? styles.fullWidth : ""} ${styles[variant]} ${customClass ?? ""}`}
        {...rest}
      />


      {value.length > 0 && 
        <button><CancelInputIcon /></button>
      }
    </div>
  );
};
