const links = require("../utils/links");

exports.getIndex = (req, res) => {
  // res.send("This is the index!");
  res.render("index", { links: links });
};
