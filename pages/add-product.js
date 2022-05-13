import Head from "next/head";
import ProductForm from "../components/ProductForm";
import styles from "../styles/ProductForm.module.css";

export default function AddProduct() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Add Product</title>
        <meta name="description" content="Add new product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Add product</h1>

        <ProductForm method="post" />
      </main>
    </div>
  );
}
