import {
  CartDropdownContainer,
  CartItems,
  EmptyCartMessage,
} from "./CartDropdown.styles";

import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cartContext";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

function CartDropdown() {
  const { cartItems, cartCount, setIsCartOpen, isCartOpen } =
    useContext(CartContext);

  const navigate = useNavigate();

  function goToCheckoutHandler() {
    navigate("/checkout");
    setIsCartOpen(!isCartOpen);
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartCount !== 0 ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
        )}
      </CartItems>

      {cartCount !== 0 && (
        <Button onClick={goToCheckoutHandler}>Proceed to Checkout</Button>
      )}
    </CartDropdownContainer>
  );
}

export default CartDropdown;
