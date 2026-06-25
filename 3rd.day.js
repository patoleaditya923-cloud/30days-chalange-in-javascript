// ---------------------  1-random number -------------------------
// - its takes random numbers
// - its can take specific value
console.log(Math.random());

//--------------------------------------------------------------

// --------------------- 2-set timeout -----------------------
// - its execcute after 2 seconds
setTimeout(() => {
    console.log("Hello");
}, 2000);
//-----------------------------------------------------------------

//------------------- 3-grade calculator ----------------------
// - used the conditional statement if , else if,
// - checking condition and satisfy the conditions
let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
//-------------------------------------------------------------------

//--------------------- 4 check chracter is vowel --------------------------

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
//-------------------------------------------------------------------------------

//------------------------- 5-check login Credentials --------------------------------
// it is basically login system to check credentially
// it is login page creating username and password

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234"){
    console.log("login Successful");

}else{
    console.log("invalid Credentials");
}
//-----------------------------------------------------------------------------------------------

//--------------------------- 6-check number is between range ---------------------------------------
// - its check the nearest number within the range 
// - used condition statement operators of satispy

let num =15;

if (num>=10 && num <= 20){
    console.log("Within Range");

}else{
    console.log("out of range")
}
//--------------------------------------------------------------------------------------------------------------


// -------------------------- 7- day name using switch --------------------------------------------
// its basically created switch to satisfying conditions
// check conditions avability
let day = 2;

switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("invalid day");

}
//----------------------------------------------------------------------------------

// --------------------- 8- check  Tempreture---------------------------
// check temperature using if else condition
//
let temp = 35;

if (temp > 30) {
    console.log("Hot Weather");
} else {
    console.log("Cool Weather");
}
//--------------------------------------------------------------------------------------

// --------------------------- 9- ATM balance check-----------------------------------------------
// its created function to check balance and withdrawal the balance

let balance = 5000;
let withdraw = 2000;

if (withdraw <= balance) {
    console.log("Transaction Successful");
    console.log("Remaining Balance:", balance - withdraw);
} else {
    console.log("Insufficient Balance");
}
//-------------------------------------------------------------------------------------

//---------------------------- 10- check pass or fail --------------------------------------------------
// its condition pass or fail
// its process to mark 35 or not

let marks = 35;

if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}
//-------------------------------------------------------------------------------