// 61. Create an object representing a person with properties such as `name`, `age`, and `city`. Print the object.
const obj61 = {
    name: "Samuel Jackson",
    age: "50",
    city: "New York"
}
console.log(obj61);


// 62. Add a new property (e.g., `isStudent`) to an existing object and print the updated object.
obj61["isStudent"] = false
console.log(obj61);


// 63. Access and print the value of the `city` property from an object using bracket notation.
console.log(obj61.city)

// 64. Delete a property (e.g., `age`) from an object and print the modified object.
delete obj61.age
console.log(obj61);

// 65. Write a function that takes an object as input and prints all its keys using `Object.keys()`.
function printKeys(obj) {
    for (let x in obj) {
        console.log(x)
    }
}
printKeys(obj61)

// 66. Create an array of book objects, where each object contains a `title` and an `author`.
const books = [
    {
        title: "Harry Potter",
        author: "J.K Rowling"
    },
    {
        title: "Atomic Habbits",
        author: "James Clear"
    }
]

// 67. Access and print the author of the second book from the array of book objects.
console.log(books[1])

// 68. Write a function that checks whether a specific key exists inside an object. Print "Key exists" or "Key does not exist" accordingly.
function keyCheck(obj, key) {
    for(let x in obj) {
        if(x === key) return true
    }
    return false
}

let obj = {
    1: "a",
    2: "b",
    5: "e"
}
console.log(keyCheck(obj, 3))

// 69. Write a function that returns the total number of keys present in an object.
function keyCount(obj) {
    let count = 0
    for(let x in obj) count++
    return count
}

console.log(keyCount(obj))

// 70. Use `Object.assign()` to merge an empty object with two existing objects/arrays and print the result.
let newObj = {}
Object.assign(newObj, [obj61, obj])
console.log(newObj)