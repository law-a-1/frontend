import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import glassPic from "../public/glass.jpeg";

const formatter = new Intl.NumberFormat("id-ID", {
  currency: "IDR",
  minimumFractionDigits: 0,
});

export default function Home() {
  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main classNameName={styles.main}>
        <div classNameName={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <div classNameName={styles.card} key={e}>
              <Link href={`${e}`}>
                <a>
                  <Image
                    src={glassPic}
                    alt="Gambar dari Gelas Ajaib"
                    width={300}
                    height={300}
                  />
                  <h2>Gelas Ajaib</h2>
                  <p>Rp{formatter.format(999999999)}</p>
                </a>
              </Link>
              <div classNameName={styles.modify}>
                <button>
                  <Link href={"/update-product"}>
                    <a>Update</a>
                  </Link>
                </button>

                <button>Delete</button>
              </div>
            </div>
          ))}

          <div classNameName={styles.card} style={{ textAlign: "center" }}>
            <Link href="/add-product">
              <a>Add product</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
