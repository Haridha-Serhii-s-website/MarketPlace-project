const router = require("express").Router();
const Product = require("../models/Product.model");
const Order = require("../models/Order.model");

router.get("/orders", (req, res, next) => {
  res.render("orders/order");
});

// Create a new order in DB
router.post("/orders", (req, res, next) => {
  const newOrder = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    city: req.body.city,
    postalCode: req.body.postalCode,
  };
  Order.create(newOrder)
    .then(() => {
      console.log("Order is created");
      res.redirect("/orders-list");
    })
    .catch((err) => {
      console.log("error creating new order in DB", err);
      next(err);
    });
});

//Get all orders from DB
router.get("/orders-list", (req, res, next) => {
  Order.find()
    .then((ordersFromDB) => {
      res.render("orders/orders-list", { orders: ordersFromDB });
    })
    .catch((err) => {
      console.log("error creating new order in DB", err);
      next(err);
    });
});

module.exports = router;
