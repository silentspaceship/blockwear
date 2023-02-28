import "./CartItem.styles.scss";

function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="quantity">×{quantity}</span>
        <span className="price">${`${price * quantity}`}</span>
      </div>
    </div>
  );
}

export default CartItem;
