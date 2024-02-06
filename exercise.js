// Soal No. 1
// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

// function statisticNumber(arr) {
//     let max = arr[0]
//     let min = arr[0]
//     let total = 0
//     let average = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//         if (min > arr[i]) {
//             min = arr[i]
//         }
//         total = total + arr[i];
//     }
//     average = total / arr.length
//     return {max : max, min : min, average : average}
// } 
// console.log(statisticNumber([12, 5, 23, 18, 4, 45, 32]));
// =====================================================================================================================================

// =====================================================================================================================================
// Soal No. 2 
// Write a function that takes an array of words and returns a string by concatenating the words in the array, 
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

// function arrayToString(arr) {
//     let result = ""
//     for (let i = 0; i < arr.length; i++) {
//         if (i === arr.length - 1) {
//             result += "and " + arr[i]
//         } else {
//             result += arr[i] + ", "
//         }
//     }
//     return result;
// }
// console.log(arrayToString(["apple", "banana", "cherry", "date"]))
// =====================================================================================================================================

// =====================================================================================================================================
// Soal No. 3
// Write a function to split a string and convert it into an array of words
// a. Example : “Hello World” → [“Hello”, “World”]

// function strArray(str) {
//     let result = []
//     let temp = ""
//     for (let i = 0; i < str.length; i++) {
//         temp += str[i]
//         if (str[i] === " " || i === str.length - 1) {
//             result.push(temp)
//             temp = ""
//         }
//     }
//     return result
// }
// console.log(strArray("Hello World"));
// =====================================================================================================================================

// =====================================================================================================================================
// Soal No. 4 
// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are 
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

// function sumArrays(arr1, arr2) {
//     if (arr1.length != arr2.length) {
//         return "Invalid Array"
//     }
//     let result = []
//     for (let i = 0; i < arr1.length; i++) {
//         let temp = arr1[i] + arr2[i]
//         result.push(temp)
//     }
//     return result
// }
// console.log(sumArrays([1, 2, 3], [3, 2, 1]));
// =====================================================================================================================================

// =====================================================================================================================================
// Soal Node. 5 
// Write a function that adds an element to the end of an array. However, the element should only be added if it is 
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4] 
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

// function newElement(arr, newElement) {
//     flag = false
//     for (let i = 0; i < arr.length; i++) {
//         if (newElement == arr[i]) {
//             flag = true
//             break
//         }
//     }
//     if (flag == false) {
//         arr.push(newElement)
//     }
//     return arr
// }
// console.log(newElement([1, 2, 3, 4], 6));
// =====================================================================================================================================

// =====================================================================================================================================
// Soal No. 6
// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]

// function evenNumArray(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(evenNumArray([1, 2, 3, 4, 5, 6]));
// =====================================================================================================================================

// =====================================================================================================================================
// Soal No. 7
// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The 
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the 
// array can only contain 5 elements). 
// a. Example : 
//  maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8 
//  The function will return [5, 10, 24, 3, 6]

// function maxSizeArray(maxSize, ...arr) {
//     let result = []
//     for (let i = 0; i < maxSize; i++) {
//         result.push(arr[i])
//     }
//     return result
// }
// console.log(maxSizeArray(3, 5, 10, 24, 3, 6, 7, 8));
// =====================================================================================================================================

// =====================================================================================================================================
// Soal No. 8
// Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

// function comArrays(arr1, arr2) {
//   const mergedArray = [];
//   for (let i = 0; i < arr1.length; i++) {
//     mergedArray.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     mergedArray.push(arr2[i]);
//   }
//   return mergedArray;
// }

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// console.log(comArrays(arr1, arr2));
// =====================================================================================================================================

// =====================================================================================================================================
// Soal No. 9
// Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

// =====================================================================================================================================

