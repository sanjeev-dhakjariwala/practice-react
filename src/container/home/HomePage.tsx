import { useEffect, useState, useCallback, useLayoutEffect, useMemo, useRef, type FC } from "react";
import styles from "./HomePage.module.css";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../types/constants";
import type { ProductType } from "../../types/type";
import { Product } from "../../components/product/Product";
import { Search } from "../../components/search/Search";

export const HomePage: FC = () => {
  const data = useFetch<ProductType[]>({ url: `${API_URL}/products` });
  const [filteredData, setFilteredData] = useState<ProductType[]>([]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [columns, setColumns] = useState<number>(3);

  console.log("HomePage render - data length:", data?.length ?? 0);

  useEffect(() => {
    if (data && data.length > 0) {
      setFilteredData(data ?? []);
    }
  }, [data]);

  const handleFilter = useCallback((searchText: string) => {
    console.log("handleFilter called with:", searchText);
    if (searchText === "") {
      // ensure new array reference so React notices change
      setFilteredData((data ?? []).slice());
      return;
    }
    setFilteredData(
      (data ?? []).filter((item) =>
        ((item?.title ?? "").toLowerCase().includes(searchText.toLowerCase())) ||
        ((item?.description ?? "").toLowerCase().includes(searchText.toLowerCase()))
      )
    );
  }, [data]);

  useEffect(() => {
    console.log("handleFilter identity changed");
  }, [handleFilter]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const width = el.getBoundingClientRect().width;
    const cols = width < 600 ? 1 : width < 900 ? 2 : 3;
    setColumns(cols);
    console.log("useLayoutEffect measured width", width, "-> columns", cols);
  }, [filteredData]);

  const productList = useMemo(
    () =>
      (filteredData ?? []).map((item) => (
        <Product key={`${item.id}${item.title}`} id={item.id} title={item.title} price={item.price} image={item.image} />
      )),
    [filteredData]
  );

  return (
    <>
      <div>
        <Search filterData={handleFilter} />
      </div>
      <div ref={containerRef} className={styles.productListContainer} data-columns={columns}>
        {productList}
      </div>
    </>
  );
};
