const db = require("../../db");
const configs = require("../../configs");
const bcrypt = require("bcrypt");

const authorService = {
  createAuthor: async function (body) {
    try {
      const { userName, password, email } = body;
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const author = await db.author.create({
        data: {
          userName,
          password: hashPassword,
          email,
        },
      });
      return author.id;
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },

  getAuthors: async () => {
    try {
      return await db.author.findMany({
        select: {
          id: true,
          userName: true,
          email: true,
          role: true,
          profilePic: true,
        },
      });
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },

  getAuthorById: async (id) => {
    try {
      const author = await db.author.findUnique({
        where: { id },
        select: {
          id: true,
          userName: true,
          email: true,
          role: true,
          profilePic: true,
        },
      });
      return author;
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },

  updateAuthor: async function (body, id) {
    try {
      const { userName, email } = body;
      const author = await db.author.update({
        where: { id },
        data: {
          userName: userName && userName,
          email: email && email,
        },
      });
      return author.id;
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },

  deleteAuthor: async function (id) {
    try {
      const author = await db.author.delete({
        where: { id },
      });
      return author.id;
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },
};

module.exports = authorService;
