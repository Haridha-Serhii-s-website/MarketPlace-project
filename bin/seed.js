const mongoose = require('mongoose');
const Product = require('../models/Product.model');
//const Order = require('../models/Author.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/ecommerce-project';

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


//Book.collection.drop();  // Warning, drops book collection :)
//Author.collection.drop();  // Warning, drops author collection :)


const products = [
    {
      name: "iPhone 11",
      displaysize: `6,1"`,
      color: "Black",
      storage:"128 GB",
      price: 399,
      image: "images/iphone11.jpg"

    },
    {
      name: "iPhone 11 Pro",
      displaysize: `5,8"`,
      color: "Midnight Green",
      storage:"128 GB",
      price: 450,
      image: "images/iphone-11-pro.jpg"
    },
    { 
      name: "iPhone 12 mini",
      displaysize: `5,4"`,
      color: "Red",
      storage:"128 GB",
      price: 450  ,
      image: "images/iphone-12-mini.webp"
    },
    {
      name: "iPhone 12 Pro",
      displaysize: `6,1"`,
      color: "Black",
      storage:"128 GB",
      price: 689,
      image: "images/iphone-12-pro.webp"
    },
    {
      name: "iPhone 12",
      displaysize: `6,1"`,
      color: "Black",
      storage:"128 GB",
      price: 499,
      image: ""

    },
    {
      name: "iPhone 12 Pro Max",
      displaysize: `6,7"`,
      color: "Black",
      storage:"128 GB",
      price: 1050,
      image: ""
    },
    {
      name: "iPhone XS",
      displaysize: `5,8"`,
      color: "Black",
      storage:"128 GB",
      price: 250,
      image: ""
    },
    {
      name: "iPhone XS Max",
      displaysize: `6,5"`,
      color: "Black",
      storage:"128 GB",
      price: 450,
      image: ""
    },
    {
      name: "iPhone XR",
      displaysize: `6,1"`,
      color: "Black",
      storage:"128 GB",
      price: 250,
      image: ""
    },
    {
      name: "iPhone 13",
      displaysize: `6,1"`,
      color: "Black",
      storage:"128 GB",
      price: 699,
      image: ""
    },
    {
      name: "iPhone 13 Pro",
      displaysize: `6,1"`,
      color: "Black",
      storage:"128 GB",
      price: 950,
      image: ""

    },
    {
      name: "iPhone X",
      displaysize: `5,8"`,
      color: "Black",
      storage:"128 GB",
      price: 299,
      image: ""
    }

];

const productsPromise = Product.create(products);


Promise.all([productsPromise])
  .then( (result) => {
    const productaCreated = result[0];
    console.log(`Number of products created... ${productaCreated.length} `);
    
    // Once created, close the DB connection
    mongoose.connection.close();

  })
  .catch( e => console.log("error seeding data in DB....", e));