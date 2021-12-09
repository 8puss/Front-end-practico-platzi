//header files
const boom = require('@hapi/boom');
// const faker = require('faker');
const { models } = require('../../libs/sequelize');


// plantilla de servicios para productos
class CustomerService {
  constructor() {
    this.customers = [];
    // this.generate();
  }

  // async generate() {
  //   for (let index = 0; index < 100; index++) {
  //     this.users.push({
  //       id: faker.datatype.uuid(),
  //       firstName: faker.name.firstName(),
  //       lastName: faker.name.lastName(),
  //       gender: faker.name.gender(),
  //     });
  //   }
  // }

  async create(data) {
    const newCustomer = await models.Customer.create(data);
    return newCustomer; 
  }

  async find() {
    const answer = await models.Customer.findAll();
    return answer;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('customer not found');
    }
    return customer;
  }

  async update(id, change) {
    const customer = await this.findOne(id);
    const answer = await customer.update(change);
    return answer;
  }

  async delete(id) {
    const customer = await this.findOne(id); 
    await customer.destroy(customer);
    return { message: "deleted", id };
  }
}


//exportar servicios
module.exports = CustomerService;
