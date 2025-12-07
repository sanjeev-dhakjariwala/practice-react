import { useEffect, useState, useCallback, type FC } from "react";
import styles from "./HomePage.module.css";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../types/constants";
import type { ProductType } from "../../types/type";
import { Product } from "../../components/product/Product";
import { Search } from "../../components/search/Search";

export const HomePage: FC = () => {
  const data = useFetch<ProductType[]>({ url: `${API_URL}/products` });
  const [filteredData, setFilteredData] = useState<ProductType[]>([]);

  console.log("HomePage render - data length:", data?.length ?? 0);

  useEffect(() => {
    if (data && data.length > 0) {
      setFilteredData(data ?? []);
    }
  }, [data]);

  // useEffect(() => {
  //   console.log(`Mounted`);

  //   return () => {
  //     console.log(`Unmounted`);
  //   };
  // }, []);

  const handleFilter = useCallback((searchText: string) => {
    console.log("handleFilter called with:", searchText);
    if (searchText === "") {
      setFilteredData(data ?? []);
      return;
    }
    setFilteredData(
      (data ?? []).filter((item) =>
        ((item?.title ?? '').toLowerCase().includes(searchText.toLowerCase())) ||
        ((item?.description ?? '').toLowerCase().includes(searchText.toLowerCase()))
      )
    );
  }, [data]);

  // const handleFilter = (searchText: string) => {
  //   console.log("handleFilter called with:", searchText);
  //   if (searchText === "") {
  //     setFilteredData(data ?? []);
  //     return;
  //   }
  //   setFilteredData(
  //     (data ?? []).filter((item) =>
  //       ((item?.title ?? '').toLowerCase().includes(searchText.toLowerCase())) ||
  //       ((item?.description ?? '').toLowerCase().includes(searchText.toLowerCase()))
  //     )
  //   );
  // };

  useEffect(() => {
    console.log("handleFilter identity changed");
  }, [handleFilter]);

  return (
    <>
      <div>
        <Search filterData = {handleFilter}/>
      </div>
      <div className={styles.productListContainer}>
        {filteredData &&
          filteredData?.map((item) => {
            return (
              <Product
                key={`${item.id}${item.title}`}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            );
          })}
      </div>
    </>
  );
};
