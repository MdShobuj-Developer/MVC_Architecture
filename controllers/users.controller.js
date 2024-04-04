const users = require("../models/users.model");
const path = require("path");

const userGet = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/users.view.html"));
};

const userPost = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const user = {
    name,
    age,
  };
  users.push(user);
  res.status(201).json({
    success: true,
    users,
  });
};

module.exports = {
  userGet,
  userPost,
};
