import styles from "./Search.module.css";
import type { SearchProps } from "../../types/type";

export function Search({ 
  placeholder = "Search products..."
}: SearchProps) {
  return (
    <div className={styles.searchContainer}>
      <input 
        type="text" 
        className={styles.searchInput}
        placeholder={placeholder}
      />
    </div>
  );
}
