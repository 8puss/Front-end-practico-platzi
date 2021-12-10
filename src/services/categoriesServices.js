//header files
const { boomify } = require('@hapi/boom');
const faker = require('faker');
// const pool = require('../../libs/postgresPool')
const { models } = require('../../libs/sequelize');


// plantilla de servicios para productos
class CategoryService {
  constructor() {
    this.categories = [];
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
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    // const query = 'SELECT * FROM tasks'
    const answer = await models.Category.findAll();
    return answer;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      include: ['products']
    });
    if (!category) {
      throw boom.notFound('category not found')
    }
    return category;
  }

  async update(id, change) {
  /*   const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...change
    };
    return this.categories[index]; */
    const category = await this.findOne(id);
    const answer = await category.update(change);
    return answer;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy(category);
    return { message: "deleted", id };
  }
}


//exportar servicios
module.exports = CategoryService;
