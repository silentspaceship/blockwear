import "./Category.styles.scss";

import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categoriesContext";
import ProductCard from "../../components/ProductCart/ProductCard";

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      <h2 className="title">{category}</h2>
      <div className="category-items-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Category;
