import CategoryItem from "../category-item/category-item.component";
import { categories } from "../Categories";

function Directory() {
  return (
    <div className="categories-container">
      {categories.map((cat) => {
        return <CategoryItem key={cat.id} cat={cat} />;
      })}
    </div>
  );
}

export default Directory;
