import Head from "next/head";
import ProductForm from "../components/ProductForm";
import styles from "../styles/ProductForm.module.css";

export default function AddProduct() {
  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Add Product</title>
        <meta name="description" content="Add new product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main classNameName={styles.main}>
        <h1 classNameName={styles.title}>Add product</h1>

        <ProductForm method="post" />
      </main>
    </div>
  );
}
