import "./Shop.styles.scss";

import { useContext } from "react";

import { ProductsContext } from "../../contexts/productsContext";

import ProductCard from "../../components/ProductCart/ProductCard";

function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
