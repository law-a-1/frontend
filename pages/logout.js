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
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <Head>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl">
                    <div className="p-10"> 
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-black-500 mb-2">Hello!</h2>
                            <div className="border-2 w-10 border-black-500 inline-block mb-2"></div>
                        </div>
                        <div>
                            <button onClick={submit} className="border-2 border-black-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white mb-3">Log out</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}