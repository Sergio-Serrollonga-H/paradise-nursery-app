"use client";
import styles from "./productsHeader.module.css";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export function ProductsHeader() {
  const items = useSelector((state) => state.cart.cartTotalQuantity);
  const { push } = useRouter();
  const redirectToCart = () => {
    push("/cart");
  };
  return (
    <div className={styles.header}>
      <h1>Paradise Nursery company</h1>
      <div className={styles.cartBtn} onClick={redirectToCart}>
        Shopping card Items: {items}
      </div>
    </div>
  );
}
