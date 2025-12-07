import { type FC } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/home">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/electronics">Electronics</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/fashion">Fashion</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/beauty">Beauty</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/furniture">Furniture</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
