const express = require("express");
const app = express();

const path = require("node:path");

app.use("/favicon.ico", express.static("images/favicon.ico"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const inventoryRouter = require("./routes/inventoryRouter");

app.use("/", inventoryRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Express app - listening on port ${PORT}!`);
});
