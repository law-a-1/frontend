import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import glassPic from "../public/glass.jpeg";
import { useState, useEffect } from "react";
import { getJWt } from "../util/localStorage";
import { ProductAPI } from "../api/endpoints/product";

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
  const [token, _setToken] = useState(getJWt());
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductAPI.getProducts()
      .then((res) => {
        setProducts(res.products);
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
              {token && (
                <div className={styles.modify}>
                  <button>
                    <Link href={"/update-product"}>
                      <a>Update</a>
                    </Link>
                  </button>

                  <button onClick={() => deleteProduct(token, product.id)}>
                    Delete
                  </button>
                </div>
              )}
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
