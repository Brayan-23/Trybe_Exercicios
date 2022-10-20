const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bookController = require('./controller/books.controller');

app.use(express.json());

app.post('/books', bookController.create);
app.get('/books', bookController.getAll);
app.get('/books/:id', bookController.findById);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
