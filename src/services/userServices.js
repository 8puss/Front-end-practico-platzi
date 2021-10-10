//header files
const faker = require('faker');


// plantilla de servicios para productos
class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }

  async generate() {
    for (let index = 0; index < 100; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        gender: faker.name.gender(),
      });
    }
  }

  async create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  async find() {
    return this.users;
  }

  async findOne(id) {
    return this.users.find(item => item.id === id);
  }

  async update(id, change) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...change
    };
    return this.users[index];
  }

  async delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('user not found');
    }
    this.users.splice(index, 1);
    return { message: "deleted", id };
  }
}


//exportar servicios
module.exports = UserService;
