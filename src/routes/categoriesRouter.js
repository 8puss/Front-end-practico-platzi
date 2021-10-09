const express = require('express');
const faker = require('faker');
const CategoryService = require('../services/categoriesServices');
//router
const router = express.Router();
//servicios
const service = new CategoryService();

router.get('/', (req, res) => {
 /*  const categories = [];
  const { size } = req.query;
  const limit = size || 10; */
  const categories = service.find();
  res.json(categories);
  console.log("categories sent");
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
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const categories = service.findOne(id);
  res.status(200).json(categories);
  console.log('product ' + categories.name + ' sent');
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


router.get('/:categoryid/products/:productid', (req, res) => {
  const { categoryid, productid } = req.params;
  res.json({
    categoryid,
    productid
  });
});

//exportar modulo
module.exports = router;
