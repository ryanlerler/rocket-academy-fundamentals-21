let totalAngle = 360;

const calcHourHandAngle = function (numberOfMinPastOne) {
  let hourRequiredToTravelEntireClock = 12;
  let hourHandAnglePerHour = totalAngle / hourRequiredToTravelEntireClock;
  let numberOfMinPerHour = 60;
  let hourHandAnglePerMin = hourHandAnglePerHour / numberOfMinPerHour;
  let numberOfMinFrom12To1 = 60;
  let hourHandTimeTravelled = numberOfMinFrom12To1 + Number(numberOfMinPastOne);
  let hourHandAngleTravelled = hourHandAnglePerMin * hourHandTimeTravelled;
  return hourHandAngleTravelled;
};

const calcMinHandAngle = function (numberOfMinPastOne) {
  let minRequiredToTravelEntireClock = 60;
  let minHandAnglePerMin = totalAngle / minRequiredToTravelEntireClock;
  let minHandAngleTravelled = minHandAnglePerMin * numberOfMinPastOne;
  return minHandAngleTravelled;
};

const main = function (input) {
  let hourAndMinHandAngle = calcMinHandAngle(input) - calcHourHandAngle(input);
  let myOutputValue = `The angle between the hour and minute hands ${input} minutes past 1pm is ${hourAndMinHandAngle}°.`;
  return myOutputValue;
};
