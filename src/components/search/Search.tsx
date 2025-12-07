import styles from "./Search.module.css";
import type { SearchProps } from "../../types/type";
import React, { useState, memo, useRef } from "react";

function SearchComponent({ placeholder = "Search products...", filterData }: SearchProps) {
  const [search, setSearch] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (filterData) {
      filterData(value);
    }
    console.log("Search input:", value);
  };

  const clear = () => {
    setSearch("");
    if (filterData) filterData("");
    inputRef.current?.focus();
  };

  return (
    <div className={styles.searchContainer}>
      <input
        ref={inputRef}
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        onChange={handleSearch}
        value={search}
      />
      <button onClick={clear} aria-label="Clear search">
        Clear
      </button>
    </div>
  );
}

export const Search = memo(SearchComponent);
