import Head  from "next/head";
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'

export default function SignUp() {
    const router = useRouter()

    const [data, setData] = React.useState({
        username : '',
        password : '',
        confirm_password : '',
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

    const handleInputConfirmPassword = event => {
        setData({
            ... data,
            confirm_password : event.target.value
        });
    };



    const submit = async (e) => {
        e.preventDefault();
        if (data.password != data.confirm_password) {
            alert("Password and Confirmation Password didn't match")
        } else {
     
        const response = await fetch('https://auth-law-a1.herokuapp.com/register', {
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
                router.push('https://law-a-1.netlify.app/logout')
            } else {
                if(data.username.length<5){
                    alert("Username must contain atleast 5 characters")
                } else if(data.password.length<8){
                    alert("Password must contain atleast 8 characters")
                } else if(!(/\d/.test(data.password))){
                    alert("Password must contain atleast 1 digit number")
                } else if(!(/[A-Z]/.test(data.password))){
                    alert("Password must contain atleast 1 uppercase letter")
                } else if(!(/[a-z]/.test(data.password))){
                    alert("Password must contain atleast 1 lowercase letter")
                } else if (data.confirm_password < 8) {
                    alert("Password didn't match with confirmation password")
                } else {
                    response.json().then(data => alert("Invalid username/password"))
                }
            }
        }).catch(function(error) {
            alert("Something went wrong")
        })

    }
        
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <Head>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
                <title>Sign Up</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl">
                    <div className="p-10">
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-black-500 mb-2">Sign Up</h2>
                            <div className="border-2 w-10 border-black-500 inline-block mb-2"></div>
                        </div>
                        <form>
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <input type="username" onChange={handleInputUsername} name="username" placeholder="username" className="bg-gray-100 outline-none text-sm flex-1" />
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <input type="password" onChange={handleInputPassword} name="password" placeholder="password" className="bg-gray-100 outline-none text-sm flex-1" />
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <input type="password" onChange={handleInputConfirmPassword} name="confirm-password" placeholder="confirm passowrd" className="bg-gray-100 outline-none text-sm flex-1" />
                        </div>
                        <div>
                            <button type="submit" onClick={submit} className="border-2 border-black-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white mb-3">Create Account</button>
                        </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}