const express = require('express');
const OrderService = require('../services/orderServices');
//middlewares header files
const validatorHandler = require('../../middlewares/validatorHandler');
const {   createOrderSchema,
  addItemSchema,
  getOrderSchema } = require('../../schemas/orderSchema');
//router
const router = express.Router();
//servicios
const service = new OrderService();

router.get('/', async (req, res, next) => {
/*  const order = [];
  const { size } = req.query;
  const limit = size || 10; */
  try {
    const order = await service.find();
    res.json(order);
    console.log("orders sent");
  } catch (error) {
    next(error);
  }
});

//get id
/* router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({
      message: 'not found'
    });
  } else {
    res.status(200).json({
      id,
      name:faker.lorem.word(),
    });
  }
}); */
router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      res.status(200).json(order);
      console.log('order ' + order.id + ' sent');
    } catch (error) {
      next(error);
    }
  }
);

//POST
router.post('/',
  validatorHandler(createOrderSchema,'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrder = await service.create(body);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }
);
//post add item
router.post('/add-item',
  validatorHandler(addItemSchema,'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);
//patch
// router.patch('/:id',
//   validatorHandler(createOrderSchema, 'params'),
//   validatorHandler(updateOrderSchema,'body'),
//   async (req, res) => {
//   try {
//     const { id } = req.params;
//     const body = req.body;
//     const order = await service.update(id, body);
//     res.json(order);
//   } catch (error) {
//       res.status(404).json({
//       message: error.message
//       });
//     }
//   }
// );
//delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedOrder = await service.delete(id);
  res.json(deletedOrder);
});


router.get('/:orderid/products/:productid', async (req, res) => {
  const { orderid, productid } = req.params;
  res.json({
    orderid,
    productid
  });
});

//exportar modulo
module.exports = router;
