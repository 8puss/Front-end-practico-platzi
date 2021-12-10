//header files and helpers
const express = require('express');
const CustomerService = require('../services/customerServices');
const validatorHandler = require('../../middlewares/validatorHandler');
const { createCustomerSchema, updateCustomerSchema, getCustomerSchema } = require('../../schemas/customerSchema');
//router
const router = express.Router();
//servicios
const service = new CustomerService();

router.get('/', async (req, res, next) => {
/*  const users = [];
  const { size } = req.query;
  const limit = size || 10; */
  try {
    const customers = await service.find();
    res.json(customers);
    console.log("customers sent");
  } catch (error) {
    next(error);
  }
});

//recoger params tipo query

/* router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parámetros');
  }
}); */
/* //get id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({
      message: 'not found'
    });
  } else {
    res.status(200).json({
      id,
      firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			gender: faker.name.gender(),
    });
  }
}); */
router.get('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await service.findOne(id);
      res.json(customer);
      console.log('customer ' + customer.name + ' sent');
    } catch (error) {
      next(error);
    }
  }
);


//POST
router.post('/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCustomer = await service.create(body);
      res.status(201).json(newCustomer);
    } catch (error) {
      next(error);
    }
  }
);

//patch
router.patch('/:id',
  validatorHandler(createCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const customer = await service.update(id, body);
      res.json(customer);
    } catch (error) {
      res.status(404).json({
      message: error.message
      })
    }
  }
);

//delete
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteCustomer = await service.delete(id);
    res.json(deleteCustomer);
  } catch (error) {
    next(error)
  }
});

//exportar modulo
module.exports = router;
