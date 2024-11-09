const links = require("../utils/links");

exports.getNewCategory = (req, res) => {
  res.render("new-category", { links: links });
};

exports.postNewCategory = (req, res) => {
  res.send(req.body);
};

exports.getCategories = (req, res) => {
  res.render("categories", { links: links });
};
