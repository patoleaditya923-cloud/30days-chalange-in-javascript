//==================================== Object properties programs ==================================================

//-------------------------- 1- Create an object ------------------------------------------
// student is an object.
// It contains three properties:
// name
// age
// city

const student = {
    name: "Aditya",
    age: 21,
    city: "Pune"
};

console.log(student);
// ===================================================================================================

// -------------------------------- 2- Access object properties -------------------------------------
// Dot notation (student.name)
// Bracket notation (student["age"])

const student = {
    name: "Aditya",
    age: 21
};

console.log(student.name);
console.log(student["age"]);

//========================================================================================================

//---------------------------- 3 - Add new property ------------------------------------------------------

//A new property can be added after object creation.

const student = {
    name: "Aditya"
};

student.age = 21;

console.log(student);

//===============================================================================================================

//------------------------------- 4 - update object property----------------------------------------------------

//Assigning a new value updates an existing property.

const student = {
    name: "Aditya",
    age: 20
};

student.age = 21;

console.log(student);
//========================================================================================================

//------------------------------- 5- Delete object property -------------------------------------------

//delete removes a property from an object.
const student = {
    name: "Aditya",
    age: 21
};

delete student.age;

console.log(student);

//============================================================================================================

//------------------------------- 6-Loop Through object ---------------------------------------------------------

//for...in loops through all object keys
const student = {
    name: "Aditya",
    age: 21,
    city: "Pune"
};

for (let key in student) {
    console.log(key, ":", student[key]);
}

//========================================================================================================================

//--------------------------------- 7 - count object property ----------------------------------------------------

// Object.keys() returns an array of keys. length counts them

const student = {
    name: "Aditya",
    age: 21,
    city: "Pune"
};

console.log(Object.keys(student).length);

//========================================================================================================================

//-------------------------------------- 8 - Check Property Exit ------------------------------------------------------------

//The in operator checks whether a property exists

const student = {
    name: "Aditya",
    age: 21
};

console.log("age" in student);
console.log("city" in student);

//===============================================================================================================

//-------------------------------------- 9 - print onlly values -----------------------------------------------------

//Object.values() returns an array of all values.

const student = {
    name: "Aditya",
    age: 21,
    city: "Pune"
};

console.log(Object.values(student));

//==========================================================================================================================

//-------------------------------------- 10 - print Keys and values ----------------------------------------------------------

// Object.entries() returns key-value pairs as nested arrays

const student = {
    name: "Aditya",
    age: 21
};

console.log(Object.entries(student));

//===================================================================================================================================