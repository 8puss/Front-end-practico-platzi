//header file
const Joi = require('joi');
//validators
const id = Joi.string().uuid();
const name = Joi.string()
.min(3)
.max(15);
const email  = Joi.string()
.min(3)
.max(15);
const password = Joi.string()
.min(3)
.max(15);

const  createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required()
});

const  updateUserSchema = Joi.object({
  name: name,
  email: email,
  password: password,
});

const  getUserSchema = Joi.object({
  id: id.required(),
});


module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema
};
