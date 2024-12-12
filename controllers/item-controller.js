const links = require("../utils/links");
const db = require("../db/queries");

exports.getNewItem = async (req, res) => {
  const brands = await db.getAllBrands();

  res.render("new-item", { links: links, brands: brands });
};

const { body, validationResult } = require("express-validator");

const numericErr = "must only contain numbers.";
const lengthErr = "must be atleast one.";

const validateItem = [
  body("quantity")
    .trim()
    .isNumeric()
    .withMessage(`quantity ${numericErr}`)
    .isLength({ min: 1 })
    .withMessage(`quantity ${lengthErr}`)
    .escape(),
  body("price")
    .trim()
    .isNumeric()
    .withMessage(`price ${numericErr}`)
    .isLength({ min: 1 })
    .withMessage(`price ${lengthErr}`)
    .escape(),
];

exports.postNewItem = [
  validateItem,
  async (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { brand, gender, type, quantity, price } = req.body;

      await db.addItem(brand, gender, type, quantity, price);

      res.redirect("/items");
    }

    const brands = await db.getAllBrands();

    res.status(400).render("new-item", {
      links: links,
      brands: brands,
      errors: errors.array(),
    });
  },
];

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

exports.postUpdateItem = [
  validateItem,
  async (req, res) => {
    const errors = validationResult(req);

    const { item_id } = req.params;

    if (errors.isEmpty()) {
      const { gender, type, quantity, price } = req.body;

      await db.updateItem(gender, type, quantity, price, item_id);

      res.redirect("/items");
    }

    const itemDetails = await db.getItemDetails(item_id);

    res.status(400).render("item-update", {
      links: links,
      item: itemDetails.rows[0],
      errors: errors.array(),
    });
  },
];
