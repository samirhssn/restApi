const express = require("express");
const UserModel = require("../models/UserModel");
const router = express.Router();

// Created the data
router.post("/", (req, res) => {
  const user = new UserModel({
    title: req.body.title,
    description: req.body.description,
  });

  user
    .save()
    .then((data) => res.send(data))
    .catch((err) => console.log(err, "failed to save to the database"));
});

// get all the users
router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    console.log({ message: err });
  }
});

module.exports = router;
