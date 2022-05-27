import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import glassPic from "../public/glass.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";

const formatter = new Intl.NumberFormat("id-ID", {
  currency: "IDR",
  minimumFractionDigits: 0,
});

const productClient = axios.create({
  baseURL: "http://localhost:8080/products",
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjksImV4cCI6MTY1MzYzMTM2OCwiaWF0IjoxNjUzNjI3NzY4fQ.8EdyUGrBYtfBFbtJ5HbsRIOHh8dP460qNd4K2OUr52Y",
  },
});

const deleteProduct = (id) => {
  productClient
    .delete(`/${id}`)
    .then(function (res) {
      if (res.status >= 300) {
        alert(res.data.message);
      }
      console.log(res);

      Router.reload(window.location.pathname);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productClient
      .get("/")
      .then(function (res) {
        if (res.status >= 300) {
          alert(res.data.message);
        }
        setProducts(res.data.products);
        console.log(res);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {products.map((product) => (
            <div className={styles.card} key={product.id}>
              <Link href={`${product.id}`}>
                <a>
                  <Image
                    src={glassPic}
                    alt={`Gambar dari {product.name}`}
                    width={300}
                    height={300}
                  />
                  <h2>{product.name}</h2>
                  <p>Rp{formatter.format(product.price)}</p>
                </a>
              </Link>
              <div className={styles.modify}>
                <button>
                  <Link href={"/update-product"}>
                    <a>Update</a>
                  </Link>
                </button>

                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className={styles.card} style={{ textAlign: "center" }}>
            <Link href="/add-product">
              <a>Add product</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
