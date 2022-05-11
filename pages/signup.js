import Head  from "next/head";
import styles from '../styles/Home.module.css';


export default function Home() {
    return (
        <div>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div>
                    <div>
                        <h2>Sign Up an Account</h2>
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