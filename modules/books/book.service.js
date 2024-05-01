const db = require("../../db");

const bookService = {
  createBook: async (body) => {
    try {
      const { title, genre } = body;
      const book = await db.book.create({
        data: {
          title,
          genre,
        },
      });
      return book.id;
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },

  getAllBooks: async () => {
    try {
      return await db.book.findMany();
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },

  getBookById: async (id) => {
    try {
      return await db.book.findUnique({
        where: { id },
      });
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },

  updateBook: async (body, id) => {
    try {
      const { title, genre } = body;
      const book = await db.book.update({
        where: { id },
        data: {
          title: title && title,
          genre: genre && genre,
        },
      });
      return book.id;
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },

  deleteBook: async (id) => {
    try {
      const book = await db.book.delete({
        where: { id },
      });
      return book.id;
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },
};

module.exports = bookService;
