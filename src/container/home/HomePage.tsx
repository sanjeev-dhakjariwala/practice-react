import { useEffect, type FC } from "react";
import styles from "./HomePage.module.css";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../types/constants";
import type { ProductType } from "../../types/type";
import { Product } from "../../components/product/Product";

export const HomePage: FC = () => {
  const data = useFetch<ProductType[]>({ url: `${API_URL}/products` });
  useEffect(() => {
    console.log(`Mounted`);

    return () => {
      console.log(`Unmounted`);
    }
  }, [])
  return (
    <div className={styles.productListContainer}>
      {data &&
        data?.map((item) => {
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
  );
};
