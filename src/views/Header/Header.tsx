import { MobileMenuHeader } from "../MobileMenuHeader/MobileMenuHeader";
import { ChangeThemeButton } from "./ChangeThemeButton/ChangeThemeButton";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <aside className={styles.headerWrapper}>
      <aside className={styles.headerLeftSide}>
        <input type="color" />
        <MobileMenuHeader />
      </aside>
      <aside>
        <ChangeThemeButton />
      </aside>
    </aside>
  );
};
