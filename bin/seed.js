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
    name: "iPhone XS",
    displaysize: `5,8"`,
    color: "Gold",
    storage:"128 GB",
    price: 250,
    image: "images/iphoneXS.jpg"
  },
  {
    name: "iPhone X",
    displaysize: `5,8"`,
    color: "Black",
    storage:"128 GB",
    price: 299,
    image: "images/iphone-X.jpg"
  },
  {
    name: "iPhone XR",
    displaysize: `6,1"`,
    color: "Black",
    storage:"128 GB",
    price: 250,
    image: "images/iphoneXR.jpg"
  },
  {
    name: "iPhone 11",
    displaysize: `6,1"`,
    color: "White",
    storage:"128 GB",
    price: 399,
    image: "images/iphone-11.jpg"

  },
  {
    name: "iPhone 11 Pro",
    displaysize: `5,8"`,
    color: "Gold",
    storage:"128 GB",
    price: 450,
    image: "images/iphone-11pro.jpg"
  },
  {
    name: "iPhone 12",
    displaysize: `6,1"`,
    color: "Black",
    storage:"128 GB",
    price: 499,
    image: "images/iphone-12.jpg"

  },
  { 
    name: "iPhone 12 mini",
    displaysize: `5,4"`,
    color: "Green",
    storage:"128 GB",
    price: 450  ,
    image: "images/iphone12-mini.jpg"
  },
  {
    name: "iPhone 12 Pro",
    displaysize: `6,1"`,
    color: "Graphite Black",
    storage:"128 GB",
    price: 689,
    image: "images/iphone-12pro.jpg"
  },
  {
    name: "iPhone 12 Pro Max",
    displaysize: `6,7"`,
    color: "Blue",
    storage:"128 GB",
    price: 1050,
    image: "images/iphone-12pro-max.jpg"
  },
  {
    name: "iPhone 13",
    displaysize: `6,1"`,
    color: "Red",
    storage:"128 GB",
    price: 699,
    image: "images/iphone-13.jpg"
  },
  {
    name: "iPhone 13 Pro",
    displaysize: `6,1"`,
    color: "Green",
    storage:"128 GB",
    price: 950,
    image: "images/iphone-13pro.jpg"

  },
  {
    name: "iPhone 14",
    displaysize: `6,1"`,
    color: "Violett",
    storage:"128 GB",
    price: 999,
    image: "images/iphone-14.jpg"
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