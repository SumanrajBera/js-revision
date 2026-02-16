// 41. Write a function that takes a number as input and returns whether it is "even" or "odd".
function evenOdd(inp) {
    if (isNaN(Number(inp))) console.log("The input is not a number")

    if (inp % 2 === 0) console.log("Even");
    else console.log("Odd");
}
evenOdd(10)

// 42. Create a function that calculates and returns the area of a circle given its radius.
function areaOfCircle(inp) {
    if (isNaN(Number(inp))) console.log("The input is not a number")

    let area = Math.PI * inp * inp
    console.log("Area of circle:", area)
}
areaOfCircle(10)

// 43. Write a function that takes an array of numbers and returns the sum of all elements in the array.
function sumOfElem(...arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}
sumOfElem(1, 2, 3, 4)

// 44. Write a function that checks whether a given string starts with a specified character. Return `true` or `false`.
function checkStr(str, char) {
    if (str.charAt(0) === char) console.log(true);
    else console.log(false);
}

checkStr("Hello", "H")

// 45. Create a function that takes two numbers and returns the larger of the two.
function maxNum(a, b) {
    if (a > b) console.log(a + "is bigger")
    else console.log(b + " is bigger")
}
maxNum(10, 20)

// 46. Write a recursive function that calculates and returns the factorial of a given number.
function factorial(num) {
    if (num === 0 || num === 1) return 1
    return num * factorial(num - 1)
}

console.log("Factorial of 5:", factorial(5))

// 47. Write a function that reverses a string and returns the reversed version.
function reverseStr(str) {
    let rev = ""
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str.charAt(i)
    }
    console.log(rev);
}
reverseStr("Hello World!")

// 48. Create a function that accepts an array of numbers and returns the largest number in the array.
function largestNum(...arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i]
    }
    console.log(max)
}
largestNum(10, 50, 20, 30, 80)

// 49. Write a function that converts a string into kebab-case (all lowercase words separated by hyphens).
function kebabCase(str) {
    let arr = str.split(" ")
    let newStr = ""
    for(let i = 0; i < arr.length; i++) {
        newStr += arr[i]
        if(i !== (arr.length - 1)) newStr += "-"
    }
    console.log(newStr)
}

kebabCase("This is test for kebab case")

// 50. Write a function named `helloWorld` that prints "Hello World" to the console.
function helloWorld() {
    console.log("Hello World")
}
helloWorld()