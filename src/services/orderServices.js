//header files
const { boom } = require('@hapi/boom');
// const pool = require('../../libs/postgresPool')
const { models } = require('../../libs/sequelize');


// plantilla de servicios para productos
class OrderService {
  constructor() {
    this.orders = [];
    // this.generate();
    // this.pool = pool;
    // this.pool.on('error', (err) => console.error(err));
  }

  // async generate() {
  //   for (let index = 0; index < 100; index++) {
  //       this.categories.push({
  //         id: faker.datatype.uuid(),
  //       name: faker.lorem.word(),
  //     });
  //   }
  // }

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async find() {
    // const query = 'SELECT * FROM tasks'
    const answer = await models.Order.findAll();
    return answer;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user']

        }
      ]
    });
    if (!order) {
      throw boom.notFound('order not found')
    }
    return order;
  }

  async update(id, change) {
    const order = await this.findOne(id);
    const answer = await order.update(change);
    return answer;
  }

  async delete(id) {
    const order = await this.findOne(id);
    await order.destroy(order);
    return { message: "deleted", id };
  }
}


//exportar servicios
module.exports = OrderService;
