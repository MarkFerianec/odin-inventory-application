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

async function addItem(brand, gender, type, quantity, price) {
  await pool.query(
    "INSERT INTO items(brand, gender, type, quantity, price) VALUES ($1, $2, $3, $4, $5)",
    [brand, gender, type, quantity, price]
  );
}

async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows;
}

async function deleteItem(item_id) {
  await pool.query("DELETE FROM items WHERE item_id = ($1)", [item_id]);
}

module.exports = {
  getAllCategories,
  addCategory,
  getAllBrands,
  addItem,
  getAllItems,
  deleteItem,
};
