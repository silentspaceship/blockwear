import "./CartDropdown.styles.scss";

import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cartContext";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  function goToCheckoutHandler() {
    navigate("/checkout");
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button onClick={goToCheckoutHandler}>Proceed to Checkout</Button>
    </div>
  );
}

export default CartDropdown;
