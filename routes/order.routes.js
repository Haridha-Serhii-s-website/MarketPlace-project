const router = require("express").Router();
const Product = require("../models/Product.model");
const Order = require("../models/Order.model");

const isLoggedIn = require("../middleware/isLoggedIn");

//Get all orders from DB
router.get("/orders/my-orders", isLoggedIn, (req, res, next) => {
  //console.log(req.session.user.email);
  Order.find()
    .sort({ updatedAt: -1 })
    .populate("productId")
    .then((ordersFromDB) => {
      console.log(ordersFromDB);
      res.render("orders/my-orders", { orderDetails: ordersFromDB[0] });
    })
    .catch((err) => {
      console.log("error getting order from DB", err);
      next(err);
    });
});

router.get("/orders/:productId", isLoggedIn, (req, res, next) => {
  const { productId } = req.params;
  res.render("orders/order", { productId });
});

// Create a new order in DB
router.post("/orders/:productId", isLoggedIn, (req, res, next) => {
  const { productId } = req.params;
  console.log(productId);
  const newOrder = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    city: req.body.city,
    postalCode: req.body.postalCode,
    productId: productId,
  };
  Order.create(newOrder)
    .then(() => {
      console.log("Order is created");
      res.redirect("/orders/my-orders");
    })
    .catch((err) => {
      console.log("error creating new order in DB", err);
      next(err);
    });
});

//update the order detail
router.get("/orders/:orderId/edit", (req, res, next) => {
  Order.findById(req.params.orderId)
    .then((orderFromDb) => {
      res.render("orders/edit-order", { orderFromDb });
    })
    .catch((err) => {
      console.log("Error getting order from DB ", err);
      next(err);
    });
});

//UPDATE: Process order Info
router.post("/orders/:orderId/edit", (req, res, next) => {
  const orderId = req.params.orderId;
  const { firstName, lastName, address, city, postalCode } = req.body;
  const updatedDetails = { firstName, lastName, address, city, postalCode };
  //console.log(updatedDetails);
  Order.findByIdAndUpdate(orderId, updatedDetails)
    .then((data) => {
      //console.log(data);
      res.redirect("/orders/my-orders");
    })
    .catch((err) => {
      console.log("Error getting order from DB ", err);
      next(err);
    });
});

//Delete the order
router.post("/orders/:id/my-orders", isLoggedIn, (req, res, next) => {
  const orderId = req.params.id;
  Order.findByIdAndDelete(orderId)
    .then(() => {
      res.redirect("/products");
    })
    .catch((err) => {
      console.log("error deleting order in DB", err);
      next(err);
    });
});

//confirm order
router.post("/orders/my-orders/confirm", isLoggedIn, (req, res, next) => {
  res.render("orders/confirmed-order");
});

module.exports = router;
