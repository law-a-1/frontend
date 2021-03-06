import React, {useEffect, useState} from 'react';
import Head  from "next/head";
import { useRouter } from 'next/router'
import { saveJwt } from '../util/localStorage'

export default function SignIn() {
    const router = useRouter()

    const [data, setData] = React.useState({
        username : '',
        password : '',
    });
    
    const handleInputUsername= event => {
        setData({
            ... data,
            username : event.target.value
        });
    };

    const handleInputPassword = event => {
        setData({
            ... data,
            password : event.target.value
        });
    };

    const handleSignUp = () => {
        router.push('/')
    }

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://auth-law-a1.herokuapp.com/login', {
          method: 'POST',
          credentials : 'include',
          headers: {'Content-Type': 'application/json'},
      
          body: JSON.stringify({
            "username": data.username,
            "password" : data.password
        })
      }).then((response) => {
        console.log(response)
        if(response.ok){
            response.json().then(data => {
                saveJwt(data?.jwt)
                console.log(data?.jwt)
            })
            router.push('/')
        } else {
        if(data.username==''){
          alert("Please enter a username!")
        } 
        else if (data.password==''){
          alert("Please enter your password")
        } else {
          response.json().then(data => alert(data.detail))
         }
      }
    
    })
        .catch(function(error) {
                alert("Something went wrong")
            })
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl">
                    <div className="p-10"> 
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-black-500 mb-2">Sign in to Account</h2>
                            <div className="border-2 w-10 border-black-500 inline-block mb-2"></div>
                        </div>
                        <form method='post'>
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <input onChange={handleInputUsername} type="username" name="username" placeholder="username" className="bg-gray-100 outline-none text-sm flex-1" />
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <input onChange={handleInputPassword} type="password" name="password" placeholder="password" className="bg-gray-100 outline-none text-sm flex-1" />
                        </div>
                        <div>
                            <button onClick={submit} className="border-2 border-black-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white mb-3">Sign In</button>
                        </div>
                        </form>
                        <p>No Account? <a onClick={handleSignUp}>Create One</a> </p> 
                    </div>
                </div>
            </main>
        </div>
    )
}