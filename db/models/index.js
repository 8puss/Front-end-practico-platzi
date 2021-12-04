const { User, UserSchema } = require('./userModel');
const { Product, ProductSchema } = require('./productModel')

function setupUserModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
}

function setupProductModels(sequelize) {
    Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = { setupUserModels, setupProductModels};