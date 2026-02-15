// Create two variables: one storing your full name and another storing your favorite hobby. Print a sentence in the format: "My name is and ".

const fName = "Sumanraj Bera"
let hobby = "Reading"
console.log(`My name is ${fName} and my hobby is ${hobby}`)

// Perform the arithmetic calculation 45 * 2 - 10 and print the final result.
console.log("45 * 2 - 10 =",45 * 2 - 10)

// Write a program that retrieves and prints the current year using JavaScript’s Date object.
let date = new Date()
console.log("Current Year:",date.getFullYear())

// Store your first name and last name in two different variables, then print your full name in a single output.
const fname = "Sumanraj"
const lname = "Bera"
console.log(`My full name is ${fname} ${lname}`)

// Create a variable with an initial value. Print its value, update the value, and print the updated value again.
let val = 10;
console.log("Before updation:",val)
val++;
console.log("After updation:",val)

// Print a custom error message using console.error()
console.error("This is an error message")

// Store a number in a variable and print the square of that number.
let num = 10;
console.log("Square of 10 is", Math.pow(num, 2))

// Create a boolean variable and print its value.
let bool = true;
console.log(bool);

// Store your age in a variable and print whether your age is greater than 18.
let age = 10;
console.log(age > 18? "Age greater than 18": "Age not greater than 18")

// Divide 100 by 0 and print the result. Observe what JavaScript returns.
console.log(100/0) // Infinity