const bookService = require('../service/book.service');

const getAll = async (req, res) => {
    const result = await bookService.getAll();
    return res.status(200).json(result);
}

const findById = async (req, res) => {
    const {id} = req.params;
    const result = await bookService.getById(id);
    if(!result) return res.status(404).json({ "message": "Book not found" });
    return res.status(200).json(result);
};

const create = async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const book = await bookService.create({ title, author, pageQuantity });
  
    res.status(201).json(book);
  };

module.exports = {
    getAll,
    findById,
    create,
}