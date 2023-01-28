import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";

function Navigation() {
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo">Logo</div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navigation;
