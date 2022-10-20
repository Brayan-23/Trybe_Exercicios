const { Book } = require('../models');


const getAll = async ()  => {
   const result = await Book.findAll();
   return result;
}

const getById = async (id) => {
   const number = Number(id);
   const result = await Book.findByPk(number);
   return result;
}

const create = async ({ title, author, pageQuantity }) => {
    const book = await Book.create({ title, author, pageQuantity });
    return book;
  };

module.exports = {
    getAll,
    getById,
    create,
}