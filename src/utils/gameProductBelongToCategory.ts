import { CategoriesMap } from './schemas/gameProductSchema';
import {
  GameProduct,
  GameProductByCategory,
  GameProductCategory,
  GameProductCategoryType,
} from './types/GameProduct';

export default function gameProductBelongToCategory<
  Category extends GameProductCategory | GameProductCategoryType,
>(
  category: Category,
  product: GameProduct,
): product is GameProductByCategory<Category> {
  let categoryArray: string[] | undefined;
  if (category in CategoriesMap) {
    categoryArray = CategoriesMap[category];
  } else {
    categoryArray = Object.values(CategoriesMap).find((categories: string[]) =>
      categories.includes(category),
    );
  }
  if (!categoryArray) {
    return false;
  }
  return categoryArray.includes(product.category);
}
