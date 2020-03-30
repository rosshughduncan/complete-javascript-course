// Hoisting
/*
calculateAge(1965); // Function is stored in the variable object before code is executed

function calculateAge(year) {
    console.log(2016 - year);
}

//retirement(1965);

var retirement = function(year) {
    console.log(65 - (2016 - year));
} // This function is a function expression, not a declaration (hoisting only works with declarations)

console.log(age);
var age = 23; // what happens before we declare the variable? It shows 'undefined' in the console
console.log(age); // Variables are set to undefined during hoisting, they stay undefined until runtime

function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age); // This line uses the age variable belonging to the global execution context object, not the foo() context object */

// Scoping chain
/*
// Scope = environment where variables are defined as accessible

// Lexical scoping = function that is lexically within another parent function gets access to the scope of the parent function
// Local scopes also have access to the global scope
// Scope chain works upwards from local scopes
// Local scopes are not visible to parent scopes
// Execution stack (order in which functions are called) does not affect the scope
*/

// 'this' keyword
/*
// Regular function call - keyword points to global object
// Method call - this keyword pionts to object that is calling the method

//console.log(this);

//calculateAge(1985);
//
//function calculateAge(year) {
//    console.log(2016 - year);
//    console.log(this); // Regular function call, not a method (displays Window object in console, since this function is attached to the global object)
//}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
//        function innerFunction() {
//            console.log(this); // keyword of inner function shows the Window object in the console; when a regular function call happens, the this keyword returns the Window object in the browser
//        }
//        innerFunction();
    }
};

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// Method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge(); // When the method is called from the Mike object, the this keyword shows what it is assigned to when it's called (Mike object)*/