const main = function (fahrenheit) {
  let celcius = ((fahrenheit - 32) * 5) / 9;
  let myOutputValue = `${fahrenheit}°F is equivalent to ${celcius}°C.`;
  return myOutputValue;
};

// var main = function (input) {
//   var fahrenheitToCelsius = ((input - 32) * 5) / 9;
//   var myOutputValue = `${input}°F is equivalent to ${fahrenheitToCelsius} °C.`;
//   return myOutputValue;
// };

// // Fahrenheit to Celsius
// // The user enters a temperature in Fahrenheit. The program should output the conversion to Celsius in the output box.
// // Format the output nicely.
