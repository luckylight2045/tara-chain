const authorRoute = require("./authors/author.route");
const bookRoute = require("./books/book.route");

function router(app) {
  app.use("/authors", authorRoute);
  app.use("/books", bookRoute);
}

module.exports = router;
