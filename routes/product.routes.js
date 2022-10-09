const router = require("express").Router();
const Product = require("../models/Product.model");


router.get("/products",(req,res,next) => {
    Product.find()
            .then((prdouctsFromDb) => {
                console.log(prdouctsFromDb)
                res.render("products/product-list",{products: prdouctsFromDb})
            })
            .catch((error) => {
                console.log("Error getting products from DB",error);
                next(error);
            })
})


module.exports = router;

