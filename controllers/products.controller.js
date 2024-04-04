const products = require("../models/products.model");
const path = require("path");

const productGet = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/products.view.html"));
};

const productPost = (req, res) => {
  const name = req.body.name;
  const price = Number(req.body.price);
  const product = {
    name,
    price,
  };
  products.push(product);
  res.status(201).json({
    success: true,
    products,
  });
};

module.exports = {
  productGet,
  productPost,
};
