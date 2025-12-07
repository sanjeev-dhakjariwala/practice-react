import { type FC } from "react";
import styles from "./HomePage.module.css";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../types/constants";
import type { ProductType } from "../../types/type";

export const HomePage: FC = () => {
  const data = useFetch<ProductType[]>({ url: `${API_URL}/products` });

  return (
    <div className={styles.homePage}>
      <div>HomePage</div>
      {data && <div>Products loaded: {data.length}</div>}
    </div>
  );
};
