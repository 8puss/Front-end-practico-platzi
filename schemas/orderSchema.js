//header file
const Joi = require('joi');
//validators
const id = Joi.string();
const customerId = Joi.number().integer();

const  createOrderSchema = Joi.object({
  customerId: customerId.required()
});

const  getOrderSchema = Joi.object({
  id: id.required()
});


module.exports = {
  createOrderSchema,
  getOrderSchema
};
