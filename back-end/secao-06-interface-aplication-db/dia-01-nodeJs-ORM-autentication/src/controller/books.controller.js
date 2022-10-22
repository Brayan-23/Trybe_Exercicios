const bookService = require('../service/book.service');

const getAll = async (req, res) => {
    const result = await bookService.getAll();
    return res.status(200).json(result);
}

const findById = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    const result = await bookService.getById(id);
    if(!result) return res.status(404).json({ "message": "Book not found" });
    return res.status(200).json(result);
};

const create = async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const book = await bookService.create({ title, author, pageQuantity });
  
    res.status(201).json(book);
  };

  const updateBook = async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    const result = await bookService.updateBook(id, {title, author, pageQuantity});
    if(!result) {
        const throwError = {status: 404, message: 'Book not Found'};
        throw throwError;
    }
    return res.status(201).json({message: 'Book updated'});
  }

  const removeBook = async (req, res) => {
    const {id} = req.params;
    const result = await bookService.removeBook(id);
    if(!result) {
        const throwError = {status: 500, message: 'Algo deu Errado'};
        throw throwError;
    }
    return res.status(200).json();
  }
module.exports = {
    getAll,
    findById,
    create,
    updateBook,
    removeBook,
}