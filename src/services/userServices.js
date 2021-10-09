//header files
const faker = require('faker');


// plantilla de servicios para productos
class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 100; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        gender: faker.name.gender(),
      });
    }
  }

  create() {

  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find(item => item.id === id);
  }

  update() {

  }
}


//exportar servicios
module.exports = UserService;
