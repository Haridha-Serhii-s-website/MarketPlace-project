const router = require("express").Router();
const Product = require("../models/Order.model");

router.get("/orders", (req, res, next) => {
  res.send("hello");
});

module.exports = router;
