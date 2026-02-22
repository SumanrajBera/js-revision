// 81. Write a function that takes an array and returns a new array containing only the even numbers from the original array.
function filterEven(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) res.push(arr[i])
    }
    return res
}

console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8]))


// 82. Create a function that counts how many times a specific value appears in an array.
function countApp(arr, k) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) count++
    }
    return count
}

console.log(countApp([1, 2, 3, 2, 5, 6, 2, 2], 2))

// 83. Write a function that takes a string as input and prints the reversed string.
function revStr(str) {
    let res = ""
    for (let i = 0; i < str.length; i++) {
        res = str.charAt(i) + res
    }
    return res
}

console.log(revStr("Hello World"))

// 84. Create a function that prints a right-angled triangle pattern of asterisks (`*`) based on a given number.
let height = 5
for (let i = 0; i < height; i++) {
    let res = ""
    for (let j = 0; j <= i; j++) {
        res += "* "
    }
    console.log(res)
}

// 85. Write a function that takes an array of numbers and returns a new array where each number is squared.
function squareElem(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i]
    }
    console.log(arr)
}
squareElem([1, 3, 2, 5, 4])

// 86. Using a loop, calculate and print the sum of all odd numbers between 1 and 50.
function filterSumOdd(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) sum += arr[i]
    }
    return sum
}

console.log(filterSumOdd([1, 2, 3, 4, 5, 6, 7, 8]))

// 87. Create an object representing a person with first and last name, and print the full name by combining both values.
let objPerson = {
    fname: "Samuel",
    lname: "Jackson"
}
console.log(objPerson.fname + " " + objPerson.lname)

// 88. Convert a numeric string to a number using `parseInt()` and add 5 to it. Print the result.
let numStr = "1023"
let convert = parseInt(numStr) + 5
console.log(convert);

// 89. Reverse an array manually (without using `.reverse()`) and print the reversed array.
function revArr(arr) {
    let res = []
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i])
    }
    return res
}

console.log(revArr([1, 2, 3, 4, 5, 6, 7, 8]))


// 90. Write a program that checks whether an array is empty. Print "array is empty" or "array is not empty".
function checkEmpty(arr) {
    if (arr.length === 0) console.log("Empty");
    else console.log("Not Empty");
}
let arr1 = []
let arr2 = [1, 2, 3, 4]
checkEmpty(arr1)
checkEmpty(arr2)

// 91. Get the current date and format it as `DD/MM/YYYY`. Print both the original `Date` object and the formatted date.
let currDate = new Date()
console.log(currDate.toLocaleDateString("en-GB"))

// 92. Using `Math.min()` and the spread operator, find and print the smallest number in an array.
let arrEx = [10, 2, 5, -1, 30]
console.log(Math.min(...arrEx))

// 93. Write a function that returns the first `n` numbers of the Fibonacci sequence.
let n = 10;
function fibonacci(n) {
    let a = 0;
    let b = 1;
    if (n === 1) {
        console.log("0")
        return
    }
    if (n === 2) {
        console.log("0 1")
        return
    }
    n -= 2
    let str = "0 1 "
    for (let i = 0; i < n; i++) {
        let c = a + b;
        str += c + " "
        a = b;
        b = c
    }
    console.log(str)
}
fibonacci(n)

// 94. Write a function that divides two numbers. If the second number is zero, throw and catch an error saying "Cannot divide by zero".
function divide(a, b) {
    if (b === 0) {
        console.log("Cannot divide by zero")
        return
    } else {
        let res = a / b
        console.log("Division result:", res)
    }
}
divide(10, 50)

// 95. Write a function that returns the index of the first vowel in a string. If no vowel exists, return `-1`.
function firstVowel(str) {
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "a") return i
    }
    return -1
}
console.log("Vowel index:", firstVowel("bcd"))

// 96. Write a function that removes duplicate values from an array and returns the unique values.
function remDups(arr) {
    let set = new Set(arr)
    let res = Array.from(set)
    console.log(res)
}
remDups([1, 1, 4, 4, 8])

// 97. Write a function that merges two sorted arrays into a single sorted array.
let arr3 = [1, 2, 4]
let arr4 = [0, 3, 5]
let a = arr3.length;
let b = arr4.length;
let res = new Array(a + b).fill(0)
let i = 0, j = 0, k = 0;
while (i < a && j < b) {
    if (arr3[i] < arr4[j]) res[k++] = arr3[i++]
    else res[k++] = arr4[j++]
}

while (i < a) res[k++] = arr3[i++]
while (j < b) res[k++] = arr4[j++]
console.log(res)


// 98. Create a function that returns the total number of characters in a string.

let strCoutnt = "Helloworlckslf"
function countChar(str) {
    let count = 0
    let i = 0
    while (i < str.length) {
        if (str.charAt(i) !== " ") count++
        i++
    }
    console.log(count)
}
countChar(strCoutnt)

// 99. Access a button with the ID `toggleButton` and add a click event listener that toggles the button’s background color between blue and red.
// const btn = document.querySelector(".toggleButton")
// btn.addEventListener("click", () => {
//     if (btn.style.backgroundColor === "red") {
//         btn.style.backgroundColor = "blue"
//     } else {
//         btn.style.backgroundColor = "red"
//     }
// })
// 100. Write a function that checks whether all numbers in an array are greater than a given value using the `.every()` method.
let arr = [50, 20, 30 ,10]
console.log(arr.every(el => el > 5))