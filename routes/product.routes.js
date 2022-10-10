const router = require("express").Router();
const Product = require("../models/Product.model");

//READ : Get all the products from DB
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
});

//READ : get the products matching productID
router.get("/products/:productId",(req,res,next) => {
    const productId = req.params.productId;
    Product.findById(productId)
        .then((productDetails) => {
            console.log(productDetails)
            res.render("products/product-detail",productDetails);
        })
        .catch((error) => {
            console.log("Error getting details from DB",error);
            next(error);
        })

});

module.exports = router;

