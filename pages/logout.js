import React, {useEffect, useState} from 'react';
import Head  from "next/head";
import { useRouter } from 'next/router'

export default function SignIn() {
    const router = useRouter()


    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://auth-law-a1.herokuapp.com/logout', {
          method: 'POST',
          credentials : 'include',
          headers: {'Content-Type': 'application/json'},
      
        }).then((response) => {
            console.log(response)
            if(response.ok){ 
                router.push('/signin')
            } 
            else { 
                response.json().then(data => alert(data.message))
            }
        }).catch(function(error) {
            alert(error)
        })
    };

    return (
        <div classNameName="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main classNameName="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div classNameName="bg-white rounded-2xl shadow-2xl flex max-w-4xl">
                    <div classNameName="p-10"> 
                        <div classNameName="py-10">
                            <h2 classNameName="text-3xl font-bold text-black-500 mb-2">Hello!</h2>
                            <div classNameName="border-2 w-10 border-black-500 inline-block mb-2"></div>
                        </div>
                        <div>
                            <button onClick={submit} classNameName="border-2 border-black-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white mb-3">Log out</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}