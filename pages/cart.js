import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/cart.module.css'
import ItemCard from '../components/CheckoutComponents/itemCard'
import { getJWt } from '../util/localStorage'
import React, {useEffect, useState} from 'react';
import SignIn from './signin'


function Cart() {
    const [data, setData] = useState()
    const [username, setUsername] = useState()
    const [grandTotal, setGrandTotal] = useState(0)
    const [token, _setToken] = useState(getJWt())

    const fetchData = async() => {
        console.log("FETCHING DATA...")
        const result = await fetch('http://localhost:8000/checkout/cart/', {
            method: 'GET',
            headers: {'Authorization' : `Bearer ${token}`}
        })
        const result_data = await result.json()
        setData(result_data)

        // const user = await fetch('https://auth-law-a1.herokuapp.com/user', {
        //     method: 'GET',
        //     headers: {'Authorization' : token}
        // })
        // const userData = await user.json()
        // console.log("USER DATA BELOW")
        // console.log(userData)
        // setUsername(userData["username"])
    }

    useEffect(() => {
        if (token) {
            console.log(token)
            fetchData()
        }
    }, [])

    const checkoutHandle = async() => {
        await fetch('http://localhost:8000/checkout/', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                    'Authorization' : `Bearer ${token}`
                }
        })
    }

    return (data && token) ? (
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
    ) : (
        <SignIn/>
    )
  }
  
  export default Cart