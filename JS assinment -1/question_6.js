const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num1, num2, num3;

rl.question('Enter the first number: ', function(answer) {
  num1 = parseFloat(answer);
  rl.question('Enter the second number: ', function(answer) {
    num2 = parseFloat(answer);
    const sum = num1 + num2;
    console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + sum);
    rl.question('Enter another number: ', function(answer) {
      num3 = parseFloat(answer);
      const product = sum * num3;
      const finalResult = product / 2;
      console.log('The final result is ' + finalResult);
      rl.close();
    });
  });
});