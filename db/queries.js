const pool = require("./pool");

// Category
async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

// Item

module.exports = {
  getAllCategories,
};
