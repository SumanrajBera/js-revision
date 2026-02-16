// 31. Create an array of movie names and print them in a single line separated by ` - ` using `join()`.
let movies = ["3idiots", "lalsinghchadda", "dhoom3"]
console.log(movies.join("-"));

// 32. Create an array of numbers and print the value at index 1.
const numbers = [1, 2, 3, 4, 5]
console.log(numbers[1])

// 33. Add two elements to the beginning of an array using `unshift()` and print the updated array.
const arr = ["Hello", "welcome"]
arr.unshift("Mellow")
arr.unshift("Bye")
console.log(arr);


// 34. Create an array of song names, remove the last element using `pop()`, and print the remaining elements.
const songs = ["shaders", "starlight", "levitating"]
songs.pop()
console.log(songs)

// 35. Given an array, extract the first three elements using `slice()` and print them.
let disect = [1, 2, 3, 4]
console.log(disect.slice(0, 3));

// 36. Create an array of numbers and find the index of the number `5` using `indexOf()`.
const numArr = [1, 2, 3, 4, 5]
console.log(numArr.indexOf(5))

// 37. Create an array of values and use `includes()` to check whether the value `3` exists in the array. Print the result.
const values = [1, 2, 3, 4, 5]
console.log(numArr.includes(3))

// 38. Concatenate two arrays using `concat()` and print the resulting combined array.
console.log(values.concat(numArr))

// 39. Sort an array of numbers in ascending order using a custom comparator function and print the sorted array.
const unsorted = [1, 5, 3, 2, 4]
console.log(unsorted.sort((a, b) => a - b))

// 40. Create a copy of an array using the spread operator (`...`). Print the copied array and also print whether the copied array and original array reference the same memory.
const ogArr = ["1", "5", "9", "3"]
const copyArr = [...ogArr]
console.log("As we make use of spread operator this is not reference anymore:",copyArr)