import { GameProduct, GameProductByCategory, GameProductCategory, GameProductCategoryType } from './types/GameProduct';
export default function gameProductBelongToCategory<Category extends GameProductCategory | GameProductCategoryType>(category: Category, product: GameProduct): product is GameProductByCategory<Category>;
