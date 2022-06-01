import styles from "../styles/ProductForm.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function ProductForm({ submitHandler }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.price = parseInt(data.price);
    data.stock = parseInt(data.stock);
    submitHandler(data);
  };
  return (
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
        {errors.description?.type === "required" && "Description is required"}
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
  );
}
