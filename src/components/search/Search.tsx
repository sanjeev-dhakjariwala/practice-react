import styles from "./Search.module.css";
import type { SearchProps } from "../../types/type";
import { useState } from "react";

export function Search({ placeholder = "Search products...", filterData }: SearchProps) {
  const [search, setSearch] = useState<string>("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (filterData) {
      filterData(value);
    }
    console.log(value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
}
