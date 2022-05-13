import Head from "next/head";
import styles from "../styles/ProductDetail.module.css";
import Image from "next/image";

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
            src="https://imgs.search.brave.com/Dygx-jBMHgi55RgTdfsZwV5kH_EcjWKBd9mUNveYuS4/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9zMi5i/dWthbGFwYWsuY29t/L2ltZy8yMjMyODkx/OTAxL3ctMTAwMC9D/YW5na2lyX19fR2Vs/YXNfX19NdWdfQWph/aWJfR2FtYmFyX0Jp/c2FfQmVydWJhaF9T/ZXN1YWlfU3VodV8u/anBn"
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
