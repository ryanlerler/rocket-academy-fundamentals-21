const calcNoOfOranges = function (numberOfGuest) {
  let numberOfOrangesPerGlass = 4;
  let numberOfOrangesForAllGuests = numberOfGuest * numberOfOrangesPerGlass;
  return numberOfOrangesForAllGuests;
};

const convertVolOfOrangeJuiceFromMltoLitre = function () {
  let volumeOfOrangeJuicePerGlassInMl = 90;
  let amountOfMlPerLitre = 1000;
  let volumeOfOrangeJuicePerGlassInLitres =
    volumeOfOrangeJuicePerGlassInMl / amountOfMlPerLitre;
  return volumeOfOrangeJuicePerGlassInLitres;
};

const calcOrangeJuiceInLitres = function (numberOfGuest) {
  let litrePerGlass = convertVolOfOrangeJuiceFromMltoLitre();
  let totalVolumeOfOrangeJuiceInLitres = numberOfGuest * litrePerGlass;
  return totalVolumeOfOrangeJuiceInLitres;
};

const main = function (input) {
  let orangesRequired = calcNoOfOranges(input);
  let orangeJuiceRequired = calcOrangeJuiceInLitres(input).toFixed(2);
  let myOutputValue = `${orangesRequired} oranges are needed to get ${orangeJuiceRequired} litres of orange juice.`;
  return myOutputValue;
};

// It takes 4 oranges to make a 90ml glass of orange juice. When planning your wedding, you need to know how many oranges to buy so all your guests have 1 glass of juice. The user will enter a number of guests and the app will say how many oranges are needed and how many litres of orange juice you would get. (Ref Solution)
