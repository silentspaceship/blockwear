import "./ProductCart.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/cartContext";

import Button from "../Button/Button";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  function addProductToCart() {
    addItemToCart(product);
  }

  return (
    <div className="product-card-container">
      <div className="img-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductCard;
