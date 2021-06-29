class Truck {
  constructor(id, parcelCapacity) {
    this.id = id;
    this.parcelCapacity = parcelCapacity;
    this.parcels = [];
    this.currentWeight = 0;
  }

  getTruckId() {
    return this.id;
  }

  addParcel(parcel) {
    this.parcels.push(parcel);
    this.#increaseCurrentWeight(parcel.getWeight());
  }

  removeParcel() {
    const removedParcel = this.parcels.pop();
    this.#decreaseCurrentWeight(removedParcel.getWeight());
  }

  getTruckWeight() {
    return this.currentWeight;
  }

  getNumberOfParcels() {
    return this.parcels.length;
  }

  getTruckCapacity() {
    return this.parcelCapacity;
  }

  #increaseCurrentWeight(weight) {
    this.currentWeight += weight;
  }

  #decreaseCurrentWeight(weight) {
    this.currentWeight -= weight;
  }
}

module.exports = Truck;
