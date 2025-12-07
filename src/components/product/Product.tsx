import type { FC } from "react";
import styles from "./Product.module.css";
import type { ProductType } from "../../types/type";

export const Product: FC<ProductType> = ({ title, price, image }) => {
  return (
    <div className={styles.productInfoContainer}>
      <div>
        <img className={styles.imgFormat} src={image} alt={title} />
      </div>
      <div>
        <span>{title}</span>
      </div>
      <div>
        <span>
          ₹<strong>{price}</strong>
        </span>
      </div>
    </div>
  );
};
