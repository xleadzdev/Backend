const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: Number,
  quantity: Number,
  imageUrl: String,
  country: String,
  parentId: String,
  childId: String,
});

module.exports = mongoose.model("Data", dataSchema);
