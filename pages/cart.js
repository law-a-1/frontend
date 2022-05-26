import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/cart.module.css'
import ItemCard from '../components/CheckoutComponents/itemCard'

import React, {useEffect, useState} from 'react';


function Cart() {
    const [data, setData] = useState()
    const [grandTotal, setGrandTotal] = useState(0)
    const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYsImV4cCI6MTY1MzU2NTYzNiwiaWF0IjoxNjUzNTYyMDM2fQ.1QUOEEPYgB8FlbPDNwm0pQpxThYDk_4hBxz9E4s2cXo"

    const fetchData = async() => {
        console.log("FETCHING DATA...")
        const result = await fetch('http://localhost:8000/checkout/cart/', {
            method: 'GET',
            headers: {'Authorization' : token}
            // Cara dapet tokennya gimana?
        })
        console.log("RESULT")
        const result_data = await result.json()
        console.log(result_data)
        setData(result_data)
        // setGrandTotal(result_data.grand_total)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const checkoutHandle = async() => {
        await fetch('http://localhost:8000/checkout/', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                    'Authorization' : token
                }
                // Cara dapet tokennya gimana?
        })
    }

    return data && (
        <div>
            <Head>
                <title>Cart</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container mx-auto">
                <h1 className="mx-auto font-bold text-2xl text-center">Keranjang</h1>

                <div className="container itemList col">
                    {
                        data.items?.map((item, index) => {
                            return (
                                <ItemCard item={item} />
                            )
                        })
                    }
                </div>

                <div className={`bg-[#f9fafb] drop-shadow-md container mx-auto w-3/4 md:w-1/4 h-full my-8 p-5 text-center rounded-lg col-sm-3`}>
                    <p>Total Harga: <span className="font-bold">Rp{data.grand_total}</span></p>
                    <button className="bg-[#e2e8f0] text-[#ffffff] rounded-full p-1 w-3/5 text-xs" onClick={() => location.reload()}>Update harga</button>
                    <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-[#ffffff] rounded-full p-2 w-4/5 my-2" onClick={() => checkoutHandle()}>Checkout</button>
                    <button className="bg-[#94a3b8] text-[#ffffff] rounded-full p-2 w-4/5 my-2">Batal</button>
                </div>
            </div>
        </div>
    )
  }
  
  export default Cart