import React, { useMemo } from "react";
import styles from "./Product.module.css";
import type { ProductType } from "../../types/type";
import { useFavorites } from "../../context/FavoriteContext";

export const Product = ({ id, title, price, image }: ProductType) => {
  const { state, toggle } = useFavorites();

  const isFav = useMemo(() => state.ids.includes(id), [state.ids, id]);
  const formattedPrice = useMemo(() => `₹${price}`, [price]);

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
          <strong>{formattedPrice}</strong>
        </span>
      </div>
      <div>
        <button onClick={() => toggle(id)} aria-pressed={isFav}>
          {isFav ? "★ Unfavorite" : "☆ Favorite"}
        </button>
      </div>
    </div>
  );
};
