/**
 * Performs a mathematical operation on two numbers based on the given operator.
 *
 *  The first number.
 *  The second number.
 * The operator to use (+, -, *, /).
 *  The result of the operation.
 */
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error("Cannot divide by zero");
            }
            return num1 / num2;
        default:
            throw new Error(`Invalid operator: ${operator}`);
    }
}

// Example usage:
console.log(calculate(10, 5, '+'));  // Output: 15
console.log(calculate(10, 5, '-'));  // Output: 5
console.log(calculate(10, 5, '*'));  // Output: 50
console.log(calculat(10, 5, '/'));  // Output: 2
