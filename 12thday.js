//=====================================================================================================================================

//----------------------------------------------------- 1 palindrome ----------------------------------------------------------------
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("sagar"));
                            
// 1. A palindrome reads the same forward and backward.
// 2. -its gives answer in boolean datatype like true or false.
// 3. - its used function like reverse(),join(),split().
//================================================================================================================================================

//------------------------------------------------------- 2 Basic Calculator ---------------------------------------------------------------------------------

// - basic operations in calculator
//   - performed in one place 

let a = 10;
let b = 5;
let op = "-";
switch(op){
    case "+": console.log(a+b); break;
    case "-": console.log(a-b); break;
    case "*": console.log(a*b); break;
    case "/": console.log(a/b); break;
}
//====================================================================================================================


// --------------------- 3 check chracter is vowel --------------------------

//- check letter likes a,e,i,o,u check these character in word
// - satisfying the following condditions 

let ch = "a";

if (
    ch === "a" ||
    ch === "e" ||
    ch === "i" ||
    ch === "o" ||
    ch === "u"
) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}
//-------------------------------------------------------------------------

//---------------------------------- 4 Average of array -----------------------------------------
// - performing array operation
// - its operates array

function average(arr) {
    let sum = arr.reduce((a,b)=>a+b,0);
    return sum / arr.length;
}

console.log(average([10,20,30]));
// ============================================================================================================


//------------------------------- 5 Add Element at End push() ---------------------
// its adding the new element to retrived or to push in the code
// its used multiple times in javascript

let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
//=====================================================================================================================

//----------------------------- 6. Hollow pyramid ---------------------------------------
//Same logic as Hollow Pyramid + Hollow Inverted Pyramid
let n = 5;

for (let i =1 ; i <=n; i++){
    let row = "";
    
    for (let j = 1; j <= n; j++){

        if(i == j || i + j == n + 1 )
            row += "*";
        else 
            row +=" ";
            
        
    }
    console.log(row);
}
//=================================================================================================

//--------------------------------- 7 -every() -----------------------------------------------------------

//Returns true if all elements satisfy the condition

let numbers = [2, 4, 6, 8];

let result = numbers.every(function(num) {
    return num % 2 === 0;
});

console.log(result);
//=============================================================================================================

//--------------------------------- 8 - count object property ----------------------------------------------------

// Object.keys() returns an array of keys. length counts them

const student = {
    name: "Aditya",
    age: 21,
    city: "Pune"
};

console.log(Object.keys(student).length);
// ====================================================================================================================

//----------------------------------- 9- calculate age -----------------------------------------------------------

// Subtract the birth year from the current year to estimate age.

let birthYear = 2003;

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log(age);
//========================================================================================================================

//-------------------------------------------- 10- Object method -------------------------------------------------------------------
// Objects can contain functions.
// These functions are called methods.
// this.name refers to the object's name property
let student = {
    name: "Aditya",
    greet: function () {
        console.log("Welcome " + this.name);
    }
};
student.greet();
//======================================================================================================================