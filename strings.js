// 71. Create a string and print its length using the `.length` property.
let str = "Hello World";
console.log(str.length)

// 72. Print the last four characters of a string using the `.slice()` method with a negative index.
console.log(str.slice(-4))

// 73. Convert a string to lowercase using `.toLowerCase()` and print the result.
console.log(str.toLowerCase())

// 74. Split a string into an array using a space `" "` as the delimiter and print the result.
console.log(str.split(" "))

// 75. Find and print the index of a specific character (e.g., `"A"`) inside a string using `.indexOf()`.
console.log(str.indexOf("A"))

// 76. Replace a word inside a string with another word using `.replace()` and print the updated string.
console.log(str.replace("World", "word"))

// 77. Repeat a string three times using `.repeat()` and print the result.
console.log(str.repeat(2))

// 78. Write a function that checks whether a given word exists inside a string using `.includes()`.
console.log(str.includes("hello"))

// 79. Remove all spaces from a string by splitting and rejoining it, then print the result.
console.log(str.split(" ").join(""))

// 80. Write a function that counts and returns the number of vowels in a given string.
function countVowels(str) {
    let count = 0
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "a") count++
    }
    console.log(count)
}
countVowels(str)