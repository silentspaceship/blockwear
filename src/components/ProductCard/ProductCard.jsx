import {
  Footer,
  ImageContainer,
  Name,
  Price,
  ProductCardContainer,
} from "./ProductCard.styles";

import { useContext } from "react";

import { CartContext } from "../../contexts/cartContext";

import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  function addProductToCart() {
    addItemToCart(product);
  }

  return (
    <ProductCardContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Footer className="footer">
        <Name className="name">{name}</Name>
        <Price className="price">${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
}

export default ProductCard;
