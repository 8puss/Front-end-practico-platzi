//header files
// const faker = require('faker');
const boom = require('@hapi/boom');
// const pool = require('../../libs/postgresPool');
const { models } = require('../../libs/sequelize');

// plantilla de servicios para productos
class ProductService {
  constructor() {
    this.products = [];
    // this.generate();
  }

  // async generate() {
  //   for (let index = 0; index < 100; index++) {
  //       this.products.push({
  //       id: faker.datatype.uuid(),
  //       name: faker.commerce.productName(),
  //       price: parseInt(faker.commerce.price(), 10),
  //       image: faker.image.imageUrl(),
  //       isBlock: faker.datatype.boolean(),
  //     });
  //   }
  // }

  async create(data) {
    const newProduct = await models.Product.create(data)
    return newProduct;
  }

  async find() {
    const answer = await models.Product.findAll();
    return answer
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('product not found')
    }
    return product;
  }

  async update(id, change) {
    const product = await this.findOne(id);
    const answer = await product.update(change);
    return answer;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy(user);
    return { id };
  }
}


//exportar servicios
module.exports = ProductService;
