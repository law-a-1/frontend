import Head  from "next/head";
import styles from '../styles/Home.module.css';


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <Head>
                <title>Sign Up</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl">
                    <div className="p-10">
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-black-500 mb-2">Sign Up</h2>
                            <div className="border-2 w-10 border-black-500 inline-block mb-2"></div>
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <input type="username" name="username" placeholder="username" className="bg-gray-100 outline-none text-sm flex-1" />
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <input type="password" name="password" placeholder="password" className="bg-gray-100 outline-none text-sm flex-1" />
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <input type="password" name="confirm-password" placeholder="confirm passowrd" className="bg-gray-100 outline-none text-sm flex-1" />
                        </div>
                        <div>
                            <a href="#" className="border-2 border-black-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white mb-3">Create Account</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}