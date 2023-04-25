const calcTrain2Speed = function (delayedTimeInMinutes) {
  let speed = 200;
  let time = 2;
  let distance = speed * time;
  let delayedTimeInHours = delayedTimeInMinutes / 60;
  let train2Time = time - delayedTimeInHours;
  let train2Speed = distance / train2Time;
  return train2Speed.toFixed(2);
};

const main = function (input) {
  let speedRequired = calcTrain2Speed(input);
  let myOutputValue = `Train 2 needs to travel at ${speedRequired} km/h to arrive at Tokyo at the same time as Train 1, if there are ${input} minutes delayed.`;
  return myOutputValue;
};
