const express = require('express');
const faker = require('faker');
const UserService = require('../services/userServices');
//router
const router = express.Router();
//servicios
const service = new UserService();

router.get('/', (req, res) => {
 /*  const users = [];
  const { size } = req.query;
  const limit = size || 10; */
  const users = service.find();
  res.json(users);
  console.log("users sent");
});

//recoger params tipo query

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parámetros');
  }
});
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
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user);
  console.log('user ' + user.firstName + ' ' + user.lastName + ' sent');
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
