import React from "react";
import styles from "./productBar.module.css";
import { getProductByIdHarcoded } from "../../../utils/apiProducts";
import { useQuery } from "react-query";

const ProductBar = (product) => {
  return (
    <>
      <div className={styles.productBar}>
        <div className={styles.productDetails}>
          <p>{product.product.title}</p>
          <h3>{product.product.price}</h3>
        </div>
        <button className={styles.comprar}>COMPRAR</button>
      </div>
    </>
  );
};

export default ProductBar;
