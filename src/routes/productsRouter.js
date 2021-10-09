const express = require('express');
const ProductService = require('../services/productServices');
//router
const router = express.Router();
//servicios
const service = new ProductService();

//query tipo size
router.get('/', (req, res) => {
/*   const { size } = req.query;
  const limit = size || 10; */
  const products = service.find();
  res.json(products);
  console.log("products sent");
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
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
}); */

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.status(200).json(product);
  console.log('product ' + product.name + ' sent');
  });

//POST
router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});
//patch
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id
  });
});
//delete
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',

    id
  });
});



//exportar modulo
module.exports = router;
