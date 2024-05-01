const authorService = require("./author.service");
const configs = require("../../configs");

const authorController = {
  create: async function (req, res, next) {
    try {
      console.log("user controller section");
      const authorId = await authorService.createAuthor(req.body);
      res.end(`author with id ${authorId} is successfully created`);
    } catch (err) {
      res.json({
        error: true,
        message: err.message,
      });
    }
  },

  getAllAuthors: async function (req, res, next) {
    try {
      const authors = await authorService.getAuthors();
      res.json(authors);
    } catch (err) {
      res.json({
        error: true,
        message: err.message,
      });
    }
  },

  getAuthorById: async function (req, res, next) {
    try {
      const { id } = req.params;
      const author = await authorService.getAuthorById(parseInt(id));
      return res.status(200).json(author);
    } catch (err) {
      res.json({
        error: true,
        message: err.message,
      });
    }
  },

  updateUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const authorId = await authorService.updateAuthor(req.body, parseInt(id));
      res.end(`author with id:${authorId} is successfully updated`);
    } catch (err) {
      res.json({
        error: true,
        message: err.message,
      });
    }
  },

  deleteAuthor: async (req, res, next) => {
    try {
      const { id } = req.params;
      const authorId = await authorService.deleteAuthor(parseInt(id));
      res.end(`author  with id ${authorId} is successfully deleted`);
    } catch (err) {
      res.json({
        error: true,
        message: err.message,
      });
    }
  },
};

module.exports = authorController;
