const Parcel = require("../parcel");

test("A user is able to create the smallest parcel (1kg)", () => {
  const parcel = new Parcel(1, 1);
  expect(parcel.getWeight()).toEqual(1);
});

test("A user is able to create the largest parcel (300kg)", () => {
  const parcel = new Parcel(1, 300);
  expect(parcel.getWeight()).toEqual(300);
});

test("A user is able to create a parcel between 1 and 300 kg", () => {
  const parcel = new Parcel(1, 120);
  expect(parcel.getWeight()).toEqual(120);
});

// test("A user cannot create a parcel below 1kg", () => {
//   expect(new Parcel(1, 0.5)).toThrow(
//     "A parcel's weight can be between 1 and 300 kg."
//   );
// });
