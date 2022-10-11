const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username:{
      type: String,
      required: [true, 'Please input valid username']
    },
    email: {
      type: String,
      required: [true, 'Please input valid email'], //[value, validation message]
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
