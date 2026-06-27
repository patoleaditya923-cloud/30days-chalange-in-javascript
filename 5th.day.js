// ---------------------- 1.create array -----------------------------------
// - it is used to create an array
// - its using in multiple operation

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
//----------------------------------------------------------------------------

//--------------------------- 2 Access the array element -------------------------------
// - to access the element from array
// - its used to accesed array

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
console.log(fruits[2]);

//-----------------------------------------------------------------------------

//------------------------------ 3.update ana Element ------------------------------------
// its is used to access or change the element in array
// its useful function

let fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";

console.log(fruits);
// --------------------------------------------------------------------

//------------------------------- 4.Add Element at End push() ---------------------
// its adding the new element to retrived or to push in the code
// its used multiple times in javascript

let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
//------------------------------------------------------------------------------------
//------------------------ 5.Remove Last Element pop() ----------------------------------
// its work to Remove the last element from array
// its very useful to update 

let fruits = ["Apple", "Banana", "Mango"];

fruits.pop();

console.log(fruits);
//----------------------------------------------------------------------------------

//-------------------------- 6 Add Element at Beginning unshift() -------------------------------------------
// this function used to add the element in the beginning using unshift function
// its very east to operate

let fruits = ["Banana", "Mango"];

fruits.unshift("Apple");

console.log(fruits);

//-----------------------------------------------------------------------------------------

//-------------------------- 7.Remove first Element shift () --------------------------------
// this function remove the element first from array
// this used to multiple operation

let fruits = ["Apple", "Banana", "Mango"];

fruits.shift();

console.log(fruits);

//---------------------------------------------------------------------------------------------------

//-------------------------------- 8.find array of the lenght --------------------------------
// its simply find or count the lenght of array
// it is very useful function

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);

//---------------------------------------------------------------------------------------------------
//------------------------------- 9.find the index  indexof() ----------------------------------
// its simply find the index of element or array

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.indexOf("Mango"));

//---------------------------------------------------------------------------------------------

//------------------------- 10.join array element -------------------------------------
// join mins add the element in javascript 
// its simply used to join an element


let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join(", "));
//-------------------------------------------------------------------------------------------