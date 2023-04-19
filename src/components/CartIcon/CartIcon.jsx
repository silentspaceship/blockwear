import { useContext } from "react";

import { CartContext } from "../../contexts/cartContext";

import {
  ItemCount,
  ShoppingIcon,
  CartIconContainer,
} from "./CartIcon.styles.jsx";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  function toggleIsCartOpen() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <CartIconContainer
      className={`${isCartOpen ? "active" : ""}`}
      onClick={toggleIsCartOpen}>
      <ShoppingIcon className={`${isCartOpen ? "active" : ""}`} />
      <ItemCount className={`${isCartOpen ? "active" : ""}`}>
        {cartCount}
      </ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
