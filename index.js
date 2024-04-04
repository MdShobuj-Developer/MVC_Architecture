const express = require("express");

const products = require("./routes/products.route");
const users = require("./routes/users.route");
const app = express();

const PORT = 3000;
app.use(express.urlencoded({ extended: true }));

app.use(users);
app.use(products);

app.use((req, res, next) => {
  res.status(404).send("404 Page not found!!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
