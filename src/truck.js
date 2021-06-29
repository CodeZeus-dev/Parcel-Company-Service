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
    this.parcelCapacity--;
  }

  getParcels() {
    return this.parcels;
  }

  removeParcel(position) {
    const removedParcel = this.parcels[position];
    this.parcels.splice(position, 1);
    this.#decreaseCurrentWeight(removedParcel.getWeight());
    this.parcelCapacity++;
    return removedParcel;
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
