const express = require('express');
require('express-async-errors');
const app = express();
const PORT = process.env.PORT || 3000;
const bookController = require('./controller/books.controller');

app.use(express.json());

app.get('/books/:id', bookController.findById);
app.get('/books', bookController.getAll);
app.put('/books/:id', bookController.updateBook);
app.post('/books', bookController.create);
app.delete('/books/:id', bookController.removeBook);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

app.use((err, req, res, next) => {
    return res.status(err.status).json({message: err.message});
})

