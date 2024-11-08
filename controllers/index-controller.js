const links = [
  { href: "/", text: "Home" },
  { href: "new", text: "Form" },
];

exports.getIndex = (req, res) => {
  // res.send("This is the index!");
  res.render("index", { links: links });
};
