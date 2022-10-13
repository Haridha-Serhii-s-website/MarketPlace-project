const mongoose = require('mongoose');
const Product = require('../models/Product.model');
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
    image: "/images/iphoneXS.jpg",
    about:[`5.8" Super Retina HD OLED display (14.7 cm diagonal)`,
            `Water and dust protection (2 meters up to 30 minutes, IP68)`,
            `12 megapixel dual camera system with wide-angle and telephoto lenses, portrait mode, portrait lighting, depth control, Smart HDR and 4K video up to 60 fps`,
            `7 megapixel TrueDepth front camera with Portrait mode, Portrait Lighting, Depth Control and 1080p video`,
            `Face ID for secure authentication and Apple Pay`,`A12 Bionic with 2nd generation Neural Engine`,
            `fast charging`],
    specs:['3G','Bluetooth, WLAN','Apple','iOS']
  },
  {
    name: "iPhone X",
    displaysize: `5,8"`,
    color: "Black",
    storage:"128 GB",
    price: 299,
    image: "/images/iphone-X.jpg",
    about:[`Super Retina OLED, HDR10, Dolby Vision, 625 nits (HBM)`,
            `IP67 dust/water resistant (up to 1m for 30 mins)`,
            `HRD10 and Dual 12MP rear cameras one wide-angle with f/1.8 aperture`,
            `A11 Bionic`,
            `Dual core Neural engine for face ID`,
            `Fast Charge`,
            `Wireless Charging`],
    specs:['3G','Bluetooth','Apple','iOS']
  },
  {
    name: "iPhone XR",
    displaysize: `6,1"`,
    color: "Black",
    storage:"128 GB",
    price: 250,
    image: "/images/iphoneXR.jpg",
    about:[`6.1-inch Liquid Retina Display (LCD) (15.5 cm diagonal)IP67`,
          `water and dust protection rating (up to 30 minutes and in depths of up 1 metres)`,
          `IP67 dust/water resistant (up to 1m for 30 mins)`,
          `12-megapixel dual camera with dual optical image stabilisation and 7-megapixel TrueDepth front camera portrait mode, portrait light, depth control and Smart HDR`,
          `Face ID for secure authentication`,
          `A12 Bionic with next-generation Neural Engine`,
          `Fast Charge`,
          `wireless charging (with Qi chargers)`],
    specs:['3G','Bluetooth','Apple','iOS']
  },
  {
    name: "iPhone 11",
    displaysize: `6,1"`,
    color: "White",
    storage:"128 GB",
    price: 399,
    image: "/images/iphone-11.jpg",
    about:[`6.1 inch liquid retina HD LCD display (15.5 cm diagonal)`,
            `Water and dust protection (2 meters for up to 30 minutes, IP68)`,
            `12MP dual camera system with ultra wide angle and wide angle lens, night mode, portrait mode and 4K video up to 60 fps`,
            `12MP True Depth front camera with portrait mode, 4K video and slow motion`,
            `Face ID for secure authentication and Apple Pay`,
            `A13 Bionic chip with 3rd generation Neural Engine`,
            `Fast Charge`,
            `wireless charging`],
    specs:['4G','Bluetooth, USB, WLAN','Apple','iOS 13']
  },
  {
    name: "iPhone 11 Pro",
    displaysize: `5,8"`,
    color: "Gold",
    storage:"128 GB",
    price: 450,
    image: "/images/iphone-11pro.jpg",
    about:[`5,8 inch Super Retina XDR OLED Display (14,7 cm Diagonale)`,
            `Water and dust protection (4 meters up to 30 minutes, IP68)`,
            `12 megapixel triple camera system with ultra wide angle, wide angle and telephoto lenses, night mode, portrait mode and 4K video up to 60 fps`,
            `12 megapixel TrueDepth front camera with portrait mode, 4K video and slow motion`,
            `Face ID for secure authentication and Apple Pay`,
            `A13 Bionic Chip with 3rd Generation Neural Engine`],
    specs:['4G','Bluetooth, USB, WLAN','Apple','iOS 13']
  },
  {
    name: "iPhone 12",
    displaysize: `6,1"`,
    color: "Black",
    storage:"128 GB",
    price: 499,
    image: "/images/iphone-12.jpg",
    about:[`6,1 inch Super Retina XDR display (15.5 cm diagonal)`,
          `Ceramic shield that can withstand more than any smartphone glass`,
          `5G for super-fast downloads and streaming of the highest quality`,
          `A14 Bionic, the fastest chip in a smartphone`,
          `Advanced Dual Camera System with 12MP Ultra Wide Angle and Wide Angle Lens, Night Mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR Recording`,
          `Supports MagSafe accessories for easy docking and faster wireless charging`,
          `Industry-leading IP68 water protection`],
    specs:['5G','Bluetooth, USB','Apple','iOS 13']

  },
  { 
    name: "iPhone 12 mini",
    displaysize: `5,4"`,
    color: "Green",
    storage:"128 GB",
    price: 450  ,
    image: "/images/iphone12-mini.jpg",
    about:[`5,4 inch Super Retina XDR display (13.7 cm diagonal)`,
          `Ceramic shield that can withstand more than any smartphone glass`,
          `5G for super-fast downloads and streaming of the highest quality`,
          `A14 Bionic, the fastest chip in a smartphone`,
          `Advanced Dual Camera System with 12MP Ultra Wide Angle and Wide Angle Lens, Night Mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR Recording`,
          `Supports MagSafe accessories for easy docking and faster wireless charging`,
          `Industry-leading IP68 water protection`],
    specs:['5G','Bluetooth','Apple','iOS 13']
  },
  {
    name: "iPhone 12 Pro",
    displaysize: `6,1"`,
    color: "Graphite Black",
    storage:"128 GB",
    price: 689,
    image: "/images/iphone-12pro.jpg",
    about:[`6.1 inch Super Retina XDR display (15.5 cm diagonal)`,
          `Ceramic shield that can withstand more than any smartphone glass`,
          `5G for super-fast downloads and streaming of the highest quality`,
          `A14 Bionic, the fastest chip in a smartphone`,
          `Pro Camera System with 12MP Ultra Wide Angle, Wide Angle and Telephoto Lens, 5x Optical Zoom Range, Night Mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR Recording`,
          `12MP TrueDepth Front Camera with Night Mode, 4K Dolby Vision HDR Recording`,
          `LiDAR scanner for better AR experiences, night mode portraits.`,
          `Supports MagSafe accessories for easy docking and faster wireless charging`,
          `Industry-leading IP68 water protection`],
    specs:['5G','Bluetooth, USB, WLAN','Apple','iOS 13']
  },
  {
    name: "iPhone 12 Pro Max",
    displaysize: `6,7"`,
    color: "Pacific Blue",
    storage:"128 GB",
    price: 1050,
    image: "/images/iphone-12pro-max.jpg",
    about:[`6.7 inch Super Retina XDR display (17 cm diagonal)`,
          `Ceramic shield, which can withstand more than any other smartphone glass`,
          `5G for super-fast downloads and streaming of the highest quality`,
          `A14 Bionic, the fastest chip in a smartphone`,
          `Pro Camera System with 12MP Ultra Wide Angle, Wide Angle and Telephoto Lens, 5x Optical Zoom Range, Night Mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR Recording`,
          `12MP TrueDepth Front Camera with Night Mode, 4K Dolby Vision HDR Recording`,
          `LiDAR scanner for better AR experiences, night mode portraits.`,
          `Supports MagSafe accessories for easy docking and faster wireless charging`,
          `Industry-leading IP68 water protection`],
    specs:['5G','Bluetooth, USB','Apple','iOS 13']
  },
  {
    name: "iPhone 13",
    displaysize: `6,1"`,
    color: "Red",
    storage:"128 GB",
    price: 699,
    image: "/images/iphone-13.jpg",
    about:[`6,1" Super Retina XDR display`,
          `Cinematic mode automatically adds shallow depth of field and shifts focus in your videos`,
          `Advanced dual-camera system with 12MP wide-angle and ultra-wide-angle lenses; Photographic styles, Smart HDR 4, Night mode, 4K HDR recording with Dolby Vision`,
          `12 MP TrueDepth front camera with night mode, 4K HDR recording with Dolby Vision`,
          `A15 Bionic Chip for super fast performance`,
          `Up to 19 hours of video playback`,
          `Robust design with Ceramic Shield`,
          `5G for super-fast downloads and high-quality streaming`,
          `Industry-leading IP68 water protection`],
    specs:['5G','Bluetooth, USB','Apple','iOS 15']
  },
  {
    name: "iPhone 13 Pro",
    displaysize: `6,1"`,
    color: "Green",
    storage:"128 GB",
    price: 950,
    image: "/images/iphone-13pro.jpg",
    about:[`6,1" Super Retina XDR display with ProMotion that makes everything faster and smoother`,
          `Cinematic mode automatically adds shallow depth of field and shifts focus in your videos`,
          `Pro camera system with new 12 MP telephoto, wide-angle and ultra-wide-angle lenses; LiDAR scanners; 6x optical zoom range; macro photography; Photographic Styles, ProRes Video, Smart HDR 4, Night Mode, Apple ProRAW, 4K HDR recording with Dolby Vision`,
          `12 MP TrueDepth front camera with night mode, 4K HDR recording with Dolby Vision`,
          `A15 Bionic Chip for super fast performance`,
          `Up to 22 hours of video playback`,
          `Robust design with Ceramic Shield`,
          `5G for super-fast downloads and high-quality streaming`,
          `Industry-leading IP68 water protection`],
    specs:['5G','Bluetooth, USB','Apple','iOS 15']

  },
  {
    name: "iPhone 14",
    displaysize: `6,1"`,
    color: "Violett",
    storage:"128 GB",
    price: 999,
    image: "/images/iphone-14.jpg",
    about:[`6,1" Super Retina XDR Display`,
          `Advanced camera system for better photos in any light`,
          `Cinema mode now in 4K Dolby Vision with up to 30 fps`,
          `Action mode for smooth, freely filmed videos`,
          `A15 Bionic chip with 5 core GPU for super fast performance. Ultra-fast 5G mobile communications`,
          `All-day battery life and up to 20 hours of video playback`,
          `Industry-leading IP68 water protection`],
    specs:['5G','Bluetooth, USB','Apple','iOS 16']
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