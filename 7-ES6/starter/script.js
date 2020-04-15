// let and const
/*
// es5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// es6
const name6 = 'Jane Smith';
// let for values we want to mutate
let age6 = 23;
// this throws an error
//name6 = 'Jane Miller';
//console.log(name6); // we get an error

// var's are function scoped
// let's are block scoped

// es5
function driversLicense5(passedTest) {
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense5(true);

// es6
function driversLicense6(passedTest) {
  // we can't use variables before they're declared: this causes an console.error
  // temporal dead zone - variables are hoisted but we cannot access them before declaration
  //console.log(firstName);
  let firstName; //let and const need to be outside if block here
  const yearOfBirth = 1990;
  if (passedTest) {
    firstName = 'John';
  } //this is the end of a block
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense6(true);

let i = 23;
for (let i = 0; i < 5; i++) {
  console.log(i);
  // i is only assigned within this for block
}
console.log(i); // shows 23
*/

// blocks and iifes
/*
// block - es6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

//console.log(a + b); // reference error, not accessible
console.log(c); // this does work */

// strings in es5/es6
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
  return 2016 - year;
}

// es5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// es6
// template literals, using backticks
// we can put entire expressions in a template string
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); // returns if the string starts with j or not
console.log(n.endsWith('Sm'));
console.log(n.includes(' ')); // does the string include a space?
console.log(`${firstName}`.repeat(5)); */

// arrow functions 1
/*
const years = [1990, 1965, 1982, 1937];

// es5
var ages5 = years.map(function(el) {
  return 2016 - el;
});
console.log(ages5);

// es6
let ages6 = years.map((el) => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6); */

// arrow functions 2
/*
// arrow functions don't use a 'this' keyword, they use a lexical 'this' variable

// es5
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     // to prevent an undefined result, we store a reference to this object in a local variable
//     var self = this;
//     // attach event handler to the green box
//     document.querySelector('.green').addEventListener('click', function() { // this is not a method, it's a function call, does not point to this object
//       var str = 'This is box number ' + self.position + ' and it is ' + self.color + '.';
//       alert(str);
//     });
//   }
// }
// box5.clickMe(); // in a function call, the this keyword will point to the global object (in the case of the browser is the window object)

// es6
// var box6 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     document.querySelector('.green').addEventListener('click', () => { // the function now shares the this keyword pointing to the object
//       var str = 'This is box number ' + this.position + ' and it is ' + this.color + '.';
//       alert(str);
//     });
//   }
// }
// box6.clickMe(); // always use arrow functions to preserve use of the this keyword

// var box66 = {
//   color: 'green',
//   position: 1,
//   clickMe: () => { // this method now shares the global lexical context, which points to the window object
//     document.querySelector('.green').addEventListener('click', () => {
//       var str = 'This is box number ' + this.position + ' and it is ' + this.color + '.';
//       alert(str);
//     });
//   }
// }
// box66.clickMe();

function Person(name) {
  this.name = name;
}

// es5
// Person.prototype.myFriends5 = function(friends) {
//   var arr = friends.map(function(el) {
//     return this.name + ' is friends with ' + el; // this keyword points to global object (window)
//   }.bind(this)); // copy scope of this keyword in prototype function into the map function
//   console.log(arr);
// };
//
// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);

// es6
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map((el) => `${this.name} is friends with ${el}`);
  console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends5(friends); */

// destructuring
/*
// es5

// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// es6

const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
  firstName: 'John',
  lastName: 'Smith'
};

// destructurer - we can unpack the values from the array
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement2] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement2); */

// arrays in es6
/*
// const boxes = document.querySelectorAll('.box');
// // change node list into array
//
// // es5
//
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//   cur.style.backgroundColor = 'dodgerblue';
// });
//
// // es6
//
// // from automatically splits node list into array
// const boxesArr6 = Array.from(boxes);
// //Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
//
// // loop through each text box to change to 'blue'
//
// // es5
//
// // for (var i = 0; i < boxesArr5.length; i++) {
// //   if(boxesArr5[i].className === 'box blue') {
// //     continue; // skip over this iteration
// //   }
// //   boxesArr5[i].textContent = 'I changed to blue!';
// // }
//
// // es6
//
// // loop through each array element without using an index
// for (const cur of boxesArr6) {
//   // if one of the classes of the element is blue
//   if (cur.className.includes('blue')) {
//     continue;
//   }
//   cur.textContent = 'I changed to blue!';
// }
//
// // es5
// var ages = [12, 17, 8, 21, 14, 11];
// var full = ages.map(function(cur) {
//   return cur >= 18;
// });
// console.log(full);
//
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);
//
// // es6
//
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18)); */

// spread operator
/*
function addFourAges (a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// passing an array into the function
// es5

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages); // there is no this variable we're interested in, so we put null
console.log(sum2);

// es6

const sum3 = addFourAges(...ages); // spread operator expands array into its components
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes]; // spread operator expands the node list

Array.from(all).forEach(cur => cur.style.color = 'purple'); */

// rest parameters
/*
// allow us to pass an arbitrary number of arguments into a function

// es5

function isFullAge5() {
  //console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function(cur) {
    console.log((2016 - cur) >= 18);
  });
}

isFullAge5(1990, 1999, 1965); // passes an object into the function (array-like structure)
// to use it as an array, we need to transform it into an array

isFullAge5(1990, 1999, 1965, 2016, 1987);

// es6
function isFullAge6(...years) { // passes the parameters in as an array
  years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1857);


// es5
function isFullAge5(limit) {
  console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments, 1); // passes the array into the call function from index 1 (after the limit)
  console.log(arguments);
  argsArr.forEach(function(cur) {
    console.log((2016 - cur) >= limit);
  });
}

isFullAge5(16, 1990, 1999, 1965);

// es6
function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1857); */

// default parameters
/*
// es5

function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? lastName = 'Smith' : lastName = lastName; // in a ternary operator, the else statement has to be defined
  nationality === undefined ? nationality = 'American' : nationality = nationality;
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson ('John', 1990); // we can create objects without specifying all of the parameters
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

// es6

function SmithPerson2(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john2 = new SmithPerson2 ('John', 1990);
var emily2 = new SmithPerson2('Emily', 1983, 'Diaz', 'Spanish'); */

// maps
/*
// in maps, we can use any primative value as keys

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong, please try again.');

// console.log(question.get('question'));
// console.log(question.size);

// if (question.has(4)) { // check if a key is in the map
//   //question.delete(4);
//   console.log('Answer 4 is here');
// }

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) { // returns all key value pairs
  if (typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt('Write the correct answer'));
// the key will either be true or false, will retrieve the string for true or false
console.log(question.get(ans === question.get('correct')));*/


// classes
/*
// another way of doing prototyping and inheritance

// es5

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear - this.yearOfBirth;
  console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// es6

class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    // no need for prototype function or separating punctuation
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
  }
  static greeting() {
    console.log('Hey there!');
  }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting(); // method attached to the class definition
// we can only add methods to classes, not properties (hence why we use a constructor) */

// classes w/ subclasses

// es5
/*
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}


Athlete5.prototype = Object.create(Person5.prototype);

// This method needs to be placed after we link the athlete5 and prototype5 objects together
Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
// Athlete5's prototype properties is the same as Person5's prototype properties

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();




// es6

class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    // no need for prototype function or separating punctuation
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

// This class extends the person superclass
class Athlete6 extends Person6 {
  // repeat person properties
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    // copy over the assignments of these properties from the superclass
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }
  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge(); */

// coding challenge 8

class Build {
  constructor (name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
  getAge() {
    let date = new Date();
    return date.getFullYear() - this.buildYear;
  }
  getName() {
    return this.name;
  }
}

class Park extends Build {
  constructor (name, buildYear, numTrees, area) {
    super(name, buildYear);
    this.numTrees = numTrees;
    this.area = area;
  }
  getTreeDensity() {
    return this.numTrees / this.area;
  }
  getNumTrees() {
    return this.numTrees;
  }
}

class Street extends Build {
  constructor (name, buildYear, length) {
    super(name, buildYear);
    // check if no length has been entered
    this.length = (typeof(length) !== 'undefined') ? length : -1;
  }
  sizeClassification() {
    // default value allowed is null (represented as -1)
    // if length is less than 10 m, it is tiny
    if (this.length >= 0 && this.length < 10) {
      return 'Tiny';
    }
    // if less than 20 m, it is small
    else if (this.length >= 10 && this.length < 20) {
      return 'Small';
    }
    // if greater than 100 m but less than 200 m, it is big
    else if (this.length >= 100 && this.length < 200) {
      return 'Big';
    }
    // if greater than 200 m, it is huge
    else if (this.length >= 200) {
      return 'Huge';
    }
    // any other length, return normal
    else {
      return 'Normal';
    }
  }
  getLength() {
    return this.length;
  }
}

let town = {
  parks: [new Park('Rosenbaumen', 1992, 500, 400),
          new Park('Blackwood', 1982, 1300, 250),
          new Park('Thislegrove', 1974, 240, 150)],
  streets: [new Street ('Glen Close', 1945, 20),
            new Street ('Smick Grove', 1954, 12),
            new Street ('Long Island', 1943, 65),
            new Street ('Paper Street', 1978, 230)],
  treeDensities: () => {
    let allDensities = [];
    for (let i = 0; i < town.parks.length; i++) {
      allDensities[i] = [town.parks[i].name, town.parks[i].getTreeDensity()];
    }
    return allDensities;
  },
  avgAgeParks: () => {
    let total = 0, i;
    for (i = 0; i < town.parks.length; i++) {
      total += town.parks[i].getAge();
    }
    // counter is 0 based so we increment it by 1
    return total / (i + 1);
  },
  queryParks: (input) => {
    let array = [];
    let currentIndex = 0
    let currentNumTrees;
    for (let i = 0; i < town.parks.length; i++) {
    //forEach (let i in town.parks) {
      currentNumTrees = town.parks[i].getNumTrees();
      if (currentNumTrees > input) {
        array[currentIndex] = town.parks[i].getName();
        currentIndex++;
      }
    }
    return array;
  },
  totalAvgStreets: () => {
    let total = 0, i;
    for (i = 0; i < town.streets.length; i++) {
      total += town.streets[i].getLength();
    }
    return [total, total / (i + 1)];
  },
  sizeClassificationAll: () => {
    let allStreets = [];
    for (let i = 0; i < town.streets.length; i++) {
      allStreets[i] = [town.streets[i].name, town.streets[i].sizeClassification()];
    }
    return allStreets;
  }
};

/*function avg(array, fn) {
  let total = 0, counter = 0, toReturn = [];
  for (let i = 0; i < array.length; i++) {
      total += array.fn;
    }
    counter++;
  }
  // counter is 0 based so we increment it by 1
  toReturn = [total, (total / (counter + 1))];
  return toReturn;
}*/

// console logging

let parkQuery, classifications, avgStreets, densities;

console.log('Parks and Streets Report');
// get tree densities
console.log('Tree densities in parks:');
densities = town.treeDensities();
for (let i = 0; i < densities.length; i++) {
  console.log(`Name: ${densities[i][0]}, density: ${densities[i][1]} tree/m^2`);
}
// get average age of each town's park
console.log(`Average age of parks: ${town.avgAgeParks()} years old`);
// get name of park with more than 1000 trees
console.log('Park(s) with more than 1000 trees:');
parkQuery = town.queryParks(1000);
parkQuery.forEach((i) => {
  console.log(i);
});
// get total and average length of town's streets
avgStreets = town.totalAvgStreets();
console.log(`Total length of streets: ${avgStreets[0]} m`);
console.log(`Average length of streets: ${avgStreets[1]} m`);
// get size classification of all streets
console.log('Size classification of all streets:');
classifications = town.sizeClassificationAll();
for (let i = 0; i < classifications.length; i++) {
  console.log(`Name: ${classifications[i][0]}, classification: ${classifications[i][1]}`);
}
