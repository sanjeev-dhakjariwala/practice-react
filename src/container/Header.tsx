import { type FC } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/home" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/electronics" className={styles.navLink}>Electronics</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/fashion" className={styles.navLink}>Fashion</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/beauty" className={styles.navLink}>Beauty</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/furniture" className={styles.navLink}>Furniture</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
