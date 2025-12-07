import { type FC } from "react";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}></li>
        </ul>
      </nav>
    </header>
  );
};
