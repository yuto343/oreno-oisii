import { categories } from "../constants/categories";

export function getAllCategoryNames() {
  const categoryNames = categories.map((category) => {
    return category.name;
  });
  return categoryNames.map((categoryName) => {
    return {
      params: {
        category: categoryName,
      },
    };
  });
}
