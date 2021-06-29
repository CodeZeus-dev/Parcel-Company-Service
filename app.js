const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const Truck = require("./src/truck");

const app = express();

const trucks = [new Truck(1, 10), new Truck(2, 50)];
const parcels = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/form.html"));
});

app.get("/trucks", function (req, res) {
  const trucksObj = {};
  trucks.forEach((truck) => {
    trucksObj[truck.id] = {
      truckWeight: truck.getTruckWeight(),
      truckParcels: truck.getNumberOfParcels(),
      truckCapacity: truck.getTruckCapacity(),
    };
  });
  res.json(trucksObj);
});

app.get("/trucks/:id", function (req, res) {
  let targetTruck;
  trucks.forEach((truck) => {
    if (Number.parseInt(req.params.id) === truck.getTruckId()) {
      targetTruck = truck;
    }
  });
  if (targetTruck) {
    res.json({
      parcels: targetTruck.getNumberOfParcels(),
      weight: targetTruck.getTruckWeight(),
    });
  } else {
    res.status(404).send(`No truck with ID: ${req.params.id} exists.`);
  }
});

app.post("/trucks", function (req, res) {
  const truckId = Number.parseInt(req.body.truckId);
  const truckCapacity = Number.parseInt(req.body.truckCapacity);
  trucks.push(new Truck(truckId, truckCapacity));
  res.send("Truck successfully created.");
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
