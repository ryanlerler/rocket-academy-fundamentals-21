// Address book

let names = [];
const main = function (input) {
  let duplicate = false;
  let counter = 0;
  while (counter < names.length) {
    let currentName = names[counter];
    if (currentName == input) {
      duplicate = true;
    }
    counter += 1;
  }
  if (!duplicate) {
    names.push(input);
  }

  let myOutputValue = names;
  return myOutputValue;
};

// if the 1st input is empty, names.length = 0 so counter is NOT < names.length and the while loop will not run. Boolean will remain false and so, push an empty element to array

// even if the 1st input is, for eg. ABC, names.length = 0 as the array was empty at first and so the while loop will not run. Boolean will remain false and so, push 'ABC' to array.

// that's why the use of boolean and pushing the input to array AFTER the loop are crucial so that the array length will increment and the while loop will run in the following clicks.

// in the next click, counter (0 )is < names.length (1) and the while loop will run.
// counter = 0
// while (counter < names.length) -> true {
// assign names[0] which is ABC to let currentName
// since currentName is ABC, any input other than ABC will result in currentName (ABC) != input, boolean is false.
// counter +=1 and while loop exits as counter (1) !< names.length (1) }
// since boolean is false, push the new input to array
