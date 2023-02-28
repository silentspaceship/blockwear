import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cartContext";

import "./CartIcon.styles.scss";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  function toggleIsCartOpen() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div
      className={`cart-icon-container ${isCartOpen ? "active" : ""}`}
      onClick={toggleIsCartOpen}>
      <ShoppingIcon className={`shopping-icon ${isCartOpen ? "active" : ""}`} />
      <span className={`item-count ${isCartOpen ? "active" : ""}`}>
        {cartCount}
      </span>
    </div>
  );
}

export default CartIcon;
