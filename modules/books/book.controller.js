const bookService = require("./book.service");

const bookController = {
  createBook: async (req, res, next) => {
    try {
      const bookId = await bookService.createBook(req.body);
      res.end(`book with id:${bookId} is successfully created`);
    } catch (err) {
      res.json({
        error: true,
        message: err.message,
      });
    }
  },

  getAllBooks: async (req, res, next) => {
    try {
      const books = await bookService.getAllBooks();
      res.json(books);
    } catch (err) {
      res.json({
        error: true,
        message: err.message,
      });
    }
  },

  getBookById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const book = await bookService.getBookById(parseInt(id));
      res.json(book);
    } catch (err) {
      res.json({
        error: true,
        message: err.message,
      });
    }
  },

  updateBook: async (req, res, next) => {
    try {
      const { id } = req.params;
      const bookId = await bookService.updateBook(req.body, +id);
      res.end(`book with id:${id} is successfully updated`);
    } catch (err) {
      res.json({
        error: true,
        message: err.message,
      });
    }
  },

  deleteBook: async (req, res, next) => {
    try {
      const { id } = req.params;
      const bookId = await bookService.deleteBook(+id);
      res.end(`book with id:${id} is successfully deleted`);
    } catch (err) {
      res.json({
        error: true,
        message: err.message,
      });
    }
  },
};

module.exports = bookController;
