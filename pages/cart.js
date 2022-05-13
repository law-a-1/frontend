import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/cart.module.css'

function Cart() {
    return(
        <div>
            <Head>
                <title>Cart</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container mx-auto">
                <h1 className="mx-auto font-bold text-2xl text-center">Keranjang</h1>

                <div className="container itemList">
                    <div className={`${styles.itemCard} drop-shadow-xl rounded-lg bg-[#f9fafb] container flex flex-row flex-wrap mx-auto w-10/12 sm:w-2/4 h-full my-8 p-5`}>
                        <div className={`${styles.itemImage} basis-2/5 container`}>
                            <Image src="/dummy-photo1.jpeg" alt="Vercel Logo" layout="fill" objectFit="contain" />
                        </div>
                        <div className="itemInfo basis-3/5">
                            <b>Nama Barang Ceritanya</b>
                            <p>Jumlah: 1</p>
                            <button className="bg-[#22c55e] text-[#ffffff] rounded-full w-7 h-7 mr-5">+</button>
                            <button className="bg-[#22c55e] text-[#ffffff] rounded-full w-7 h-7 mr-5">-</button>
                            <p>Rp500.000</p>
                            <button className=""><Image src="/bin.png" alt="bin image" width={24} height={24} /></button>
                        </div>
                    </div>

                    <div className={`${styles.itemCard} drop-shadow-xl rounded-lg bg-[#f9fafb] container flex flex-row flex-wrap mx-auto w-10/12 sm:w-2/4 h-full my-8 p-5`}>
                        <div className={`${styles.itemImage} basis-2/5 container`}>
                            <Image src="/dummy-photo2.png" alt="Vercel Logo" layout="fill" objectFit="contain" />
                        </div>
                        <div className="itemInfo basis-3/5">
                            <b>Nama Barang Ceritanya</b>
                            <p>Jumlah: 1</p>
                            <button className="bg-[#22c55e] text-[#ffffff] rounded-full w-7 h-7 mr-5">+</button>
                            <button className="bg-[#22c55e] text-[#ffffff] rounded-full w-7 h-7 mr-5">-</button>
                            <p>Rp500.000</p>
                            <button className=""><Image src="/bin.png" alt="bin image" width={24} height={24} /></button>
                        </div>
                    </div>

                    <div className={`${styles.itemCard} drop-shadow-xl rounded-lg bg-[#f9fafb] container flex flex-row flex-wrap mx-auto w-10/12 sm:w-2/4 h-full my-8 p-5`}>
                        <div className={`${styles.itemImage} basis-2/5 container`}>
                            <Image src="/dummy-photo1.jpeg" alt="Vercel Logo" layout="fill" objectFit="contain" />
                        </div>
                        <div className="itemInfo basis-3/5">
                            <b>Nama Barang Ceritanya</b>
                            <p>Jumlah: 1</p>
                            <button className="bg-[#22c55e] text-[#ffffff] rounded-full w-7 h-7 mr-5">+</button>
                            <button className="bg-[#22c55e] text-[#ffffff] rounded-full w-7 h-7 mr-5">-</button>
                            <p>Rp500.000</p>
                            <button className=""><Image src="/bin.png" alt="bin image" width={24} height={24} /></button>
                        </div>
                    </div>
                </div>

                <div className={`bg-[#f9fafb] drop-shadow-md container mx-auto w-3/4 md:w-1/4 h-full my-8 p-5 text-center rounded-lg`}>
                    <p>Total Harga: <span className="font-bold">Rp2.500.000</span></p>
                    <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-[#ffffff] rounded-full p-2 w-4/5 my-2">Checkout</button>
                    <button className="bg-[#94a3b8] text-[#ffffff] rounded-full p-2 w-4/5 my-2">Batal</button>
                </div>
                
            </div>
        </div>
    )
  }
  
  export default Cart