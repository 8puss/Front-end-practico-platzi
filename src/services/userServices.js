//header files
const boom = require('@hapi/boom');
// const faker = require('faker');
const { models } = require('../../libs/sequelize');


// plantilla de servicios para productos
class UserService {
  constructor() {
    this.users = [];
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
    const newUser = await models.User.create(data);
    return newUser; 
  }

  async find() {
    const answer = await models.User.findAll();
    return answer;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, change) {
    const user = await this.findOne(id);
    const answer = await user.update(change);
    return answer;
  }

  async delete(id) {
    const user = await this.findOne(id); 
    await user.destroy(user);
    return { message: "deleted", id };
  }
}


//exportar servicios
module.exports = UserService;
