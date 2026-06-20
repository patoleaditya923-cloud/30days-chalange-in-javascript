// ------------- 1-Adding Two Numbers----------------

//const a = 5
//const b = 5


//console.log("Addition =", a + b);


// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));

// let sum = num1 + num2;

// console.log("Sum =", sum);
//                                ---------------------------------------------------------------------------

//1.take 2 input from user in variable a or b
//2.take sum variable to stored addtion of two numbers
//-----------------------------------------------------------------------------------------------------------------------------------



//----------------------------------------------  2-Reverse string--------------------------------------------------------------------
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("Aditya"));
//                                   -------------------------------------------------------------------

//1.split('') converts the string into an array.
//2.reverse() reverses the array.
//3.join('') converts the array back into a string.

//--------------------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------- 3-Palindrome string----------------------------------------------------------
// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }

// console.log(isPalindrome("sagar"));
 //                           -----------------------------------------------------------------

//1. A palindrome reads the same forward and backward.
//2. -its gives answer in boolean datatype like true or false.
//3. - its used function like reverse(),join(),split().
//------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------- 4-largest number in array------------------------------------------------

// const numbers = [10, 50, 20, 80, 30];

// const largest = Math.max(...numbers);

// console.log(largest);
//                                  -----------------------------------------------------------------

//1.The spread operator (...) passes array elements individually to Math.max().
//2. for the find big number from whole numbers.
//3.using a math.max function
//---------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------     5-Remove duplicates from arrayys ------------------------------------------
// const arr = [1, 2, 2, 3, 4, 4, 5];

// const unique = [...new Set(arr)];

// console.log(unique);
//                                       --------------------------------------------------------------------

//1.Set stores only unique values
//2.it crate a new set in that only unique value not repeat or duplicate
//3.using set function

//-----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------  6-Sum of the array -------------------------------------------------------------
// const arr = [10, 20, 30, 40];

// const sum = arr.reduce((total, num) => total + num, 0);

// console.log(sum);

//                                      ---------------------------------------------------------------------

// 1.reduce() combines all values into a single result.
//2.add total number in array in as rsult.

//--------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------- 7-Even odd numbers-------------------------------------------------------
// function checkNumber(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }

// console.log(checkNumber(8));

//                                        --------------------------------------------------------------------------

//1.in this operation used modulus operation .
//2.To check number divisible by 2 or not.

//-------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------   8-Second largest number ------------------------------------------
// const arr = [10, 50, 80, 40, 70];

// arr.sort((a, b) => b - a);

// console.log(arr[1]);

//                                      ---------------------------------------------------------------------------

//1.sort number in descending order and pick by picked the second element
//2.used sort method and return value
// -------------------------------------------------------------------------------------------------------------------------------------