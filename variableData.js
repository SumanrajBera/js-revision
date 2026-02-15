// Create a variable using let and print its value.
let num = 10;
console.log(num);

// Declare a constant named PI with the value 3.14 and print it.
const PI = 3.14
console.log(PI);

// Create a variable, print its value, update the value, and print the updated value again.
let val = 10;
console.log("Before updation:",val)
val++;
console.log("After updation:",val)

// Print the output of typeof null and observe what type JavaScript reports.
console.log(typeof null)

// Create a variable containing a numeric value as a string (e.g., "25") and print its type.
let numVal = "25"
console.log(typeof numVal);

// Create a boolean variable and print its type using typeof.
let bool = true;
console.log(bool);

// Create three variables: a string, a number, and a boolean. Print all of them together in a formatted output.
let str = "Hello";
let numVal2 = 10;
let boolVal = false;
console.log(`
    string: ${str}
    numeric: ${numVal2}
    boolean: ${boolVal}
    `);

// Declare a variable without assigning a value and print its type using typeof.
let value;
console.log(typeof value)

// Create a variable with the value undefined and print its type.
let undef = undefined;
console.log(typeof undef)

// Create an array using const, print it, attempt to reassign the entire array (and handle the error), then modify the existing array by adding a new element and print the updated array.
const arr = [10,20,30]
console.log(arr);
try {
    arr = []
}catch(err) {
    console.log("Constant Array can't be reassigned")
}
arr[1] = 50
console.log("After update:",arr);
