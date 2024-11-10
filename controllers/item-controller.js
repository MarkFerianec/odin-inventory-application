const links = require("../utils/links");
const db = require("../db/queries");

exports.getNewItem = async (req, res) => {
  const brands = await db.getAllBrands();

  res.render("new-item", { links: links, brands: brands });
};

exports.postNewItem = async (req, res) => {
  const { brand, gender, type, quantity, price } = req.body;

  await db.addItem(brand, gender, type, quantity, price);

  res.redirect("/items");
};

exports.getItems = async (req, res) => {
  const items = await db.getAllItems();

  res.render("items", { links: links, items: items });
};
