const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Trip = require("./tripModel");
const mongodb_connection_string = process.env.CUSTOMCONNSTR_mongodb_connection_string;
const port = process.env.PORT || 4000;

mongoose.connect(mongodb_connection_string, {}).then(() => {
  console.log(`Connected to mongodb ${mongodb_connection_string}`);
  app.use(express.json());

  app.all("*", function (req, res, next) {
    let origin = req.headers.origin;
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    next();
  });

  app.get("/api", (req, res) => {
    res.send("Hello from api");
  });

  app.get("/api/trip", async (req, res) => {
    const tripsCopy = await Trip.find({});
    res.json(tripsCopy.reverse());
  });

  app.post("/api/trip", async (req, res) => {
    console.log(req.body);
    const trips = await Trip.find({});
    const id = (trips.length + 1).toString();
    const newTrip = new Trip({
      ...req.body,
      id: id,
    });
    await newTrip.save();

    res.json(newTrip);
  });

  app.put("/api/trip/:tripId/like", async (req, res) => {
    const tripId = req.params.tripId;
    await Trip.findByIdAndUpdate(tripId, {
      $inc: {
        likes: 1,
      },
    });
    res.json("success");
  });

  app.listen(port, () => {
    console.log(`Api listening at http://localhost:${port}`);
  });
});
