import Head from "next/head";
import styles from "../styles/ProductDetail.module.css";
import Image from "next/image";
import glassPic from "../public/glass.jpeg";

const formatter = new Intl.NumberFormat("id-ID", {
  currency: "IDR",
  minimumFractionDigits: 0,
});

export default function ProductDetail() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gelas Ajaib</title>
        <meta
          name="description"
          content="Gelas ajaib buatan Jin dari Barat Daya"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.left}>
          <Image
            src={glassPic}
            alt="Gambar dari Gelas Ajaib"
            width={300}
            height={300}
          />
        </div>

        <div className={styles.middle}>
          <h2>Gelas ajaib</h2>
          <p>Rp{formatter.format(999999999)}</p>

          <p>Gelas ajaib buatan Jin dari Barat Daya</p>
        </div>

        <div className={styles.right}>
          <h2>Atur jumlah dan catatan</h2>
          <p>
            <span>Stok 25</span>
          </p>
        </div>
      </main>
    </div>
  );
}
