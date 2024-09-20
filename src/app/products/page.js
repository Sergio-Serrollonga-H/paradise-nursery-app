"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { ProductsHeader } from "@/components/productsHeader";
import { aromaticPlants, airPurifyingPlants } from "../utils/plants";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "@/redux/slices/cartSlice";

export default function Page() {
  return (
    <div className={styles.page}>
      <ProductsHeader />
      <ProductsWrapper />
    </div>
  );
}

function ProductsWrapper() {
  return (
    <div className={styles.productsSectionsWrapper}>
      <div className={styles.productsSection}>
        <h2>Air Purifying Plants</h2>

        <div className={styles.productsWrapper}>
          {airPurifyingPlants.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className={styles.productsSection}>
        <h2>Aromatic Fragance Plants</h2>
        <div className={styles.productsWrapper}>
          {aromaticPlants.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductItem({ item }) {
  const dispatch = useDispatch();

  const { id, name, price, description, image } = item;

  const cartItems = useSelector((state) => state.cart.cartItems);

  const isInCart = cartItems.some((item) => item.id === id);

  const addProductToCart = (item) => {
    dispatch(addProduct(item));
  };

  return (
    <div className={styles.productWrapper}>
      <p>{name}</p>
      <Image
        className={styles.productImage}
        src={image}
        alt="plant image"
        width={80}
        height={80}
      />
      <span>${price}</span>
      <span>{description}</span>
      <div
        className={`${styles.addToCartBtn} ${isInCart ? styles.disabled : ""}`}
        onClick={() => addProductToCart(item)}
      >
        Add to Cart
      </div>
    </div>
  );
}
