const links = require("../utils/links");
const db = require("../db/queries");

exports.getNewItem = (req, res) => {
  res.render("new-item", { links: links });
};

exports.postNewItem = (req, res) => {
  res.send(req.body);
};

exports.getItems = (req, res) => {
  res.render("items", { links: links });
};
