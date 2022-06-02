import Head from "next/head";
import styles from "../../styles/ProductForm.module.css";
import { ProductAPI } from "../../api/endpoints/product";
import Link from "next/link";
import { getJWt } from "../../util/localStorage";
import { useForm } from "react-hook-form";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    name: "",
    description: "",
    stock: 0,
    price: 0,
  });

  const onSubmit = (data) => {
    const productData = new FormData();

    productData.append("name", data.name);
    productData.append("description", data.description);
    productData.append("price", parseInt(data.price));
    productData.append("stock", parseInt(data.stock));
    productData.append("video", data.video);

    ProductAPI.createProduct(getJWt(), productData)
      .then((res) => reset())
      .catch((err) => console.error(err.message));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Add Product</title>
        <meta name="description" content="Add new product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Add product</h1>

        <form styles={styles.main} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formItem}>
            <label htmlFor="image">Image:</label>
            <input
              {...register("image")}
              type="file"
              accept="image/*"
              id="image"
              name="image"
            />
          </div>

          <div className={styles.formItem}>
            <label htmlFor="video">Video:</label>
            <input
              {...register("video")}
              type="file"
              accept="video/*"
              id="video"
              name="video"
            />
          </div>

          <div className={styles.formItem}>
            <label htmlFor="name">Name:</label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              name="name"
            />
            {errors.name?.type === "required" && "Name is required"}
          </div>

          <div className={styles.formItem}>
            <label htmlFor="description">Description:</label>
            <textarea
              {...register("description", { required: true })}
              id="description"
              name="description"
            />
            {errors.description?.type === "required" &&
              "Description is required"}
          </div>

          <div className={styles.formItem}>
            <label htmlFor="price">Price:</label>
            <input
              {...register("price", { required: true, min: 0 })}
              type="number"
              id="price"
              name="price"
            />
            {errors.Price?.type === "required" && "Price is required"}
            {errors.stock?.type === "min" && "Price cannot be less than 0"}
          </div>

          <div className={styles.formItem}>
            <label htmlFor="stock">Stock:</label>
            <input
              {...register("stock", { required: true, min: 0 })}
              type="number"
              id="stock"
              name="stock"
            />
            {errors.stock?.type === "required" && "Stock is required"}
            {errors.stock?.type === "min" && "Stock cannot be less than 0"}
          </div>

          <div className={styles.buttons}>
            <button>
              <Link href="/">
                <a>Cancel</a>
              </Link>
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>
    </div>
  );
}
