const express = require('express');
const faker = require('faker');
//router
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    categories: [{
      name: 'bike',
    },
    {
      name: 'electrobike'
    },
    {
      name: 'videogame console'
    }]
  });
  console.log("categories sent");
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
