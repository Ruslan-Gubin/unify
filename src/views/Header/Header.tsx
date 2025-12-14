import { ChangeThemeButton } from "./ChangeThemeButton/ChangeThemeButton";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <aside className={styles.header__wrapper}>
      <input type="color" />
      <ChangeThemeButton />
    </aside>
  );
};
