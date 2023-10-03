"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameProductSchema_1 = require("./schemas/gameProductSchema");
function gameProductBelongToCategory(category, product) {
    let categoryArray;
    if (category in gameProductSchema_1.CategoriesMap) {
        categoryArray = gameProductSchema_1.CategoriesMap[category];
    }
    else {
        categoryArray = Object.values(gameProductSchema_1.CategoriesMap).find((categories) => categories.includes(category));
    }
    if (!categoryArray) {
        return false;
    }
    return categoryArray.includes(product.category);
}
exports.default = gameProductBelongToCategory;
