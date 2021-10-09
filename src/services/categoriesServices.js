//header files
const faker = require('faker');


// plantilla de servicios para productos
class CategoryService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 100; index++) {
        this.categories.push({
          id: faker.datatype.uuid(),
        name: faker.lorem.word(),
      });
    }
  }

  create() {

  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find(item => item.id === id);
  }

  update() {

  }
}


//exportar servicios
module.exports = CategoryService;
