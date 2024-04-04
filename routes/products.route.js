const express = require("express");
const {
  productGet,
  productPost,
} = require("../controllers/products.controller");
const router = express.Router();

router.get("/products", productGet);
router.post("/products", productPost);

module.exports = router;
