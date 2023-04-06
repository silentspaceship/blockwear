import { CategoryContainer, CategoryItems, Title } from "./Category.styles";

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
    <CategoryContainer>
      <Title>{category}</Title>
      <CategoryItems>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryItems>
    </CategoryContainer>
  );
}

export default Category;
