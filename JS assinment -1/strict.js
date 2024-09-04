// *
// The "use strict" directive in JavaScript is used to enable strict mode, which helps to catch common errors and prevent certain actions from being taken. It was introduced in ECMAScript 5 and is supported by most modern browsers.

// When "use strict" is used, JavaScript code is executed in a stricter mode, which means that:

// It prevents accidental global variables: In non-strict mode, assigning a value to an undeclared variable creates a global variable. In strict mode, this throws a ReferenceError.
// It eliminates this coercion: In non-strict mode, the this keyword can be coerced to the global object. In strict mode, this remains undefined.
// It prohibits deleting undeletable properties: In non-strict mode, attempting to delete a non-configurable property doesn't throw an error. In strict mode, it throws a TypeError.
// It throws errors for mistakes in syntax: In non-strict mode, some syntax errors are ignored. In strict mode, they throw a SyntaxError.
// Here is a short program to demonstrate how "use strict" can prevent potential errors:
// */
// Non-strict mode
// creates a global variable
x = 10; 
console.log(x); // outputs 10

// Strict mode
"use strict";
try {
  y = 20; // throws a ReferenceError
  console.log(y);
} catch (e) {
  console.log(e); // outputs ReferenceError: y is not defined
}

// Non-strict mode
this.name = "John";
function func() {
  console.log(this.name); // outputs John
}
func();

// Strict mode
"use strict";
this.name = "Jane";
function func() {
  console.log(this.name); // outputs undefined
}
func();

