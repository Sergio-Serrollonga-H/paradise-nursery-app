"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  const redirectToProducts = () => {
    push("/products");
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery, a family-owned company dedicated to
          bringing the beauty of nature to your home and garden. With a passion
          for plants and a commitment to sustainability, we offer a wide
          selection of high-quality indoor and outdoor plants, ranging from
          vibrant flowering varieties to lush greenery and exotic species.
        </p>

        <div
          className={[styles.ctas, styles.primary].join(" ")}
          onClick={redirectToProducts}
        >
          <Image
            className={styles.logo}
            src="https://nextjs.org/icons/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Get Started
        </div>
      </main>
    </div>
  );
}
