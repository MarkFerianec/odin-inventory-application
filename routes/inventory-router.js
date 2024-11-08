const { Router } = require("express");
const inventoryRouter = Router();

const indexController = require("../controllers/index-controller");
const categoryController = require("../controllers/category-controller");
const itemController = require("../controllers/item-controller");

inventoryRouter.get("/", indexController.getIndex);

module.exports = inventoryRouter;
