import Head from "next/head";
import styles from "../styles/ProductDetail.module.css";
import Image from "next/image";
import glassPic from "../public/glass.jpeg";
import { useState } from "react";

const formatter = new Intl.NumberFormat("id-ID", {
  currency: "IDR",
  minimumFractionDigits: 0,
});

export default function ProductDetail() {
  const [productNumber, setProductNumber] = useState(0);
  const [subtotal, setSubtotal] = useState(1000);

  const changeProductNumber = (key) => {
    if (key == "increase") {
      setProductNumber(productNumber++);
    } else if (key == "decrease" && productNumber != 0) {
      setProductNumber(productNumber--);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Gelas Ajaib</title>
        <meta
          name="description"
          content="Gelas ajaib buatan Jin dari Barat Daya"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.left}>
          <Image
            src={glassPic}
            alt="Gambar dari Gelas Ajaib"
            width={300}
            height={300}
          />

          <video width="320" height="240" controls>
            <source src="/bunny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.middle}>
          <h2>Gelas ajaib</h2>
          <p>Rp{formatter.format(999999999)}</p>

          <p>Gelas ajaib buatan Jin dari Barat Daya</p>
        </div>

        <div className={styles.right}>
          <div className={styles.productNumber}>
            <div className={styles.total}>
              <button onClick={() => changeProductNumber("decrease")}>-</button>
              <p>{productNumber}</p>
              <button onClick={() => changeProductNumber("increase")}>+</button>
            </div>
            <p>Stock: 25</p>
          </div>

          <div className={styles.subtotal}>
            <p>Subtotal</p>
            <p>Rp{subtotal}</p>
          </div>
          <button>Add to Cart</button>
        </div>
      </main>
    </div>
  );
}
