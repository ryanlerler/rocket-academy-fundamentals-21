/*
 * Solution for Rings (this was hard!)
 */
// eslint-disable-next-line no-unused-lets
const main = function (input) {
  let myOutputValue = "";
  // sideLength represents the length of each side of the square
  let sideLength = Number(input);
  // Initialise 2D array to represent grid to print
  let grid = [];
  for (let i = 0; i < sideLength; i += 1) {
    // Push sideLength arrays of length sideLength into grid
    grid.push(Array(sideLength));
  }

  // Draw halfSideLengthIndex concentric circles in the grid, starting from the outside
  let halfSideLengthIndex = Math.floor(sideLength / 2);
  for (let i = 0; i < halfSideLengthIndex; i += 1) {
    let emoji = i % 2 == 0 ? "✊" : "👍";
    // Fill top and bottom rows of square
    for (let j = i; j < sideLength - i; j += 1) {
      grid[i][j] = emoji;
      grid[sideLength - 1 - i][j] = emoji;
    }
    // Fill sides of middle rows of square
    for (let j = i + 1; j < sideLength - 1 - i; j += 1) {
      grid[j][i] = emoji;
      grid[j][sideLength - 1 - i] = emoji;
    }
  }

  // Add centre element if side length is odd
  if (sideLength % 2 == 1) {
    if (sideLength % 4 == 1) {
      grid[halfSideLengthIndex][halfSideLengthIndex] = "✊";
    } else if (sideLength % 4 == 3) {
      grid[halfSideLengthIndex][halfSideLengthIndex] = "👍";
    }
  }

  // Translate what's in the grid to myOutputValue
  for (let i = 0; i < sideLength; i += 1) {
    for (let j = 0; j < sideLength; j += 1) {
      myOutputValue += grid[i][j];
    }
    // Insert a line break to start a new row
    myOutputValue += "<br>";
  }

  return myOutputValue;
};
