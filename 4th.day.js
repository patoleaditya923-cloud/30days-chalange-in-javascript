// ---------------------------------------- 1 function using example-----------------------------
// - its simple function to call the function
// - its known as calling function

function greet() {
    console.log("Hello, Welcome!");
}

greet();
//------------------------------------------------------------------------------------------------

//----------------------- 2 function to returning value--------------------------------------
// - its function create for return the output of the value
// - its its have to need assing variable
function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log(result);

//--------------------------------------------------------------------------------------

//------------------------- 3 larest two number ---------------------------------------
// - find the largest number from two element
// - first there are asssing two variable to value


function largest(a, b) {
    return a > b ? a : b;
}

console.log(largest(15, 10));

//--------------------------------------------------------------------------------------------

//----------------------------- 4 factorial function ---------------------------------------
// - factorial its conect to the factor of number 
// -  

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++)
        fact *= i;
    return fact;
}

console.log(factorial(5));
//-----------------------------------------------------------------------------------------------------

//------------------------------- 5 reverse sting funnction ----------------------------------------------
// - its reverse the string 
// - ex.. hello -> olleh

function reverse(str) {
    return str.split("").reverse().join("");
}

console.log(reverse("JavaScript"));
//--------------------------------------------------------------------------------------------

//------------------------------- 6 count character function -----------------------------------------
// this function simply count the character
// count every character in word

function count(str) {
    return str.length;
}

console.log(count("Hello"));
//---------------------------------------------------------------------------------------

//---------------------------------- 7 Average of array -----------------------------------------
// - performing array operation
// - its operates array

function average(arr) {
    let sum = arr.reduce((a,b)=>a+b,0);
    return sum / arr.length;
}

console.log(average([10,20,30]));
//-------------------------------------------------------------------------------------------------

//--------------------------- 8 annonymous function -----------------------------------------------
// its simple annonymous function 
// its also knows as one line function

let greet = function() {
    console.log("Hello!");
};

greet();
//-----------------------------------------------------------------------------------------

//------------------------------ 9 Arrow function -----------------------------------------
// the arrow function used multiple time in javascript
// it is used like set

const add = (a, b) => a + b;

console.log(add(5, 7));
//-------------------------------------------------------------------------------------------

//-------------------- 10 callback function ----------------------------------------
// the function is basically used to calling function


function total(...numbers) {
    return numbers.reduce((a,b)=>a+b);
}

console.log(total(2,4,6));
// --------------------------------------------------------------------------------------------
