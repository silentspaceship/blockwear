import "./Navigation.styles.scss";

import { useContext } from "react";

import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/BlockwearLogo.svg";

import CartIcon from "../../components/CartIcon/CartIcon";

import CartDropdown from "../../components/CartDropdown/CartDropdown";

import { UserContext } from "../../contexts/userContext";

import { signOutUser } from "../../utils/firebase/firebase-utils";
import { CartContext } from "../../contexts/cartContext";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}

          <CartIcon />
        </div>

        {isCartOpen && <CartDropdown />}
      </nav>

      <Outlet />
    </>
  );
}

export default Navigation;
