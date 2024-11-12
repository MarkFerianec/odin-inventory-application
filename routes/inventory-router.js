const { Router } = require("express");
const inventoryRouter = Router();

const indexController = require("../controllers/index-controller");
const categoryController = require("../controllers/category-controller");
const itemController = require("../controllers/item-controller");

// Index
inventoryRouter.get("/", indexController.getIndex);

// Category
inventoryRouter.get("/categories", categoryController.getCategories);

inventoryRouter.get("/new-category", categoryController.getNewCategory);
inventoryRouter.post("/new-category", categoryController.postNewCategory);

// Item
inventoryRouter.get("/items", itemController.getItems);

inventoryRouter.get("/new-item", itemController.getNewItem);
inventoryRouter.post("/new-item", itemController.postNewItem);

inventoryRouter.post("/delete-item/:item_id", itemController.deleteItem);

inventoryRouter.get("/update-item/:item_id", itemController.getUpdateItem);
inventoryRouter.post("/update-item/:item_id", itemController.postUpdateItem);

module.exports = inventoryRouter;
