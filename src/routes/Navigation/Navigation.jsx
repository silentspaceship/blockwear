import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./Navigation.styles";

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
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}

          <CartIcon />
        </NavLinks>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </>
  );
}

export default Navigation;
