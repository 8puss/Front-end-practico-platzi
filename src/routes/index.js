//import router files
const express = require('express');

const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const customersRouter = require('./customerRouter');
const orderRouter = require('./ordersRouter');
const viewsRouter = require('./viewsRouter');
//define router function
function routerApi(app) {
  const router = express.Router();
  //api
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/customers', customersRouter);
  router.use('/orders', orderRouter);
  //views
  app.use('/', viewsRouter);
}
//export function
module.exports = routerApi;
