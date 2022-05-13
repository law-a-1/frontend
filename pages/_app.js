import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './component/Navbar';

function MyApp({ Component, pageProps }) {
  return (
  <><Navbar /><Component {...pageProps} /></>)
}

export default MyApp
