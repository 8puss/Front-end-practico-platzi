//header file
const Joi = require('joi');
//validators
const id = Joi.string().uuid();
const firstName = Joi.string()
.min(3)
.max(15);
const lastName = Joi.string()
.min(3)
.max(15);
const gender = Joi.string()
.max(30);

const  createUserSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  gender: gender.required()
});

const  updateUserSchema = Joi.object({
  firstName: firstName,
  lastName: lastName,
  gender: gender
});

const  getUserSchema = Joi.object({
  id: id.required(),
});


module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema
};
