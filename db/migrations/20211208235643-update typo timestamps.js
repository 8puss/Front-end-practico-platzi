'use strict';

const { ProductSchema, PRODUCT_TABLE } = require('../models/productModel');
const { UserSchema, USER_TABLE } = require('../models/userModel');
const { CategorySchema, CATEGORY_TABLE } = require('../models/categoryModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
  }
};
