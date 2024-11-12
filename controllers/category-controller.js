const links = require("../utils/links");
const db = require("../db/queries");

exports.getNewCategory = (req, res) => {
  res.render("new-category", { links: links });
};

exports.postNewCategory = async (req, res, next) => {
  const { brand, description } = req.body;

  try {
    await db.addCategory(brand, description);
    res.redirect("/categories");
  } catch (error) {
    next(error);
  }
};

exports.getCategories = async (req, res) => {
  const categories = await db.getAllCategories();

  res.render("categories", { links: links, categories: categories });
};

exports.deleteCategory = async (req, res) => {
  const { category_id } = req.params;

  await db.deleteCategory(category_id);

  res.redirect("/categories");
};
