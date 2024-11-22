// console.log(a);
// var a = 10;
// let b = 20;
// console.log(b);

// This code will give output:
// undefined
// 20

// var declarations are hoisted and initialized to undefined allowing access before declarations.
// let and const are hoisted but not initialized, and accessing them before declaration causes ReferenceError due to Temporal Dead Zone.


var a = 10;
console.log(a);
let b = 20;
console.log(b);

function Hoisting(){
    function func(){}
    var func = 'Func is a variable' 
    console.log(func)
    // console.log(func()) // It gives TypeError: func is not a function
}
Hoisting()




for(var i = 1 ; i <= 5 ; i++){
    console.log(i)
}
console.log(i)

for(let i = 1 ; i <= 5 ; i++){
    console.log(i)
}
// console.log(i) // It causes an error as i is not defined because let is Block scoped

// for(const i = 1 ; i <= 5 ; i++){
//     console.log(i)
// }
// console.log(i)
// It can't be increased in the loop as it is constant so it will through error


console.log(declared()); 
function declared() {
    return "This is a function declaration!";
}
// It works fine

// console.log(expressed()); 
// var expressed = function() {
//     return "This is a function expression!";
// };

// It causes TypeError: expressedFunction is not a function because hoisted only by its variable declaration.
// Because, the function itself is not initialized until the function line is executed.


