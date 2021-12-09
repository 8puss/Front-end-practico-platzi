const express = require('express');
const CategoryService = require('../services/categoriesServices');
//middlewares header files
const validatorHandler = require('../../middlewares/validatorHandler');
const {   createCategorySchema,
  updateCategorySchema,
  getCategorySchema } = require('../../schemas/categorySchema');
//router
const router = express.Router();
//servicios
const service = new CategoryService();

router.get('/', async (req, res, next) => {
/*  const categories = [];
  const { size } = req.query;
  const limit = size || 10; */
  try {
    const categories = await service.find();
    res.json(categories);
    console.log("categories sent"); 
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
  validatorHandler(getCategorySchema, 'params'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const categories = await service.findOne(id);
      res.status(200).json(categories);
      console.log('product ' + categories.name + ' sent');
    } catch (error) {
      next(error);
    }
  }
);

//POST
router.post('/',
  validatorHandler(createCategorySchema,'body'),
  async (req, res, next) => {
    try {      
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);
//patch
router.patch('/:id',
  validatorHandler(createCategorySchema, 'params'),
  validatorHandler(updateCategorySchema,'body'),
  async (req, res) => {
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
  }
);
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
