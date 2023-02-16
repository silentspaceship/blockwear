import "./Navigation.styles.scss";

import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/BlockwearLogo.svg";

import { UserContext } from "../../contexts/userContext";

import { signOutUser } from "../../utils/firebase/firebase-utils";

function Navigation() {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navigation;
