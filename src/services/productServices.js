//header files
// const faker = require('faker');
const boom = require('@hapi/boom');
const { Op } = require('sequelize');
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

  async find(query) {
    const options = {
      include: ['category'],
      where: {}
    }
    const { limit, offset} = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const { price } = query;
    if (price) {
      options.where.price = price;
    }

    const { price_min, price_max } = query;
    if (price_min && price_max) {
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max
      };
    }

    const answer = await models.Product.findAll(options);
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
    const product = await this.findOne(id);
    await product.destroy(product);
    return { message: "deleted", id };
  }
}


//exportar servicios
module.exports = ProductService;
