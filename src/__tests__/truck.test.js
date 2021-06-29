const Truck = require("../truck");

describe("Truck", () => {
  let testTruck;
  beforeEach(() => {
    testTruck = new Truck(1, 50);
  });
  describe("Truck Creation", () => {
    test("create truck with ID and capacity", () => {
      expect(testTruck instanceof Truck).toBeTruthy();
    });
    test("truck weight is 0 upon creation", () => {
      expect(testTruck.getTruckWeight()).toEqual(0);
    });
    test("truck is empty upon creation", () => {
      expect(testTruck.getParcels()).toEqual([]);
    });
    test("truck ID equals ID provided upon creation", () => {
      expect(testTruck.getTruckId()).toEqual(1);
    });
  });

  describe("Add Parcel to Truck", () => {
    let testParcel;
    beforeEach(() => {
      testParcel = {
        id: 1,
        weight: 50,
        getWeight: function () {
          return this.weight;
        },
      };
    });
    test("truck parcels include the added parcel", () => {
      expect(testTruck.getParcels().includes(testParcel)).toBeFalsy();
      testTruck.addParcel(testParcel);
      expect(testTruck.getParcels().includes(testParcel)).toBeTruthy();
    });
    test("truck weight increases by the added parcel's weight", () => {
      expect(testTruck.getTruckWeight()).toEqual(0);
      testTruck.addParcel(testParcel);
      expect(testTruck.getTruckWeight()).toEqual(50);
    });
  });

  describe("Remove Parcel from Truck", () => {
    let testParcel;
    beforeEach(() => {
      testParcel = {
        id: 1,
        weight: 50,
        getWeight: function () {
          return this.weight;
        },
      };
      testTruck.addParcel(testParcel);
    });
    test("truck parcels do not include the removed parcel", () => {
      expect(testTruck.getParcels().includes(testParcel)).toBeTruthy();
      testTruck.removeParcel(0);
      expect(testTruck.getParcels().includes(testParcel)).toBeFalsy();
    });
    test("truck weight decreases by the removed parcel's weight", () => {
      expect(testTruck.getTruckWeight()).toEqual(50);
      testTruck.removeParcel(0);
      expect(testTruck.getTruckWeight()).toEqual(0);
    });
  });

  describe("Get Truck Properties", () => {
    let testTruck;
    let testParcel;
    beforeEach(() => {
      testTruck = new Truck(1, 50);
      testParcel = {
        id: 1,
        weight: 50,
        getWeight: function () {
          return this.weight;
        },
      };
      testTruck.addParcel(testParcel);
    });
    test("Get Truck Weight", () => {
      expect(testTruck.getTruckWeight()).toEqual(50);
    });
    test("Get Number of Parcels in Truck", () => {
      expect(testTruck.getNumberOfParcels()).toEqual(1);
    });
    test("Get Truck Capacity - Available space for parcels", () => {
      expect(testTruck.getTruckCapacity()).toEqual(49);
    });
  });
});
