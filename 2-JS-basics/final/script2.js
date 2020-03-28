/*
Variables & data types
*/

/*
var firstName = "John";
console.log(firstName);
var lastName = "Smith";
var age = 28;

var fullAge = false;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

// Variable naming rules
var $3years = 3;
var johnMark = "John & Mark";
var $if = 23;
*/

// Variable mutation & type coercion
/*
var firstName = "John";
var age = 28;

console.log(firstName + " " + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

// Variable mutation
age = "twenty eight";
job = "driver";

alert(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + " " + lastName);
*/

// Basic operators

// Math operators
/*
var year, yearJohn, yearMark;
year = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = year - ageJohn;
yearMark = year - ageMark;
console.log(yearJohn);
console.log(year + 2);
console.log(year / 10);

// Logic operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log(typeof x);
*/

// Operator precedence
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

var isFullAge = ageJohn >= fullAge;
console.log(isFullAge);

console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
//x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/

// coding challenge 1
/*
var massJohn = prompt("Enter John's mass (kg):");
var massMark = prompt("Enter Mark's mass (kg):");
var heightJohn = prompt("Enter John's height (m):");
var heightMark = prompt("Enter Mark's height (m):");

var bmiJohn = massJohn / heightJohn ** 2;
var bmiMark = massMark / heightMark ** 2;

var result = bmiMark > bmiJohn;

console.log(bmiJohn + "\n" + bmiMark);
console.log("Is Mark's BMI higher than Johns? " + result);
*/

// if else
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married')
    {
        console.log(firstName + ' is married!');
    }
else
    {
        console.log(firstName + ' will hopefully marry soon.');
    }

var isMarried = true;

if (isMarried)
    {
        console.log(firstName + ' is married!');
    }
else
    {
        console.log(firstName + ' will hopefully marry soon.');
    }

var massJohn = prompt("Enter John's mass (kg):");
var massMark = prompt("Enter Mark's mass (kg):");
var heightJohn = prompt("Enter John's height (m):");
var heightMark = prompt("Enter Mark's height (m):");

var bmiJohn = massJohn / heightJohn ** 2;
var bmiMark = massMark / heightMark ** 2;

if (bmiMark > bmiJohn)
    {
        console.log("Mark's BMI is higher than John's.");
    }
else
    {
        console.log("John's BMI is higher than Mark's.");
    }
*/

// boolean logic
/*
var firstName = 'John';
var age = 20;

if (age < 13)
    {
        console.log(firstName + ' is a boy.');
    }
else if (age >= 13 && age < 20)
    {
        console.log(firstName + ' is a teenager.');
    }
else if (age >= 20 && age < 30)
    {
        console.log(firstName + ' is a young man.');
    }
else
    {
        console.log(firstName + ' is a man.');
    }
    */

// ternary operator (3 operands) & switch statements
/*
var firstName = 'John';
var age = 33;
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

var job = 'instructor';
switch (job)
    {
        case 'teacher':
        case 'instructor':
            console.log(firstName + ' teacher kids how to code.');
            break;
        case 'driver':
            console.log(firstName + ' drives an Uber in Lisbon.');
            break;
        case 'designer':
            console.log(firstName + ' designs beautiful websites.');
            break;
        default:
            console.log(firstName + ' does something else.');
    }

switch(true)
    {
        case age < 13:
            console.log(firstName + ' is a boy');
            break;
        case age >= 13 && age < 20:
            console.log(firstName + ' is a teenager.');
            break;
        case age >= 20 && age < 30:
            console.log(firstName + ' is a young man.');
            break;
        default:
            console.log(firstName + ' is a man.');
            break;
    }
    */

// truthy and falsy values and equality operators
/*
// falsy: undefined, null, 0, '' & NaN
// will be converted to false in a true/false condition

// truthy values: all values which are not falsy

var height;
height = 23;
if (height || height === 0)
    {
        console.log('Variable is defined.');
    }
else
    {
        console.log('Variable is not defined.');
    }

if (height == '23')
    {
        console.log('The == operator does type coercion!');
    }
    */

// Coding challenge 2

var numScores = 3;
var johnScore1 = 89, johnScore2 = 120, johnScore3 = 103;
var mikeScore1 = 116, mikeScore2 = 94, mikeScore3 = 123;
var maryScore1 = 97, maryScore2 = 134, maryScore3 = 105;
var johnAvg = (johnScore1 + johnScore2 + johnScore3) / numScores;
var mikeAvg = (mikeScore1 + mikeScore2 + mikeScore3) / numScores;
var maryAvg = (maryScore1 + maryScore2 + maryScore3) / numScores;
var winner = johnAvg > mikeAvg ? (maryAvg > johnAvg ? 'Mary' : 'John') : (maryAvg > mikeAvg ? 'Mary' : 'Mike');

console.log(winner + "'s team is the winner");