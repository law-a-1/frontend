import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const formatter = new Intl.NumberFormat("id-ID", {
  currency: "IDR",
  minimumFractionDigits: 0,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <div className={styles.card} key={e}>
              <Link href={`${e}`}>
                <a>
                  <Image
                    src="https://imgs.search.brave.com/Dygx-jBMHgi55RgTdfsZwV5kH_EcjWKBd9mUNveYuS4/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9zMi5i/dWthbGFwYWsuY29t/L2ltZy8yMjMyODkx/OTAxL3ctMTAwMC9D/YW5na2lyX19fR2Vs/YXNfX19NdWdfQWph/aWJfR2FtYmFyX0Jp/c2FfQmVydWJhaF9T/ZXN1YWlfU3VodV8u/anBn"
                    alt="Gambar dari Gelas Ajaib"
                    width={200}
                    height={200}
                  />
                  <h2>Gelas Ajaib</h2>
                  <p>Rp{formatter.format(999999999)}</p>
                </a>
              </Link>
              <div className={styles.modify}>
                <button>
                  <Link href={"/update-product"}>
                    <a>Update</a>
                  </Link>
                </button>

                <button>
                  <Link href={"/delete-product"}>
                    <a>Delete</a>
                  </Link>
                </button>
              </div>
            </div>
          ))}

          <div className={styles.card} style={{ textAlign: "center" }}>
            <Link href="/add-product">
              <a>Add product</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
