import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/BlockwearLogo.svg";

import "./Navigation.styles.scss";

function Navigation() {
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navigation;
