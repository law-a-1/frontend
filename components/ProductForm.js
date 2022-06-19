import styles from "../styles/ProductForm.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { getJWt } from "../util/localStorage";
import { useState } from "react";

export default function ProductForm({ submitHandler }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [token, _setToken] = useState(getJWt());

  const onSubmit = (data) => {
    const productData = new FormData();

    productData.append("name", data.name);
    productData.append("description", data.description);
    productData.append("price", parseInt(data.price));
    productData.append("stock", parseInt(data.stock));
    productData.append("video", data.video);

    const CHUNK_SIZE = 5000;
    const imageReader = new FileReader();
    const videoReader = new FileReader();

    const image = data.image[0];
    imageReader.onload = async (ev) => {
      const chunkCount = ev.target.result.byteLength / CHUNK_SIZE;

      const fileName = Math.random() * 1000 + image.name;
      for (let chunkId = 0; chunkId < chunkCount + 1; chunkId++) {
        const chunk = ev.target.result.slice(
          chunkId * CHUNK_SIZE,
          chunkId * CHUNK_SIZE + CHUNK_SIZE
        );
        // await fetch("http://localhost:8080/products/upload", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/octet-stream",
        //     "content-length": chunk.length,
        //     "file-name": fileName,
        //   },
        //   body: chunk,
        // });
        // divOutput.textContent = Math.round((chunkId * 100) / chunkCount, 0) + "%";
        // console.log(Math.round((chunkId * 100) / chunkCount, 0) + "%");
      }
      // console.log(ev.target.result.byteLength);
    };
    // imageReader.readAsArrayBuffer(image);

    const video = data.video[0];
    videoReader.onload = async (ev) => {
      const chunkCount = ev.target.result.byteLength / CHUNK_SIZE;

      const fileName = Math.random() * 1000 + video.name;
      for (let chunkId = 0; chunkId < chunkCount + 1; chunkId++) {
        const chunk = ev.target.result.slice(
          chunkId * CHUNK_SIZE,
          chunkId * CHUNK_SIZE + CHUNK_SIZE
        );
        // await fetch("http://localhost:8080/products/upload", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/octet-stream",
        //     "content-length": chunk.length,
        //     "file-name": fileName,
        //   },
        //   body: chunk,
        // });
        // divOutput.textContent = Math.round((chunkId * 100) / chunkCount, 0) + "%";
        // console.log(Math.round((chunkId * 100) / chunkCount, 0) + "%");
      }
      // console.log(ev.target.result.byteLength);
    };
    // videoReader.readAsArrayBuffer(video);

    submitHandler(token, productData);
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
