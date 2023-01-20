import "./categories.styles.scss";

import CategoryItem from "../CategoryItem/CategoryItem";

function CategoriesMenu({ categories }) {
  return (
    <div className="App">
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesMenu;
