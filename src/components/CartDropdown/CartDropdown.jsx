import Button from "../Button/Button";
import "./CartDropdown.styles.scss";

function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" /> <Button>Proceed to Checkout</Button>
    </div>
  );
}

export default CartDropdown;
