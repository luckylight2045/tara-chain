const { body, check } = require("express-validator");
const db = require("../../../db");
const authorService = require("../../../modules/authors/author.service");

exports.createUser = [
  body("password").isString().notEmpty().trim().escape(),
  body("email")
    .trim()
    .isString()
    .notEmpty()
    .isEmail()
    .withMessage("this is not a vlid emial")
    .escape()
    .custom(async (val) => {
      try {
        const author = await db.author.findUnique({
          where: { email: val },
        });

        if (!author) {
          return Promise.resolve();
        } else {
          return Promise.reject("this email is already in use");
        }
      } catch (err) {
        console.log(err.message);
        throw new Error(err.message);
      }
    }),
  body("userName")
    .trim()
    .notEmpty()
    .isString()
    .escape()
    .custom(async (val) => {
      try {
        const author = await db.author.findUnique({
          where: { userName: val },
        });
        if (!author) {
          return Promise.resolve();
        }
        return Promise.reject("this userName is already in use");
      } catch (err) {
        console.log(err.message);
        throw new Error(err.message);
      }
    }),
];

exports.updateAuthorValidator = [
  body("email")
    .optional()
    .trim()
    .isString()
    .notEmpty()
    .isEmail()
    .withMessage("this is not a vlid emial")
    .escape()
    .custom(async (val) => {
      try {
        const author = await db.author.findUnique({
          where: { email: val },
        });

        if (!author) {
          return Promise.resolve();
        } else {
          return Promise.reject("this email is already in use");
        }
      } catch (err) {
        console.log(err.message);
        throw new Error(err.message);
      }
    }),
  body("userName")
    .optional()
    .trim()
    .notEmpty()
    .isString()
    .escape()
    .custom(async (val) => {
      try {
        const author = await db.author.findUnique({
          where: { userName: val },
        });
        if (!author) {
          return Promise.resolve();
        }
        return Promise.reject("this userName is already in use");
      } catch (err) {
        console.log(err.message);
        throw new Error(err.message);
      }
    }),
];
