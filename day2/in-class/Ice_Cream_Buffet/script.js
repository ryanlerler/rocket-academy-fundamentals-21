const main = function (numberOfTrips) {
  let volPerCup = 70;
  let volPerContainer = 400;
  let numberOfContainersConsumed =
    (volPerCup * numberOfTrips) / volPerContainer;
  numberOfContainersConsumed = numberOfContainersConsumed.toFixed(2);
  let myOutputValue = `After picking up ${numberOfTrips} cups of 70-ml ice cream, ${numberOfContainersConsumed} containers of 400-ml ice cream would be consumed.`;
  return myOutputValue;
};

// Ice Cream Buffet
// There's all-you-can-eat ice cream at the buffet. The buffet receives ice cream in 400ml containers. To save money the buffet only provides 70ml cups for customers to get ice cream.
// The user will enter a number of trips to the ice cream station (picking up 1 cup per trip) and the app will calculate how many containers of ice cream you would consume. It is ok to show the number of containers in decimal format.

// 1 trip -> 70 ml
// ...
// 6 trips -> 420 ml

// 1 container - > 400 ml
// ? container -< 420 ml
