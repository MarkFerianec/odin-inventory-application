const { Router } = require("express");
const inventoryRouter = Router();

const categoryController = require("../controllers/categoryController");
const itemController = require("../controllers/itemController");

inventoryRouter.get("/", categoryController.getIndex);

module.exports = inventoryRouter;
