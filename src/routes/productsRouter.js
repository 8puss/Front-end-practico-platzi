const express = require('express');
const faker = require('faker');
//router
const router = express.Router();

//query tipo size
router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name:faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
  console.log("products sent");
});

//parametros
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'product 2',
    price: 500
  })
});

//exportar modulo
module.exports = router;
