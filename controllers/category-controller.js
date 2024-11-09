const links = require("../utils/links");
const db = require("../db/queries");

exports.getNewCategory = (req, res) => {
  res.render("new-category", { links: links });
};

exports.postNewCategory = async (req, res) => {
  const { brand, description } = req.body;

  await db.addCategory(brand, description);

  res.redirect("/categories");
};

exports.getCategories = async (req, res) => {
  const categories = await db.getAllCategories();

  res.render("categories", { links: links, categories: categories });
};
