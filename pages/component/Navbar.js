import Link from "next/link";

const Navbar = () => {
    return(
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <Link href="/">
    <a class="navbar-brand">ShopTop!</a>
    </Link>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link href="/cart">
          <a class="nav-link">Cart</a> 
          </Link>
        </li>
        <li class="nav-item">
          <Link href="/order">
          <a class="nav-link">Order</a>
          </Link>
        </li>
      </ul>

      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-link px-3 me-2">
          Login
        </button>
        <button type="button" class="btn btn-primary me-3">
          Sign up for free
        </button>
      </div>
    </div>
  </div>
</nav>
    );
};
export default Navbar;