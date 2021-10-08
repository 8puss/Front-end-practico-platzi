const express = require('express');
const faker = require('faker');
const app = express();
const port = 8080;
const IP = "192.168.100.44";

//routing
app.get('/', (req, res) => {
  res.send("Hola servidor");
});

app.get('/categories', (req, res) => {
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
});

//parametros
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'product 2',
    price: 500
  })
});

app.get('/categories/:categoryid/products/:productid', (req, res) => {
  const { categoryid, productid } = req.params;
  res.json({
    categoryid,
    productid
  });
});

/* app.get('/users', (req, res) => {
  res.json({
    users: [{
      first_name: 'mike',
      last_name: 'wazouski'
    },
    {
      first_name: 'buster',
      last_name: 'bo'
    },
    {
      first_name: 'ambar',
      last_name:'bar'
    }]
  });
}); */

//recoger params tipo query

app.get('/users', (req, res) => {
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

//query tipo size
app.get('/products', (req, res) => {
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
});


//listener
app.listen(port, () => {
  console.log("http://"+ IP +":" + port + "/");
});
