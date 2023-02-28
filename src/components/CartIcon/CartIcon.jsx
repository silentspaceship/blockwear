import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cartContext";

import "./CartIcon.styles.scss";

function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  function toggleIsCartOpen() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
}

export default CartIcon;
