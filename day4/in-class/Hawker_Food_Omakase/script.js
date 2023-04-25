const getRandomInteger = function (max) {
  let randomInteger = Math.floor(Math.random() * max) + 1;
  return randomInteger;
};

const getRiceDish = function () {
  let dishCount = 4;
  let randomIntegerRice = getRandomInteger(dishCount);
  if (randomIntegerRice === 1) {
    return "chicken rice";
  }
  if (randomIntegerRice === 2) {
    return "nasi lemak";
  }
  if (randomIntegerRice === 3) {
    return "bak kut teh";
  }
  if (randomIntegerRice === 4) {
    return "roti prata";
  }
};

const getNoodleDish = function () {
  let dishCount = 4;
  let randomIntegerNoodle = getRandomInteger(dishCount);
  if (randomIntegerNoodle === 1) {
    return "hokkien mee";
  }
  if (randomIntegerNoodle === 2) {
    return "laksa";
  }
  if (randomIntegerNoodle === 3) {
    return "beef hor fun";
  }
  if (randomIntegerNoodle === 4) {
    return "roti prata";
  }
};

const updateDescription = function (dish) {
  if (dish === "chicken rice") {
    return `Chicken Rice, fatty chicken with oily rice.`;
  }
  if (dish === "nasi lemak") {
    return `Nasi Lemak, a fragrant coconut rice. Accompanied by Korean-style fried chicken wing, organic ikan bilis and free-range egg.`;
  }
  if (dish === "bak kut teh") {
    return `Bak Kut Teh, a simmered pork rib broth with fatty pork rib. Accompanied by braised peanuts, you tiao crullers and freshly-blanched chai sim.`;
  }
  if (dish === "hokkien mee") {
    return `Hokkien Mee, wok-fried tender prawn noodles.`;
  }
  if (dish === "laksa") {
    return `Laksa, tender prawn noodles with coconut curry soup.`;
  }
  if (dish === "beef hor fun") {
    return `Beef Hor Fun, wok-friend hor fun noodles with juice beef slices.`;
  }
  if (dish === "roti prata") {
    return `Roti Prata, crispy on the outside, soft on the inside, served with fish curry and hits the spot every time.`;
  }
};

const main = function (input) {
  let dish1;
  let dish2;

  if (input === "rice") {
    dish1 = getRiceDish();
    dish2 = getRiceDish();
    while (dish2 === dish1) {
      dish2 = getRiceDish();
    }
  } else if (input === "noodle") {
    dish1 = getNoodleDish();
    dish2 = getNoodleDish();
    while (dish2 === dish1) {
      dish2 = getNoodleDish();
    }
  }

  let dish1Description = updateDescription(dish1);
  let dish2Description = updateDescription(dish2);

  let myOutputValue = `Uncle has prepared a selection of dishes for you! <br>
To begin, ${dish1Description} <br>
This will be followed ${dish2Description} <br>`;

  if (
    dish1 === "nasi lemak" ||
    dish2 === "nasi lemak" ||
    dish1 === "hokkien mee" ||
    dish2 === "hokkien mee"
  ) {
    myOutputValue += `Chili sambal included!!!`;
  } else {
    myOutputValue += `No chili sambal!!!`;
  }
  return myOutputValue;
};

// let getRandomIntegerForRice = function () {
//   let randomIntegerForRice = Math.floor(Math.random() * 4) + 1;
//   return randomIntegerForRice;
// };

// let getRandomIntegerForNoodle = function () {
//   let randomIntegerForNoodle = Math.floor(Math.random() * 4) + 1;
//   return randomIntegerForNoodle;
// };

// let getRiceDish = function () {
//   let riceDish;
//   let randomIntegerForRice = getRandomIntegerForRice();
//   if (randomIntegerForRice == 1) {
//     riceDish = "Chicken Rice, fatty chicken with oily rice.";
//   } else if (randomIntegerForRice == 2) {
//     riceDish =
//       "Nasi Lemak, a fragrant coconut rice. Accompanied by Korean-style fried chicken wing, organic ikan bilis and free-range egg.";
//   } else if (randomIntegerForRice == 3) {
//     riceDish =
//       "Bak Kut Teh, a simmered pork rib broth with fatty pork rib. Accompanied by braised peanuts, you tiao crullers and freshly-blanched chai sim.";
//   } else {
//     riceDish =
//       "Roti Prata, crispy on the outside, soft on the inside, served with fish curry and hits the spot every time.";
//   }
//   return riceDish;
// };

// let getNoodleDish = function () {
//   let noodleDish;
//   let randomIntegerForNoodle = getRandomIntegerForNoodle();
//   if (randomIntegerForNoodle == 1) {
//     noodleDish = "Hokkien Mee, wok-fried tender prawn noodles.";
//   } else if (randomIntegerForNoodle == 2) {
//     noodleDish = "Laksa, tender prawn noodles with coconut curry soup.";
//   } else if (randomIntegerForNoodle == 3) {
//     noodleDish =
//       "Beef Hor Fun, wok-friend hor fun noodles with juice beef slices";
//   } else {
//     noodleDish =
//       "Roti Prata, crispy on the outside, soft on the inside, served with fish curry and hits the spot every time.";
//   }
//   return noodleDish;
// };

// let includeSambal = function (firstDish, secondDish) {
//   if (
//     firstDish ==
//       "Nasi Lemak, a fragrant coconut rice. Accompanied by Korean-style fried chicken wing, organic ikan bilis and free-range egg." ||
//     firstDish == "Hokkien Mee, wok-fried tender prawn noodles." ||
//     secondDish ==
//       "Nasi Lemak, a fragrant coconut rice. Accompanied by Korean-style fried chicken wing, organic ikan bilis and free-range egg." ||
//     secondDish == "Hokkien Mee, wok-fried tender prawn noodles."
//   )
//     return "Sambal will be included.";
//   else {
//     return "Sambal will not be included.";
//   }
// };

// let main = function (input) {
//   let firstDish;
//   let secondDish;
//   if (input == "rice") {
//     let firstDish = getRiceDish();
//     let secondDish = getRiceDish();
//     while (secondDish == firstDish) {
//       secondDish = getRiceDish();
//     }
//   } else if (input == "noodle") {
//     let firstDish = getNoodleDish();
//     let secondDish = getNoodleDish();
//     while (secondDish == firstDish) {
//       secondDish = getNoodleDish();
//     }
//   }
//   let sambalMessage = includeSambal(firstDish, secondDish);
//   let myOutputValue;
//   myOutputValue = `Uncle has prepared a selection of dishes for you!<br>
//   To begin, ${firstDish}<br>
//   This will be followed by ${secondDish}<br>
//   ${sambalMessage}
//   `;
//   return myOutputValue;
// };
