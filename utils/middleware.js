const errorHandler = (err, req, res, next) => {
  if (err.code === "23505") {
    res.redirect("/categories");
  }
};

module.exports = {
  errorHandler,
};
