const { User, UserSchema } = require('./userModel');
const { Product, ProductSchema } = require('./productModel');
const { Category, CategorySchema} = require('./categoryModel');
const { Customer, CustomerSchema } = require('./customerModel');
const { Order, OrderSchema} = require('./orderModel');
const { OrderProduct, OrderProductSchema } = require('./orderProductModel');

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Order.init(OrderSchema, Order.config(sequelize));
    OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

    User.associate(sequelize.models);
    Customer.associate(sequelize.models);
    Category.associate(sequelize.models);
    Product.associate(sequelize.models);
    Order.associate(sequelize.models);
}

module.exports = { setupModels };
