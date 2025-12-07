import styles from "./Search.module.css";
import type { SearchProps } from "../../types/type";
import { useState } from "react";

export function Search({ placeholder = "Search products..." }: SearchProps) {
  const [search, setSearch] = useState<string>("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
}
