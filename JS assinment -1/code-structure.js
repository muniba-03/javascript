// Poorly structured code
var result = 0;
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    result += i;
  }
}
console.log(result);

var names = ["John", "Jane", "Bob"];
for (var j = 0; j < names.length; j++) {
  if (names[j] === "Jane") {
    console.log("Found Jane!");
  }
}

function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(4, 5));
// This code has several issues:

// Variables and functions are declared randomly, making it hard to follow the code's logic.
// There's no separation of concerns; multiple unrelated tasks are mixed together.
// The code is dense and lacks whitespace, making it difficult to read.
// There are no comments or explanations, making it hard for others to understand the code's purpose.
// Now, let's refactor this code to improve its readability and efficiency:
// Refactored code

// Calculate the sum of even numbers
function calculateEvenSum(max) {
    let sum = 0;
    for (let i = 0; i <= max; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  console.log(`The sum of even numbers up to 10 is: ${calculateEvenSum(10)}`);
  
  // Find a specific name in an array
  function findName(names, targetName) {
    for (let i = 0; i < names.length; i++) {
      if (names[i] === targetName) {
        return true;
      }
    }
    return false;
  }
  const names = ["John", "Jane", "Bob"];
  if (findName(names, "Jane")) {
    console.log("Found Jane!");
  }
  
  // Calculate the area of a rectangle
  function calculateArea(width, height) {
    return width * height;
  }
  console.log(`The area of a rectangle with width 4 and height 5 is: ${calculateArea(4, 5)}`);