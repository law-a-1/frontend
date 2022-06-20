import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ProductAPI } from "../api/endpoints/product";
import { Router, useRouter } from "next/router";

const formatter = new Intl.NumberFormat("id-ID", {
  currency: "IDR",
  minimumFractionDigits: 0,
});

const deleteProduct = (token, id) => {
  ProductAPI.deleteProduct(token, id).catch((err) =>
    console.error(err.message)
  );
};

export default function Home() {
  const [token, setToken] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  useEffect(() => {
    ProductAPI.getProducts()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error(err.message);
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
          {products?.map((product) => (
            <div
              className={styles.card}
              key={product.id}
              onClick={() => {
                Router.push(`/products/${product.id}`);
              }}
            >
              <Image
                src={product ? "/no-image.jpeg" : product.image}
                alt={`Gambar dari ${product.name}`}
                width={300}
                height={300}
              />
              <h2>{product.name}</h2>
              <p>Rp{formatter.format(product.price)}</p>
              {token && (
                <div className={styles.modify}>
                  <Link href={`/products/${product.id}/edit`}>
                    <a>Edit</a>
                  </Link>

                  <button onClick={() => deleteProduct(token, product.id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}

          {token && (
            <div className={styles.card} style={{ textAlign: "center" }}>
              <Link href="/products/add">
                <a>Add product</a>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
