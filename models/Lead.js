const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
    enum: ["New", "Contacted", "Qualified", "Lost", "Closed"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;
