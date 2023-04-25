const main = function (distance) {
  let costPerLitre = 2.2;
  let kmPerLitre = 9;
  let totalCost = (costPerLitre / kmPerLitre) * distance;
  totalCost = totalCost.toFixed(2);
  let myOutputValue = `A ${distance}-km road trip is expected to cost $${totalCost}.`;
  return myOutputValue;
};

// Road Trip Cost
// The user will enter the length of a planned road trip in his brand new Ferrari. The program should output the estimated fuel cost of the road trip.
// A new Ferrari consumes 9km/litre. Petrol costs $2.20/litre.
// Format the output nicely.

// input - > distance (km)
// 9 km -> 1 litre
// 1 litre -> $2.20
// 9 km ->$2.20
// 1 km -> $2.20/9
