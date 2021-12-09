'use strict';

const { ProductSchema, PRODUCT_TABLE } = require('../models/productModel');
const { UserSchema, USER_TABLE } = require('../models/userModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(USER_TABLE, 'updatedAt', UserSchema.updatedAt);
    await queryInterface.addColumn(PRODUCT_TABLE, 'updatedAt', ProductSchema.updatedAt);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(USER_TABLE, 'updatedAt');
    await queryInterface.removeColumn(PRODUCT_TABLE, 'updatedAt');
  }
};
