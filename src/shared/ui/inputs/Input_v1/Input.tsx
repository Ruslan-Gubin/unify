import type { ReactNode } from "react";
import styles from "./Input.module.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  placeholder?: string;
  fullWidth?: boolean;
  variant?: "outlined" | "filled" | "standard";
  variantSize?: "xs" | "sm" | "md" | "lg";
  customClass?: string;
  variantColor?: "teal" | "error" | "green" | "pink";
  value?: string;
  onClickRightIcon?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
  htmlFor?: string;
  name?: string;
}
export const Input = ({
  error,
  placeholder,
  fullWidth,
  customClass,
  variantColor,
  variantSize = "lg",
  variant = "standard",
  value,
  onClickRightIcon,
  leftIcon,
  rightIcon,
  label,
  name,
  ...rest
}: Props) => {
  return (
    <fieldset
      className={`${styles.wrapper} ${styles[variantSize]} ${styles[variant]}`}
    >
      {leftIcon && <>{leftIcon}</>}
      <div className={styles.inputWrapper}>
        {error && (
          <label htmlFor={name} className={` ${styles.error}`}>
            {error}
          </label>
        )}
        {label && !error && (
          <label
            htmlFor={name}
            className={`${styles.label} ${value && value.length > 0 ? styles.labelActive : ""}`}
          >
            {label}
          </label>
        )}
        <input
          name={name}
          id={name}
          value={value}
          placeholder={label ? "" : (placeholder ?? "")}
          className={`${styles.input} ${variantColor ? styles[variantColor] : styles.defaultVariantColor} ${fullWidth ? styles.fullWidth : ""}  ${customClass ?? ""}`}
          {...rest}
        />
      </div>

      {rightIcon && (
        <button
          className={styles.buttonRight}
          type="button"
          onClick={onClickRightIcon ? onClickRightIcon : undefined}
        >
          {rightIcon}
        </button>
      )}
    </fieldset>
  );
};
