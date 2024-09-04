/**
 * Compares two numbers and returns a string indicating whether the first number is greater than,
 * less than, or equal to the second number.
 *
 * The first number.
 *  The second number.
 * A string indicating the comparison result.
 */
function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return `${num1} is greater than ${num2}`;
    } else if (num1 < num2) {
        return `${num1} is less than ${num2}`;
    } else {
        return `${num1} is equal to ${num2}`;
    }
}

// Example usage:
console.log(compareNumbers(10, 5));  // Output: "10 is greater than 5"
console.log(compareNumbers(5, 10));  // Output: "5 is less than 10"
console.log(compareNumbers(10, 10)); // Output: "10 is equal to 10"