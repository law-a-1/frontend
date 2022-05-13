import Head from "next/head";
import ProductForm from "../components/ProductForm";
import styles from "../styles/ProductForm.module.css";

export default function UpdateProduct() {
  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Update Product</title>
        <meta name="description" content="Update existing product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main classNameName={styles.main}>
        <h1 classNameName={styles.title}>Update product</h1>

        <ProductForm method="put" />
      </main>
    </div>
  );
}
