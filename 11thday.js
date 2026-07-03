// ========================================= classes and oops===========================================
// --------------------------------------------- 1 - Claculator----------------------------------------------------
// Demonstrates methods inside a class.
// Performs arithmetic operations.
class Calculator {
    add(a, b) {
        console.log(a + b);
    }

    multiply(a, b) {
        console.log(a * b);
    }
}
let cal = new Calculator();
cal.add(10, 20);
cal.multiply(5, 4);
//==================================================================================================================

//----------------------------------------------- 2 - Book Class -------------------------------------------------------
// Stores book information.
// Prints title and author.
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    details() {
        console.log(this.title, this.author);
    }
}
let b = new Book("JavaScript", "John");
b.details();
//==================================================================================================================================

//--------------------------------------------------- 3 Mobile class ----------------------------------------------------------------

// Stores mobile brand and price.
// Displays both values.
class Mobile {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    show() {
        console.log(this.brand, this.price);
    }
}

let m = new Mobile("Samsung", 30000);
m.show();
//===========================================================================================================================

//-------------------------------------------------- 4 - Rectangle Class ---------------------------------------------------------------
// Calculates rectangle area.
// Formula = length × width
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    area() {
        console.log(this.length * this.width);
    }
}
let r = new Rectangle(10, 5);
r.area();
//=====================================================================================================================================

//------------------------------------------------- 5 -Circle Class -----------------------------------------------------------------------
// Calculates circle area.
// Formula = π × r²
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        console.log(3.14 * this.radius * this.radius);
    }
}

let c = new Circle(7);
c.area();
//============================================================================================================================================

//----------------------------------------------- 6 - Animal ----------------------------------------------------------------------------------

// Dog inherits from Animal.
// Uses extends
class Animal {
    sound() {
        console.log("Animal Sound");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog Barks");
    }
}
let d = new Dog();
d.sound();
d.bark();
//================================================================================================================================================

//------------------------------------------------- 7 - Method overriding (polymorphism) ----------------------------------------------------------------------
// Child class overrides the parent method.
// Demonstrates polymorphism
class Animal {
    sound() {
        console.log("Animal Sound");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Meow");
    }
}
let cat = new Cat();
cat.sound();
//==================================================================================================================================================

//-------------------------------------------------- 8 - Encapsulation -------------------------------------------------------------------
// Data (name) and method (showName) are kept together in one class.
// This is encapsulation
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(this.name);
    }
}
let p = new Person("Aditya");
p.showName();
// ===================================================================================================================================

// ----------------------------------------------------- 9 - Abstraction -------------------------------------------------------------------
// User only calls withdraw().
// Internal implementation is hidden.
class ATM {
    withdraw(amount) {
        console.log("Withdraw:", amount);
    }
}

let atm = new ATM();
atm.withdraw(2000);

//====================================================================================================================================

//-------------------------------------------------- 10 shopping cart -----------------------------------------------------------------------
// total starts at 0.
// Each addItem() call adds the item's price to the total.
// The updated total is displayed after every addition.
class Cart {
    constructor() {
        this.total = 0;
    }

    addItem(price) {
        this.total += price;
        console.log("Total:", this.total);
    }
}

let cart = new Cart();

cart.addItem(500);
cart.addItem(300);
//==============================================================================================================================================