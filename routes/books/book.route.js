const express = require("express");
const router = express.Router();
const bookController = require("../../modules/books/book.controller");
const {
  booksValidator,
} = require("../../middlewares/validators/book/book.validator");
const checkError = require("../../middlewares/validator");

router.post(
  "",
  booksValidator.createBookValidator,
  checkError,
  bookController.createBook
);
router.get("", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.put(
  "/:id",
  booksValidator.updateBookValidator,
  checkError,
  bookController.updateBook
);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
