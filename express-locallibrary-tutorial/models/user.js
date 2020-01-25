const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: String,
    password: String,
    username: String,
    bio: String,
    imageUrl: String
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("User", userSchema);
