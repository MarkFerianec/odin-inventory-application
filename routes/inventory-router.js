const { Router } = require("express");
const inventoryRouter = Router();

const indexController = require("../controllers/index-controller");
const categoryController = require("../controllers/category-controller");
const itemController = require("../controllers/item-controller");

// Index
inventoryRouter.get("/", indexController.getIndex);

// Category
inventoryRouter.get("/new-category", categoryController.getNewCategory);
inventoryRouter.post("/new-category", categoryController.postNewCategory);

// Item
inventoryRouter.get("/new-item", itemController.getNewItem);
inventoryRouter.post("/new-item", itemController.postNewItem);

module.exports = inventoryRouter;
