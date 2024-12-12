const links = require("../utils/links");
const db = require("../db/queries");

exports.getNewCategory = (req, res) => {
  res.render("new-category", { links: links });
};

const { body, validationResult } = require("express-validator");

const alphaErr = "must only contain letters.";
const brandLengthErr = "must be between 1 and 15 characters.";
const descriptionLengthErr = "must be between 1 and 30 characters.";

const validateCategory = [
  body("brand")
    .trim()
    .isAlpha()
    .withMessage(`Brand ${alphaErr}`)
    .isLength({ min: 1, max: 15 })
    .withMessage(`Brand ${brandLengthErr}`)
    .escape(),
  body("description")
    .trim()
    .isAlpha()
    .withMessage(`Description ${alphaErr}`)
    .isLength({ min: 1, max: 30 })
    .withMessage(`Description ${descriptionLengthErr}`)
    .escape(),
];

exports.postNewCategory = [
  validateCategory,
  async (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { brand, description } = req.body;

      try {
        await db.addCategory(brand, description);
        res.redirect("/categories");
      } catch (error) {
        next(error);
      }
    }

    res.status(400).render("new-category", {
      links: links,
      errors: errors.array(),
    });
  },
];

exports.getCategories = async (req, res) => {
  const categories = await db.getAllCategories();

  res.render("categories", { links: links, categories: categories });
};

exports.deleteCategory = async (req, res) => {
  const { category_id } = req.params;

  await db.deleteCategory(category_id);

  res.redirect("/categories");
};
