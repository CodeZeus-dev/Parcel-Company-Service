const request = require("supertest");
const app = require("../../app");

describe("GET /trucks ", () => {
  test("It should respond with JSON populated with Truck instances", async () => {
    const response = await request(app).get("/trucks");
    expect(response.body).toEqual({
      1: {
        truckWeight: 0,
        truckParcels: 0,
        truckCapacity: 10,
      },
      2: {
        truckWeight: 0,
        truckParcels: 0,
        truckCapacity: 50,
      },
    });
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /trucks/:id ", () => {
  test("It should respond with JSON populated with an empty truck's details", async () => {
    const response = await request(app).get("/trucks/1");
    expect(response.body).toEqual({
      id: 1,
      parcelsDetails: {
        numberOfParcels: 0,
        parcels: [],
      },
      weight: 0,
    });
  });
});

describe("POST /trucks ", () => {
  test("It creates a new empty truck and returns it", async () => {
    const newTruck = await request(app).post("/trucks").send({
      truckId: 3,
      truckCapacity: 250,
    });

    expect(newTruck.body).toHaveProperty("id");
    expect(newTruck.body.id).toBe(3);
    expect(newTruck.body).toHaveProperty("parcelCapacity");
    expect(newTruck.body.parcelCapacity).toBe(250);

    const response = await request(app).get("/trucks");
    expect(response.body).toEqual({
      1: {
        truckWeight: 0,
        truckParcels: 0,
        truckCapacity: 10,
      },
      2: {
        truckWeight: 0,
        truckParcels: 0,
        truckCapacity: 50,
      },
      3: {
        truckWeight: 0,
        truckParcels: 0,
        truckCapacity: 250,
      },
    });
  });
});

describe("POST /trucks/:id/add ", () => {
  test("It adds a new parcel into the truck and returns it", async () => {
    const newParcel = await request(app).post("/trucks/1/add").send({
      parcelId: 1,
      parcelWeight: 122,
    });

    expect(newParcel.body).toHaveProperty("id");
    expect(newParcel.body.id).toBe(1);
    expect(newParcel.body).toHaveProperty("weight");
    expect(newParcel.body.weight).toBe(122);

    const response = await request(app).get("/trucks/1");
    expect(response.body).toEqual({
      id: 1,
      parcelsDetails: {
        numberOfParcels: 1,
        parcels: [
          {
            id: 1,
            weight: 122,
          },
        ],
      },
      weight: 122,
    });
  });
});

describe("DELETE /trucks/:id/remove/:parcelId ", () => {
  test("It removes a parcel from a truck based on its ID and returns it", async () => {
    // Create the parcel in truck 1
    const newParcel = await request(app).post("/trucks/1/add").send({
      parcelId: 1,
      parcelWeight: 122,
    });

    // Remove it from truck 1
    const removedParcel = await request(app).delete("/trucks/1/remove/1");

    expect(removedParcel.body).toEqual({
      id: 1,
      weight: 122,
    });
    expect(removedParcel.statusCode).toBe(200);
  });
});
