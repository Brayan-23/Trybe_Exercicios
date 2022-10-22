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

  const updateBook = async (id, {title, author, pageQuantity}) => {
   const [result] = await Book.update(
      {
      title,
      author,
      pageQuantity,
   },
   {where: {id}},
   );
   return result;
  };

  const removeBook = async (id) => {
   const result = await Book.destroy(
      {where: {id}}
   );
   return result;
  }

module.exports = {
    getAll,
    getById,
    create,
    updateBook,
    removeBook,
}