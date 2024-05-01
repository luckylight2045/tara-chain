const router = require("../express.route");
const authorController = require("../../modules/authors/author.controller");
const {
  createUser,
} = require("../../middlewares/validators/author/author.validator");
const checkError = require("../../middlewares/validator");
const {
  updateAuthorValidator,
} = require("../../middlewares/validators/author/author.validator");

router.post("", createUser, checkError, authorController.create);
router.get("", authorController.getAllAuthors);
router.get("/:id", authorController.getAuthorById);
router.put(
  "/:id",
  updateAuthorValidator,
  checkError,
  authorController.updateUser
);
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;
