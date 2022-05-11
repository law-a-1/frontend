import Head  from "next/head";
import styles from '../styles/Home.module.css';


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className="bg-white">
                    <div>
                        <h2>Sign Up</h2>
                        <div>
                            <input type="username" name="username" placeholder="username" />
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                        <div>
                            <input type="password" name="confirm-password" placeholder="confirm password" />
                        </div>
                        <div>
                            <a href="#">Create Account</a>
                        </div>
                        
                    </div>
                </div>
            </main>
        </div>
    )
}