// 10.3 Exercise
let containerDiv = document.querySelector("#container");
containerDiv.style.backgroundColor = "lightcoral";

// 10.4 Exercise
let input = document.querySelector("#starter-ex");
let newButton = document.querySelector("#starter-button");

const myButtonClicked = function () {
  let typedValue = input.value;
  let newHTwo = document.createElement("h2");
  newHTwo.innerText = typedValue;
  document.body.appendChild(newHTwo);
  // Clear the value typed in the input box after each function call (button clicked)
  input.value = "";
};

newButton.addEventListener("click", myButtonClicked);

let submitButton = document.querySelector("#submit-button");

// Must initialize the function first before calling it by addEventListener due to the use of const to define the function

const main = function (input) {
  containerDiv.style.backgroundColor = "red";
  let myOutputValue = "hello world";
  return myOutputValue;
};

submitButton.addEventListener("click", main);
