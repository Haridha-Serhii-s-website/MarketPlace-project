const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide your name"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide your last name"],
    },
    address: {
      type: String,
      required: [true, "Please provide your shipping address"],
    },
    city: {
      type: String,
      required: [true, "Please provide your shipping address"],
    },
    postalCode: {
      type: Number,
      required: [true, "Please provide your postal code"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Order", orderSchema);
