
//============================================= example on objects in javascript ============================================================

// It has three properties: name, age, and course.
// Access properties using the dot (.) operator.
let student = {
    name: "Aditya",
    age: 21,
    course: "BBA(CA)"
};

console.table(student);
console.table(student.name);
console.table(student.course);
//=============================================================================================

//----------------------------- 3- Employee objet ----------------------------------------------
// tores employee details in one object.
// employee.salary returns the salary.
let employee = {
    id: 101,
    name: "Rahul",
    department: "IT",
    salary: 50000
};
console.table(employee);
console.table(employee.salary);

//====================================================================================================

//----------------------------------------- 4-Add object property ------------------------------------------
// // Add a new property using

let student = {
    name: "Aditya",
    age: 21
};
student.city = "Pune";
console.log(student);
// //==================================================================================================================

// //--------------------------------------------- 5 Delete object property ------------------------------------------
// // delete removes a property from an object.
let student = {
    name: "Aditya",
    age: 21,
    city: "Pune"
};

delete student.city;

console.log(student);
// //===================================================================================================================

// //------------------------------------------- 6 -Object Destructuring ------------------------------------------------------


let student = {
    name: "Aditya",
    age: 21,
    course: "BBA(CA)"
};
let { name, course } = student;
console.log(name);
console.log(course);
// //===================================================================================================================================

// //-------------------------------------------- 7 - Object method -------------------------------------------------------------------
// // Objects can contain functions.
// // These functions are called methods.
// // this.name refers to the object's name property
let student = {
    name: "Aditya",
    greet: function () {
        console.log("Welcome " + this.name);
    }
};
student.greet();
// //========================================================================================================================

// //---------------------------------------------- 8 Nested object ----------------------------------------------------

// // An object can contain another object.
// // Such objects are called nested objects.
let student = {
    name: "Aditya",
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
};
console.log(student.address.city);
console.log(student.address.state);

// //===============================================================================================================================

// //----------------------------------------- 9 Merge object Object  ---------------------------------------------------------

let student = {
    name: "Aditya",
    age: 21
};

let marks = {
    javascript: 90,
    html: 95
};
let result = { ...student, ...marks };
console.log(result);
// //==================================================================================================================================

// //---------------------------------------- 10 - Clone Object -----------------------------------------------------------

// //The spread operator creates a copy of the object
let student = {
    name: "Aditya",
    age: 21
};
let copy = { ...student };

console.log(copy);
copy.age = 25;

console.log(student);
console.log(copy);
//================================================================================================================================// //======================================== example on object ==================================================

//The object stores information about a car.
// Each property is accessed using dot notation

let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2024
};

console.log(car.brand);
console.log(car.model);
console.log(car.year);

//====================================================================================


