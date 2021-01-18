/*  Before ES6 the variables were declared with 'var'. Now with ES6,
we can also use 'const' and 'let' variable declarations. One of the main
differences between 'var' and 'const' as well as 'var' and 'let' is the scope
of the variable being declared. 'Var' variables have a global scope  whereas
both 'let' and 'const' function within a the scope of a function.

A difference between 'const' and 'let' is that generaly 'const' can't be updated.
Another difference between 'var' and both 'const' and 'let' is that 'var' can be
re-declared.

Hoisting is a mechanism within JS where both variables and function declarations
are moved to a higher scope before its execution.
*/

//Example of 'var'

var tri = "tri";
var five = 5;

if (five > 4){
  //variable tri re-declared
  var tri = "triangle";
}

console.log(tri); // "triangle"

//Hoisting of 'var'
console.log(yoyo); // variable yoyo called before declaration
var yoyo = "it's a game";



// Example of 'let'
let trii = "tri";
let six = 6;

if (six > 4){
  //variable tri re-declared
  let trii = "triangle";
  console.log(trii); //"triangle"
}

console.log(trii); // "tri instead of triangle "

// 'let' can be updated but not re-declared
let foo = "oopart";
foo = "1984"; //works

let foo2 = "ufo";
let foo2 = "x-files"; // error

// 'const'
const hola = "hola";
hola = "hello"; // error since const can't be updated.

const obj = {
  usr: "Eduardo",
  age: 22,
}
obj.age = 84; // however they can be mutated.
