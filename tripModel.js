const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
  id: String,
  caption: String,
  image: String,
  position: {
      latitude: Number,
      longitude: Number
  },
  likes: { type: Number, default: 0 },
  date: {
    type: Date,
    default: Date.now,
  },
  username: String
});

module.exports = mongoose.model("Trip", tripSchema);
