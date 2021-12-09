const { User, UserSchema } = require('./userModel');
const { Product, ProductSchema } = require('./productModel');
const { Category, CategorySchema} = require('./categoryModel'); 

function setupUserModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
}

function setupProductModels(sequelize) {
    Product.init(ProductSchema, Product.config(sequelize));
}

function setupCategoryModels(sequelize) {
    Category.init(CategorySchema, Category.config(sequelize));
}

module.exports = { setupUserModels, setupProductModels, setupCategoryModels};