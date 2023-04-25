const calcPaintingCost = function (pricePerLitre) {
  let numberOfRooms = 6;
  let areaPerRoom = 3 * 3;
  let totalAreaOfAllRooms = numberOfRooms * areaPerRoom;
  let numberofWindows = 6;
  let numberOfDoors = 8;
  let numberOfWindowsAndDoors = numberofWindows + numberOfDoors;
  let numberOfCmPerMetre = 100;
  let areaPerWindowOrDoor =
    (90 / numberOfCmPerMetre) * (150 / numberOfCmPerMetre);
  let totalAreaOfAllWindowsAndDoors =
    numberOfWindowsAndDoors * areaPerWindowOrDoor;
  let totalPaintingAreas =
    (totalAreaOfAllRooms - totalAreaOfAllWindowsAndDoors) * 2;
  let paintCoveragePerLitre = 300;
  let paintNeeded = totalPaintingAreas / paintCoveragePerLitre;
  let paintingCost = paintNeeded * pricePerLitre;
  return paintingCost.toFixed(2);
};

const main = function (input) {
  let paintingCostRequired = calcPaintingCost(input);
  let myOutputValue = `It will cost $${paintingCostRequired} to paint the house based on a price of $${input} per litre of paint.`;
  return myOutputValue;
};
