//---------------------- Higher order function Example --------------------------------

//--------------------------------- 1- forEach() ------------------------------------

// -Used to loop through every element of an array. It does not return a new array.

array.forEach(function(element, index) {
    // code
});
//================================================================================================

// -------------------------- 2- map() --------------------------------------------------------

// -Creates a new array by transforming each element

let numbers = [1, 2, 3, 4];

let square = numbers.map(function(num) {
    return num * num;
});

console.log(square);
//=========================================================================================

//----------------------------- 3-filter() ------------------------------------------

//Returns a new array containing only elements that satisfy a condition.

let numbers = [10, 15, 20, 25, 30];

let even = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(even);

//=================================================================================================

//--------------------------- 4- reduce () ------------------------------------------------------
//educes the array to a single value

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);

console.log(sum);
//==========================================================================================================

//--------------------------------- 5 - find() ----------------------------------------------------

//Returns the first element that satisfies a condition.

let numbers = [5, 10, 15, 20];

let result = numbers.find(function(num) {
    return num > 12;
});

console.log(result);
//===============================================================================================

//--------------------------------- 6 - some()--------------------------------------
// rturns true if at least one element satisfies the condition

let numbers = [3, 5, 8, 9];

let result = numbers.some(function(num) {
    return num % 2 === 0;
});

console.log(result);

//==============================================================================================

//--------------------------------- 7 -every() -----------------------------------------------------------

//Returns true if all elements satisfy the condition

let numbers = [2, 4, 6, 8];

let result = numbers.every(function(num) {
    return num % 2 === 0;
});

console.log(result);

//=========================================================================================================

//-------------------------------- 8-include() -------------------------------------------

// -Checks if a value exists in the array

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Banana"));
console.log(fruits.includes("Orange"));

//===================================================================================================

//------------------------------- 9 - sort ------------------------------------------------------

// Sorts array elements.

let numbers = [40, 10, 100, 20];

numbers.sort((a, b) => a - b);

console.log(numbers);
//====================================================================================================

//------------------------------ 10 -flatmap() --------------------------------------------------------

//Maps each element and flattens the result by one level.

let numbers = [1, 2, 3];

let result = numbers.flatMap(function(num) {
    return [num, num * 2];
});

console.log(result);
//======================================================================================================