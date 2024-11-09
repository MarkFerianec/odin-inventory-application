const links = require("../utils/links");
const db = require("../db/queries");

exports.getNewItem = async (req, res) => {
  const brands = await db.getAllBrands();

  res.render("new-item", { links: links, brands: brands });
};

exports.postNewItem = (req, res) => {
  res.send(req.body);
};

exports.getItems = async (req, res) => {
  res.render("items", { links: links });
};
