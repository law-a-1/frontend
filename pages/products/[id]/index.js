import Head from "next/head";
import styles from "../../../styles/ProductDetail.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProductAPI } from "../../../api/endpoints/product";
import proto, { CartClient } from "../../../grpc/cart_grpc_web_pb";

const formatter = new Intl.NumberFormat("id-ID", {
  currency: "IDR",
  minimumFractionDigits: 0,
});

const client = new CartClient(
  process.env.NEXT_PUBLIC_GRPC_URL_CART_SERVICE,
  null,
  null
);

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState({});

  useEffect(() => {
    if (!router.isReady) return;

    ProductAPI.getProduct(id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err.message));
  }, [router.isReady, id]);

  const addProductToCart = () => {
    const req = new proto.AddToCartRequest();
    req.setId(id);
    req.setName(product.name);
    req.setPrice(product.price);
    req.setStock(product.stock);
    req.setImage(product.image);

    client.addToCart(req, null, (err, response) => {
      if (err) {
        console.log(err.code);
        console.log(err.message);
      }
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.left}>
          <Image
            src={
              product
                ? "/no-image.jpeg"
                : `${process.env.NEXT_PUBLIC_BASE_URL_PRODUCT_SERVICE}/${product.video}`
            }
            alt={`Gambar dari ${product.name}`}
            width={300}
            height={300}
          />

          {product && product.video && (
            <video width="320" height="240" controls>
              <source
                src={`${process.env.NEXT_PUBLIC_BASE_URL_PRODUCT_SERVICE}/${product.video}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div className={styles.middle}>
          <h2>{product.name}</h2>
          <p>Rp{formatter.format(product.price)}</p>

          <p>{product.description}</p>
        </div>

        <div className={styles.right}>
          <div className={styles.productNumber}>
            <p>Stock: {product.stock}</p>
          </div>

          <button onClick={() => addProductToCart()}>Add to Cart</button>
        </div>
      </main>
    </div>
  );
}
