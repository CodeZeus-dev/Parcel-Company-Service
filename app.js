const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const Truck = require("./src/truck");
const Parcel = require("./src/parcel");

const app = express();

const trucks = [new Truck(1, 10), new Truck(2, 50)];

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
      id: targetTruck.getTruckId(),
      parcelsDetails: {
        numberOfParcels: targetTruck.getNumberOfParcels(),
        parcels: targetTruck.getParcels(),
      },
      weight: targetTruck.getTruckWeight(),
    });
  } else {
    res.status(404).send(`No truck with ID: ${req.params.id} exists.`);
  }
});

app.post("/trucks", function (req, res) {
  const truckId = Number.parseInt(req.body.truckId);
  const truckCapacity = Number.parseInt(req.body.truckCapacity);
  const newTruck = new Truck(truckId, truckCapacity);
  trucks.push(newTruck);
  res.json(newTruck);
});

app.post("/trucks/:id/add", function (req, res) {
  let targetTruck;
  trucks.forEach((truck) => {
    if (Number.parseInt(req.params.id) === truck.getTruckId()) {
      targetTruck = truck;
    }
  });
  if (targetTruck) {
    const newParcel = new Parcel(req.body.parcelId, req.body.parcelWeight);
    targetTruck.addParcel(newParcel);
    res.json(newParcel);
  } else {
    res.status(404).send(`No truck with ID: ${req.params.id} exists.`);
  }
});

app.delete("/trucks/:id/remove/:parcelId", function (req, res) {
  let targetTruck;
  trucks.forEach((truck) => {
    if (Number.parseInt(req.params.id) === truck.getTruckId()) {
      targetTruck = truck;
    }
  });
  if (targetTruck) {
    let removed = false;
    targetTruck.getParcels().forEach((parcel, parcelIndex) => {
      if (parcel.getId() === Number.parseInt(req.params.parcelId)) {
        const removedParcel = targetTruck.removeParcel(parcelIndex);
        removed = true;
        res.json(removedParcel);
      }
    });
    if (!removed) {
      res.status(404).send("Parcel Not Found in Truck");
    }
  } else {
    res.status(404).send(`No truck with ID: ${req.params.id} exists.`);
  }
});

module.exports = app;
