//header files
const faker = require('faker');
const pool = require('../../libs/postgresPool')


// plantilla de servicios para productos
class CategoryService {
  constructor() {
    this.categories = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  async generate() {
    for (let index = 0; index < 100; index++) {
        this.categories.push({
          id: faker.datatype.uuid(),
        name: faker.lorem.word(),
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
    const query = 'SELECT * FROM tasks'
    const answer = await this.pool.query(query)
    return answer.rows;
  }

  async findOne(id) {
    return this.categories.find(item => item.id === id);
  }

  async update(id, change) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...change
    };
    return this.categories[index];
  }

  async delete(id) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    this.categories.splice(index, 1);
    return { message: "deleted", id };
  }
}


//exportar servicios
module.exports = CategoryService;
