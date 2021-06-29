class Parcel {
  constructor(weight) {
    if (weight === undefined) {
      throw new Error("To create a parcel, its weight is required.");
    } else if (typeof weight !== "number") {
      throw new Error("A parcel's weight can only be a positive number.");
    } else if (weight < 1 || weight > 300) {
      throw new Error("A parcel's weight can be between 1 and 300 kg.");
    }
    this.weight = weight;
  }

  setWeight(newWeight) {
    this.weight = newWeight;
  }

  getWeight() {
    return this.weight;
  }
}

module.exports = Parcel;
