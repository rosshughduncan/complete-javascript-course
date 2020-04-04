// Normal variables are primatives (numbers, strings, bools, undefines, nulls), everything else is an object (arrays, functions, objects, dates, wrappers for primatives)
// null is the final stage of the prototype chain
// Every js object has a prototype property

// Function constructors

// Constructors are written with a capital letter at the start
/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job; // Variables passed into function
//    this.calculateAge = function() {
//        console.log(2016 - this.yearOfBirth);
//    }
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth); // Still usable in each object since the method is attached to a prototype property in the function constructor
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher'); // Instantiation

// If the constructor does not return anything, the empty object now has the properties which we assign

var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName); */

// Prototype chain in the console
/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job; // Variables passed into function
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth); // Still usable in each object since the method is attached to a prototype property in the function constructor
}

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired'); */

// Object.create
/*
// Not using capital letter as it's not a function constructor
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

// Pass in object which we define to be the prototype of the new object
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});

// Object.create builds an object inheriting directly from the object we pass into the argument
// Function constructors - the newly created object inherits from the constructor's prototype properties
*/

// Primatives vs. objects (byval vs byref)
/*
// Primatives hold data inside variable itself
// Variables holding objects contain a reference in memory to where the object is stored

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age); // obj1 & obj2 point to the same object stored in memory
console.log(obj2.age); // so they show the same age in the console

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30; // does not change age, since it is a primative
    b.city = 'San Francisco'; // city changes, since it is a reference to the object property
}

change(age, obj);

console.log(age);
console.log(obj.city); */

// Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = []; // Empty array
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i])); // Generic function processing an array
    }
    return arrRes;
}

function calculateAge(el) { // Generic element placement
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    // Only valid between 18 and 81 age
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el)); // Rounds to nearest integer
    }
    else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge); // We're not calling the function now, we're calling it later (hence the use of callback), so no parantheses at the end

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates); */

// Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            // Anonymous function
            console.log(name + ', can you please explain what UX design is?');
        }
    }
    else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');

// First class functions

interviewQuestion('teacher')('Mark'); // Evaluated left to right
// interviewQuestion returns a function, function(name), so we can pass another value in as an argument straight away, we don't need to store interviewQuestion in a new variable */

// Immediately invoked function expressions (IIFE)
/*
//function game() {
//    var score = Math.random() * 10;
//    console.log(score >= 5);
//}
//game();

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

// Thinks this is a function declaration, so will through an error without ()
// Wrapping it inside parentheses tricks the compiler into thinking it's an expression
// Data cannot be accessed from outside the function - creating a new scope invisible to an outside scope - creates data privacy and varaibles don't interfere with other variables in the global execution context
// Non-reusable piece of code
*/

// Closures
/*
//function retirement(retirementAge) {
//    var a = ' years left until retirement.';
//    return function(yearOfBirth) {
//        var age = 2016 - yearOfBirth;
//        console.log((retirementAge - age) + a);
//    }
//}
//
//var retirementUS = retirement(66); // After the function returns and the execution context is gone, the variables in the function are still accessible in the scope chain
//// The scope chain contains pointers to variable objects
//retirementUS(1990); // Scope chain keeps working with variable scope references previously used in retirement()
//// Architecture for closures is built into javascript
//retirement(66)(1990);
//
//var retirementGermany = retirement(65);
//var retirementIceland = retirement(67);
//
//retirementGermany(1990);
//retirementIceland(1990);

function interviewQuestion(job) {
    // Only one return keyword needed here when using a closure
    return function(name) {
        switch(job) {
            case 'teacher':
                return console.log('What subject do you teach, ' + name + '?');
                break;
            case 'designer':
                return console.log(name + ', can you please explain what UX design is?');
                break;
            default:
                return console.log('That sounds interesting, ' + name + '.');
                break;
        }
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Mike');*/

// Bind method
/*
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    }
    else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation('formal', 'morning');

// Method borrowing with call method
// First argument is the 'this' variable
john.presentation.call(emily, 'friendly', 'afternoon');

// Method does not expect to receive and array, so will not work
//john.presentation.apply(emily, ['friendly', 'afternoon']);

// Bind Method
// Sets this variable explicitly
// Difference is bind doesn't immediately call the function, it makes a copy
// Good for functions with preset arguments

var johnFriendly = john.presentation.bind(john, 'friendly');

// Carrying - using a function based on another function with some preset parameters
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon'); */


// Bind with callback Functions
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = []; // Empty array
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i])); // Generic function processing an array
    }
    return arrRes;
}

function calculateAge(el) { // Generic element placement
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

// Presetting the argument
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan); */




// Coding challenge 7

var Question = function(questionInput, correctAnswerIDInput, possibleAnswersInput) {
  this.question = questionInput;
  this.correctAnswerID = correctAnswerIDInput;
  this.possibleAnswers = possibleAnswersInput;
  this.showQuestion = function(arr) {
    var toReturn = this.question + '\n';
    for (var i = 0; i < arr.length; i++) {
      if (this.possibleAnswers.includes(arr[i].answerID)) {
        toReturn += (i+1) + '. ' + arr[i].answerText + '\n';
      }
    }
    return toReturn;
  }
  this.isAnswerCorrect = function(input) {
    // Setting the answer to 0 index
    input -= 1;
    if (input === this.correctAnswerID) {
      return true;
    }
    else {
      return false;
    }
  }
};

var Answer = function(answerIDInput, answerTextInput) {
  this.answerID = answerIDInput;
  this.answerText = answerTextInput;
};

var questions = [
  new Question ('What is the capital city of Thailand?', 2, [0, 1, 2, 3, 4]),
  new Question ('How much oxygen is in the air?', 7, [5, 6, 7]),
  new Question ('What is the answer of life the universe and everything?', 10, [8, 9, 10])
];

var answers = [
  new Answer (0, 'Chiang Mai'),
  new Answer (1, 'London'),
  new Answer (2, 'Bangkok'),
  new Answer (3, 'Beijing'),
  new Answer (4, 'Paris'),
  new Answer (5, '100%'),
  new Answer (6, '50%'),
  new Answer (7, '21%'),
  new Answer (8, 'Chocolate'),
  new Answer (9, 'Happiness'),
  new Answer (10, '42')
];

function quiz() {
  var result;
  for (var i = 0; i < questions.length; i++) {
    result = false;
    console.log('Question ' + (i+1) + ':');
    console.log(questions[i].showQuestion(answers));
    while (!result) {
      result = prompt('Enter the answer to question ' + (i+1) + '.');
      // Result will return null if cancel box is clicked or nothing is input
      if (result === null) {
        console.log('You exited the quiz. Type quiz() to start again.');
        break;
      }
      else {
        result = questions[i].isAnswerCorrect(result);
        result === true ? console.log('Correct.') : console.log('Incorrect, try again.');
      }
    }
    if (result === null) {break;}
  }
}

console.log('Type quiz() to enter the quiz.');
