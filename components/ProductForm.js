import styles from "../styles/ProductForm.module.css";
import Link from "next/link";

export default function ProductForm({ method, action }) {
  return (
    <form action={action} method={method} styles={styles.main}>
      <div classNameName={styles.formItem}>
        <label htmlFor="images">Images:</label>
        <input type="file" id="images" name="images" />
      </div>

      <div classNameName={styles.formItem}>
        <label htmlFor="video">Video:</label>
        <input type="file" id="images" name="images" />
      </div>

      <div classNameName={styles.formItem}>
        <label htmlFor="name">Name:</label>
        <input required type="text" id="name" name="name" />
      </div>

      <div classNameName={styles.formItem}>
        <label htmlFor="description">Description:</label>
        <textarea required id="description" name="description" />
      </div>

      <div classNameName={styles.formItem}>
        <label htmlFor="price">Price:</label>
        <input required type="number" id="price" name="price" min="0" />
      </div>

      <div classNameName={styles.formItem}>
        <label htmlFor="stock">Stock:</label>
        <input required type="number" id="stock" name="stock" min="0" />
      </div>

      <div classNameName={styles.buttons}>
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
