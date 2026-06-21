// -------------------------   1 - convert string in uppercase    -----------------------------
   // - to convert any string  capital letters
   // - like hello to HELLO
// -----------------------------------
let str = "hello";

console.log(str.toUpperCase());
// ------------------------------------------------------------------


//---------------------------- 2 - check leap year   --------------------------------
//   - in that operation we are use modulus operator
//   - it simple logic leap year come in 4 after 4 year

let year = 2026;

if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    console.log("Leap Year");
else
    console.log("Not Leap Year");

// -------------------------------------------------------------------------------

//----------------------------   3 - find area of circle   ----------------------------------
//      - using function math.PI
//      - it is simple operation 

let radius = 5;

let area = Math.PI * radius * radius;

console.log(area);

//---------------------------------------------------------------------------------

// ---------------------------------  4 - print current date  ------------------------------------
//   - used simple function  new date
//   - using this operation use we see the today date


let date = new Date();

console.log(date.toDateString());
//----------------------------------------------------------------------------------------

//--------------------- 5 - simple calculator of Addition , Substraction , multiplication ,Divide----------------
//   - basic operations in calculator
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
// ---------------------------------------------------------------------------------------
//------------------------------------------ 6 - swap two numbers ------------------------------------
//     - is simple add mins concidinate two number
//     - and return the output 

let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log(a, b);
//-----------------------------------------------------------------------------------


// ----------------------------------- 7 - calculate cube of number  --------------------------
//    - it is simply doing operation calculate the cube
//    - using num*num*num and return the output

let num = 3;

console.log(num * num * num);
//--------------------------------------------------------------------------------------


// --------------------------- 8 - check the eligibility for vote --------------------------------
//    - it is basic requirement when your age is 18 you are eligible
//    - used  if else for prove the condition

let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}

//-----------------------------------------------------------------------------------------

// ------------------------------------  9 -  find power of number ------------------------------
//     - its simple calculate  power of number

let base = 2;
let power = 3;

console.log(base ** power);
//------------------------------------------------------------------------------------------

// ---------------------------------------  10 - find square root  ------------------------
//     - in that operation used math.sqrt function find square root
//     - give the number and its give square root
let num = 70;

console.log(Math.sqrt(num));