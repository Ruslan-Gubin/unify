import { useRef } from "react";
import styles from "./TextAreaResize.module.css";

export interface Props {
  name: string;
  label?: string;
  value: string;
  error?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export const TextAreaResize = ({
  name,
  label,
  value,
  error,
  disabled,
  onChange,
}: Props) => {
  const textareaRef = useRef<HTMLDivElement | null>(null);
  const isActiveInput = value.length > 0;

  const handleClickContainer = () => {
    if (textareaRef.current && !disabled) {
      textareaRef.current.focus();
    }
  };

  const changeInput = (e: any) => {
    const data = e.nativeEvent.data;
    const newValue = e.currentTarget.innerText;

    if (!data && newValue.length === 1) {
      onChange("");
    } else {
      onChange(newValue);
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClickContainer}
      className={
        error && error.length > 0
          ? `${styles.inputContainer} ${styles.inputContainerError}`
          : styles.inputContainer
      }
    >
      {label && (
        <label
          htmlFor={name}
          className={
            isActiveInput
              ? `${styles.label} ${styles.labelActive}`
              : styles.label
          }
        >
          {label}
        </label>
      )}
      <div
        ref={textareaRef}
        id={name}
        className={styles.textareaElement}
        contentEditable
        onInput={changeInput}
        onFocus={(e) => disabled && e.target.blur()}
      ></div>
    </button>
  );
};
