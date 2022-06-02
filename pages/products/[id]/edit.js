import styles from "../../../styles/ProductForm.module.css";
import { ProductAPI } from "../../../api/endpoints/product";
import Head from "next/head";
import ProductForm from "../../../components/ProductForm";
import { useRouter } from "next/router";

const updateProduct = (data) => {
  ProductAPI.updateProduct().catch((err) => console.error(err.message));
};

export default function UpdateProduct() {

  // useEffect(() => {
  //   productClient
  //     .put(`/${id}`)
  //     .then(function (res) {
  //       setProduct(res.data);
  //       console.log(res);
  //     })
  //     .catch(function (error) {
  //       if (error.response) {
  //         alert(error.response.data?.message);
  //       } else if (error.request) {
  //         console.log(error.request);
  //         alert("Failed to send request");
  //       } else {
  //         console.log("Error", error.message);
  //       }
  //       console.log(error.config);
  //     });
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Update Product</title>
        <meta name="description" content="Update existing product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Update product</h1>

        <ProductForm method="put" submitHandler={updateProduct} />
      </main>
    </div>
  );
}
