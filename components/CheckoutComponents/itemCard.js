import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/cart.module.css'
import React, {useEffect, useState} from 'react';
import { getJWt } from '../../util/localStorage';


export default function itemCard({item}) {
    const [amount, setAmount] = useState(item.amount)
    const [isRender, setRender] = useState(true)
    const [totalPrice, setTotalPrice] = useState(item.total_price)

    const [token, _setToken] = useState(getJWt())
    const edit_amount = async(product_id, is_add) => {

        if (is_add) {
            setAmount(amount+1)
            setTotalPrice(totalPrice+item.product.price)
        } else {
            setAmount(amount-1)
            setTotalPrice(totalPrice-item.product.price)
        }

        await fetch('http://localhost:8000/checkout/cart/', {
                method: 'PUT',
                body: JSON.stringify({"product_id": product_id, "is_add" : is_add}),
                headers: {
                    'Content-Type': "application/json",
                    'Authorization' : `Bearer ${token}`
                }
                // Cara dapet tokennya gimana?
        })

    }

    const delete_item = async(product_id) => {

        await fetch('http://localhost:8000/checkout/cart/', {
                method: 'DELETE',
                body: JSON.stringify({"product_id": product_id}),
                headers: {
                    'Content-Type': "application/json",
                    'Authorization' : `Bearer ${token}`
                }
                // Cara dapet tokennya gimana?
        })
        location.reload()
    }

    if (isRender) {
        return (
            <div className={`${styles.itemCard} drop-shadow-xl rounded-lg bg-[#f9fafb] container flex flex-row flex-wrap mx-auto w-10/12 sm:w-2/4 h-full my-3 px-5 py-2 col-sm-6`}>
                <div className={`${styles.itemImage} basis-2/5 container`}>
                    <img src={item.product.images} alt="Vercel Logo" layout="fill" objectFit="contain" />
                </div>
                <div className="itemInfo basis-3/5">
                    <b>{item.product.name}</b>
                    <p>Jumlah: {amount}</p>
                    <button className="bg-[#22c55e] text-[#ffffff] rounded-full w-7 h-7 mr-5" onClick={() => edit_amount(item.product.product_id, true)}>+</button>
                    <button className="bg-[#22c55e] text-[#ffffff] rounded-full w-7 h-7 mr-5" onClick={() => edit_amount(item.product.product_id, false)}>-</button>
                    <p>Rp{totalPrice}</p>
                    <button className="" onClick={() => delete_item(item.product.product_id)}><Image src="/bin.png" alt="bin image" width={24} height={24} /></button>
                </div>
            </div>
        )
    } else {
        return
    }
}