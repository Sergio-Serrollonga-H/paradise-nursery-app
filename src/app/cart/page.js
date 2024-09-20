"use client";
import { ProductsHeader } from "@/components/productsHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { manageProductQty, deleteItem } from "@/redux/slices/cartSlice";
import styles from "./cart.module.css";

export default function Page() {
  const { push } = useRouter();
  const totalCartAmount = useSelector((state) => state.cart.cartTotalPrice);
  const items = useSelector((state) => state.cart.cartItems);

  const redirectToProducts = () => {
    push("/products");
  };

  return (
    <div className={styles.page}>
      <ProductsHeader />
      <div className={styles.cartOverview}>
        <div className={styles.goBackBtn} onClick={redirectToProducts}>
          Continue Shopping
        </div>
        <div className={styles.goBackBtn}>Checkout</div>
        <h2>Total Cart Amount ${totalCartAmount}</h2>
        <div className={styles.productsWrapper}>
          {items.map((item) => (
            <CartProductItems key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CartProductItems({ item }) {
  const dispatch = useDispatch();
  const { id, name, price: unitPrice, image, quantity } = item;

  return (
    <div className={styles.productItem}>
      <Image
        className={styles.productImage}
        src={image}
        alt="plant image"
        width={80}
        height={80}
      />
      <div className={styles.productInfo}>
        <p>{name}</p>
        <span>${unitPrice}</span>
        <ProductQuantitySelector productId={id} quantity={quantity} />
        <div
          className={styles.deleteBtn}
          onClick={() => dispatch(deleteItem(id))}
        >
          Delete
        </div>
      </div>
    </div>
  );
}

function ProductQuantitySelector({ quantity, productId }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.qtySelector}>
      <div
        onClick={() =>
          dispatch(manageProductQty({ productId, operation: "substract" }))
        }
      >
        -
      </div>
      {quantity}
      <div
        onClick={() =>
          dispatch(manageProductQty({ productId, operation: "add" }))
        }
      >
        +
      </div>
    </div>
  );
}
