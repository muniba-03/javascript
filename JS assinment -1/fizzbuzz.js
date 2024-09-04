/**
 * Prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number,
 * and for multiples of five, print "Buzz." For numbers that are multiples of both three and five,
 * print "FizzBuzz."
 *
 * @param {number} n The upper limit of the range.
 */
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Example usage:
fizzBuzz(100);