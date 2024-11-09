const pool = require("./pool");

// Category
async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function addCategory(brand, description) {
  await pool.query(
    "INSERT INTO categories(brand, description) VALUES ($1, $2)",
    [brand, description]
  );
}

// Item
async function getAllBrands() {
  const { rows } = await pool.query("SELECT brand FROM categories");
  return rows;
}

module.exports = {
  getAllCategories,
  addCategory,
  getAllBrands,
};
