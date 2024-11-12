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

exports.deleteItem = async (req, res) => {
  const { item_id } = req.params;

  await db.deleteItem(item_id);

  res.redirect("/items");
};

exports.getUpdateItem = async (req, res) => {
  const { item_id } = req.params;

  const itemDetails = await db.getItemDetails(item_id);

  res.render("item-update", { links: links, item: itemDetails.rows[0] });
};

exports.postUpdateItem = async (req, res) => {
  const { item_id } = req.params;

  const { gender, type, quantity, price } = req.body;

  await db.updateItem(gender, type, quantity, price, item_id);

  res.redirect("/items");
};
