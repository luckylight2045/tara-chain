const { body } = require("express-validator");

exports.booksValidator = {
  createBookValidator: [
    body("title").trim().notEmpty().isString().escape(),
    body("genre").trim().notEmpty().isString().escape(),
  ],

  updateBookValidator: [
    body("title").optional().trim().notEmpty().isString().escape(),
    body("genre").optional().trim().notEmpty().isString().escape(),
  ],
};
