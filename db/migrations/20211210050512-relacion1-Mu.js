'use strict';

const { CUSTOMER_TABLE, CustomerSchema } = require('../../db/models/customerModel');
const { UserSchema, USER_TABLE } = require('../models/userModel');
const { ProductSchema, PRODUCT_TABLE } = require('../models/productModel');
const { CATEGORY_TABLE, CategorySchema } = require('../models/categoryModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};
