import styles from "./Input.module.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({  label, ...rest }: Props) => {
  return (
    <label className={styles.inputLabel}>
      {label ?? ""}
      <input  className={styles.input} {...rest} />
    </label>
  );
};
