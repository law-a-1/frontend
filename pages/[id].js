import Head from "next/head";
import styles from "../styles/ProductDetail.module.css";
import Image from "next/image";
import glassPic from "../public/glass.jpeg";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ProductAPI } from "../api/endpoints/product";

const formatter = new Intl.NumberFormat("id-ID", {
  currency: "IDR",
  minimumFractionDigits: 0,
});

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState({});
  const [productNumber, setProductNumber] = useState(0);
  const [subtotal, setSubtotal] = useState(1000);

  const changeProductNumber = (key) => {
    if (key == "increase") {
      setProductNumber(productNumber++);
    } else if (key == "decrease" && productNumber != 0) {
      setProductNumber(productNumber--);
    }
  };

  useEffect(() => {
    ProductAPI.getProduct(id)
      .then((res) => setProduct(res))
      .catch((err) => console.error(err.message));
  }, [id]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{product.name}</title>
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
          <h2>{product.name}</h2>
          <p>Rp{formatter.format(product.price)}</p>

          <p>{product.description}</p>
        </div>

        <div className={styles.right}>
          <div className={styles.productNumber}>
            <div className={styles.total}>
              <button onClick={() => changeProductNumber("decrease")}>-</button>
              <p>{productNumber}</p>
              <button onClick={() => changeProductNumber("increase")}>+</button>
            </div>
            <p>Stock: {product.stock}</p>
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
