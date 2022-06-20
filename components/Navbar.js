import Link from "next/link";
import { getJWt } from "../util/localStorage";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  }, []);

  return token ? (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">ShopTop!</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/cart">
                <a className="nav-link">Cart</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/order">
                <a className="nav-link">Order</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/logs">
                <a className="nav-link">Logs</a>
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <Link href="/logout">
              <a className="nav-link">
                Sign Out
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">ShopTop!</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/cart">
                <a className="nav-link">Cart</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/order">
                <a className="nav-link">Order</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/logs">
                <a className="nav-link">Logs</a>
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <Link href="/signin">
              <a className="nav-link">
                Login
              </a>
            </Link>
            <Link href="/signup">
              <a className="nav-link">
                Sign up for free
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
};
export default Navbar;