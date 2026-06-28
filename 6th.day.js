// ----------------------- 6th day (Star patterns)------------------------------------


// --------------------------- 1- star patterns -------------------------------
// Outer loop = rows.
// Inner loop = columns.
// Prints * 5 times in every row.
let z = 5;

for (let i = 1; i <= z; i++) {
    let pattern = "";
    for (let j = 1; j <= z; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}
//-----------------------------------------------------------------------------------------

//----------------------- 2 left traingle --------------------------------------
// Each row prints stars equal to row number.

let d = 5;

for (let i = 1; i <= d; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}
//---------------------------------------------------------------------------------

//--------------------------------- 3inverted Left traingle ----------------------------------
// Starts with 5 stars and decreases one star every row.

let b = 5;

for (let i = b; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}
//---------------------------------------------------------------------------------

//------------------------------- 4 - Right Traingle -------------------------------------------------
//First print spaces, then stars

let a = 4;

for (let i = 1; i <= a; i++) {
    let pattern = "";

    for (let j = 1; j <= a - i; j++) {
        pattern += "  ";
    }

    for (let k = 1; k <= i; k++) {
        pattern += "* ";
    }

    console.log(pattern);
}
//---------------------------------------------------------------------------------------------

//----------------------------- 5-inverted right traingle --------------------------

let c = 5;

for (let i = c; i >= 1; i--) {

    let pattern = "";

    for (let j = 1; j <= c - i; j++) {
        pattern += "  ";
    }

    for (let k = 1; k <= i; k++) {
        pattern += "* ";
    }

    console.log(pattern);
}
//---------------------------------------------------------------------------------------------------
// -------------------------------- 6 - Pyramid  star -------------------------------------

// Stars = 2*i-1

let p = 5;

for (let i = 1; i <= p; i++) {

    let pattern = "";

    for (let j = 1; j <= p - i; j++)
        pattern += " ";

    for (let k = 1; k <= 2 * i - 1; k++)
        pattern += "*";

    console.log(pattern);
}
//--------------------------------------------------------------------------------------
//-----------------------------7. Hollow pyramid ---------------------------------------
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
//-------------------------------------------------------------------------------------------

//------------------------------ 8- Butterfly Pattern -------------------------------------------

// Two traingle facing opposite direction
// n = 5 determines the size of the butterfly.
let n = 5;

// Upper Half
for (let i = 1; i <= n; i++) {
    let pattern = "";

    // Left Stars
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    // Spaces
    for (let j = 1; j <= 2 * (n - i); j++) {
        pattern += " ";
    }

    // Right Stars
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);
}

// Lower Half
for (let i = x - 1; i >= 1; i--) {
    let pattern = "";

    // Left Stars
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    // Spaces
    for (let j = 1; j <= 2 * (x - i); j++) {
        pattern += " ";
    }

    // Right Stars
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);
}
//------------------------------------------------------------------------------------------

// --------------------------------- 9-christmas tree -----------------------------------------------
// the outer loop control the number
//Spaces decrease as the rows increase.
// stars increase by 2 every row
// Print two rows for the trunk.
//prints spaces to center the trunk
let n = 5;

// Tree (Pyramid)
for (let i = 1; i <= n; i++) {
    let pattern = "";

    // Spaces
    for (let j = 1; j <= n - i; j++) {
        pattern += " ";
    }

    // Stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }

    console.log(pattern);
}

// Tree Trunk
for (let i = 1; i <= 2; i++) {
    let pattern = "";

    // Center the trunk
    for (let j = 1; j <= n - 1; j++) {
        pattern += " ";
    }

    pattern += "*";

    console.log(pattern);
}

// --------------------------- 10 Heart pattern ------------------------------------------

//Prints the two rounded lobes of the heart.
//Creates spacing before the left lobe.
// Prints the left curved part
// creates the gap between the two lobes.
// Two upper lobes + one inverted triangle
let e = 4;

// Upper Part
for (let i = n / 2; i <= e; i += 2) {
    let pattern = "";

    // Left Spaces
    for (let j = 1; j < e - i; j += 2) {
        pattern += " ";
    }

    // Left Stars
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    // Middle Spaces
    for (let j = 1; j <= e - i; j++) {
        pattern += " ";
    }

    // Right Stars
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);
}

// Lower Part
for (let i = e; i >= 1; i--) {
    let pattern = "";

    // Left Spaces
    for (let j = i; j < e; j++) {
        pattern += " ";
    }

    // Stars
    for (let j = 1; j <= (i * 2 - 1); j++) {
        pattern += "*";
    }

    console.log(pattern);
}
//-------------------------------------------------------------------------------------------------