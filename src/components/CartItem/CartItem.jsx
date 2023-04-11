import {
  CartItemContainer,
  Image,
  ItemDetails,
  Name,
  Quantity,
  Price,
} from "./CartItem.styles";

function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={name} />
      <ItemDetails className="item-details">
        <Name className="name">{name}</Name>
        <Quantity className="quantity">×{quantity}</Quantity>
        <Price className="price">${`${price * quantity}`}</Price>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
