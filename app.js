const { application } = require("express");
const express = require("express");
const app = express();
const port = 4000;

let trips = [
  {
    id: "1",
    caption: "Fløyen i solnedgang",
    image:
      "https://64.media.tumblr.com/ed77b74ecec9e783f3341bee21cecd1e/tumblr_ope8h57wSM1rfmakwo1_1280.jpg",
    position: {
      latitude: 60.394561,
      longitude: 5.34275,
    },
    likes: 3,
    date: new Date(),
    username: "Simontriple",
  },
  {
    id: "2",
    caption: "Morgentur til Ulrikken",
    image:
      "https://scontent.fosl1-1.fna.fbcdn.net/v/t1.6435-9/44130508_10161077679505720_7052782714637778944_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=oijMRwDjVmsAX9PlKMm&_nc_ht=scontent.fosl1-1.fna&oh=650c39264ba146e8f69b15604c169558&oe=618F9471",
    position: {
      latitude: 60.377247,
      longitude: 5.3814176,
    },
    likes: 13,
    date: new Date(),
    username: "Matsen",
  },
];

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

app.get("/api/trip", (req, res) => {
    const tripsCopy = [...trips];
  res.json(tripsCopy.reverse());
});

app.post("/api/trip", (req, res) => {
  console.log(req.body);
  const id = (trips.length + 1).toString();
  trips.push({ ...req.body, id: id, date: new Date(), likes: 0 });
  res.json(trips.find((t) => t.id === id));
});

app.put("/api/trip/:tripId/like", (req, res) => {
  trips = trips.map((t) =>
    t.id === req.params.tripId ? { ...t, likes: t.likes + 1 } : t
  );
  res.json("success");
});

app.listen(port, () => {
  console.log(`Api listening at http://localhost:${port}`);
});
