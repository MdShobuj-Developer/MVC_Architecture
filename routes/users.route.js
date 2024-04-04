const express = require("express");
const { userGet, userPost } = require("../controllers/users.controller");
const router = express.Router();

router.get("/users", userGet);
router.post("/users", userPost);

module.exports = router;
