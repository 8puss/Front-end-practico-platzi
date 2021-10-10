const express = require('express');
const CategoryService = require('../services/categoriesServices');
//router
const router = express.Router();
//servicios
const service = new CategoryService();

router.get('/', async (req, res) => {
/*  const categories = [];
  const { size } = req.query;
  const limit = size || 10; */
  const categories = await service.find();
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
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const categories = await service.findOne(id);
  res.status(200).json(categories);
  console.log('product ' + categories.name + ' sent');
  });

//POST
router.post('/', async (req, res) => {
  const body = req.body;
  const newCategory = await service.create(body);
  res.status(201).json(newCategory);
});
//patch
router.patch('/:id', async (req, res) => {
  try {
  const { id } = req.params;
  const body = req.body;
  const category = await service.update(id, body);
  res.json(category);
  } catch (error) {
    res.status(404).json({
    message: error.message
    });
  }
});
//delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedCategory = await service.delete(id);
  res.json(deletedCategory);
});


router.get('/:categoryid/products/:productid', async (req, res) => {
  const { categoryid, productid } = req.params;
  res.json({
    categoryid,
    productid
  });
});

//exportar modulo
module.exports = router;
