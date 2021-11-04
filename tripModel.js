const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
  id: String,
  caption: String,
  image: String,
  position: {
    latitude: Number,
    longitude: Number,
  },
  likes: { type: Number, default: 0 },
  comments: [
    {
      username: String,
      text: String,
      date: { type: Date, default: Date.now },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  username: String,
});

module.exports = mongoose.model("Trip", tripSchema);
