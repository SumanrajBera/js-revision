// Write a program that prints the numbers from 1 to 50 using a for loop.
for (let i = 0; i < 50; i++) {
    console.log(i + 1)
}

// Using a while loop, calculate and print the sum of numbers from 1 to 10.
let i = 1;
let sum = 0;
while (i <= 10) {
    sum += i
    i++;
}
console.log("Sum from 1 to 10:", sum);


// Iterate through each character of the string "JavaScript" using a for...of loop and print each character.
let str = "JavaScript"
for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}

// Using a for loop, print all odd numbers from 1 to 20. Use continue to skip even numbers.
console.log("Odd numbers between 1 to 20")
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) continue
    console.log(i)
}

// Use a do...while loop to print the numbers from 5 down to 1.
console.log("Countdown from 5")
let start = 5
do {
    console.log(start)
    start--;
} while (start >= 1)

// Write a program to calculate the factorial of 5 using a loop and print the result.
let fact = 1;
for (let i = 5; i >= 2; i--) {
    fact *= i
}
console.log("Factorial of 5:", fact)

// Use nested for loops to print a 3×3 grid pattern where each row contains the numbers 1 to 3.
console.log("3 x 3 grid of 1 to 3")
for (let i = 1; i < 4; i++) {
    let str = ""
    for (let j = 1; j < 4; j++) {
        str += j + " "
    }
    console.log(str)
}

// Reverse an array manually (without using the reverse() method) and print the reversed array.
let arr2 = [10, 20, 30, 40, 50]
let ptr1 = 0, ptr2 = arr2.length - 1;
console.log("Before reverse:",arr2)
while (ptr1 < ptr2) {
    [arr2[ptr1], arr2[ptr2]] = [arr2[ptr2], arr2[ptr1]]
    ptr1++;
    ptr2--;
}
console.log("Reversed:",arr2)

// Using a while loop, print all numbers between 1 and 100 that are divisible by 5.
console.log("Numbers between 1 to 100 divisible by 5:")
for(let i = 5; i <= 100; i+=5) {
    console.log(i)
}

// Create an object with keys like name and age. Use a for...in loop to print all the keys of the object.
let obj = {
    name: "Sam",
    age: "24"
}
console.log("Object keys:")
for(let x in obj) {
    console.log(x)
}