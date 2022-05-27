import Head from "next/head";
import styles from "../styles/ProductDetail.module.css";
import Image from "next/image";
import glassPic from "../public/glass.jpeg";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const formatter = new Intl.NumberFormat("id-ID", {
  currency: "IDR",
  minimumFractionDigits: 0,
});

const productClient = axios.create({
  baseURL: "http://localhost:8080/products",
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjksImV4cCI6MTY1MzYyNDkzNywiaWF0IjoxNjUzNjIxMzM3fQ.bQ_Kc7D1WJgxsX5A3h7O2Y1aKWBIdf0dkVllDDlFGa4",
  },
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
    productClient
      .get(`/${id}`)
      .then(function (res) {
        if (res.status >= 300) {
          alert(res.data.message);
        }
        setProduct(res.data);
        console.log(res);
      })
      .catch(function (error) {
        console.error(error);
      });
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
