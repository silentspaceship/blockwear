import ProductCard from "../ProductCard/ProductCard";
import {
  CategoryPreviewContainer,
  TitleContainer,
  Title,
  Preview,
} from "./CategoryPreview.styles";

function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <TitleContainer>
        <Title className="title" to={title}>
          {title}
        </Title>
      </TitleContainer>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
