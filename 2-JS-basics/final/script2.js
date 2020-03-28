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

/*
var numScores = 3;
var johnScore1 = 89, johnScore2 = 120, johnScore3 = 103;
var mikeScore1 = 116, mikeScore2 = 94, mikeScore3 = 123;
var maryScore1 = 97, maryScore2 = 134, maryScore3 = 105;
var johnAvg = (johnScore1 + johnScore2 + johnScore3) / numScores;
var mikeAvg = (mikeScore1 + mikeScore2 + mikeScore3) / numScores;
var maryAvg = (maryScore1 + maryScore2 + maryScore3) / numScores;
var winner = johnAvg > mikeAvg ? (maryAvg > johnAvg ? 'Mary' : 'John') : (maryAvg > mikeAvg ? 'Mary' : 'Mike');

console.log(winner + "'s team is the winner");
*/

// Functions

/*
function calculateAge(birthYear) 
{
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn);
console.log(ageMike);
console.log(ageJane);

function yearsUntilRetirement(birthYear, firstName)
{
    var age = calculateAge(birthYear);
    var retirement = 65 - age;
    if (retirement > 0)
        {
            console.log(firstName + ' retires in ' + retirement + ' years.');
        }
    else
        {
            console.log(firstName + ' is already retired.');
        }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

// Function statements & expressions
/*
// Function declaration
//function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName)
{
    switch(job)
        {
            case 'teacher':
                return firstName + ' teaches kids how to code.'; // Function immediately finishes here
            case 'driver':
                return firstName + ' drives a cab in Lisbon.';
            case 'designer':
                return firstName + ' designs beautiful websites.';
            default:
                return firstName + ' does something else.';
        }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

// Arrays
/*
// Initialise new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';

console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
// Adds to end of array
john.push('blue');
// Adds to start of array
john.unshift('Mr');
console.log(john);

// Removes element from end
john.pop()
// Removes element from beginning
john.shift();
console.log(john);

// Returns which position the value is in
// Returns -1 if it is not in the array
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
*/

// Coding challenge 3
/*
var bills = [124, 48, 268];

function tipCalculate(bill)
{
    if (bill < 50)
        {
            return bill * 0.2;
        }
    else if (bill >= 50 && bill < 200)
        {
            return bill * 0.15;
        }
    else
        {
            return bill * 0.1;
        }
}

var tips = [tipCalculate(bills[0]), tipCalculate(bills[1]), tipCalculate(bills[2])];
var finalPaid = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(tips);
console.log(finalPaid);*/

// Objects & properties
/*
// Objects use curly braces
// Object literal
var john = 
    {
        firstName: 'John', // Key value pair, firstName is property
        lastName: 'Smith',
        birthYear: 1990,
        family: ['Jane', 'Mark', 'Bob', 'Emily'],
        job: 'teacher',
        isMarried: false
    };

console.log(john.firstName);
// Key name
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// New object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane); */

// Objects & methods
/*
var john = 
    {
        firstName: 'John', // Key value pair, firstName is property
        lastName: 'Smith',
        birthYear: 1992,
        family: ['Jane', 'Mark', 'Bob', 'Emily'],
        job: 'teacher',
        isMarried: false,
        calcAge: function (){
            // Method of John
            this.age = 2018 - this.birthYear;
        }
    };

john.calcAge();
console.log(john); */

// coding challenge 4
/*
var john = {
    name: 'John',
    mass: 80,
    height: 1.8,
    calcBmi: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

var mark = {
    name: 'Mark',
    mass: 88,
    height: 1.9,
    calcBmi: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

john.calcBmi();
mark.calcBmi();

var highestBMI = new Array();

if (john.bmi > mark.bmi){
    highestBMI[0] = john.name;
    highestBMI[1] = john.bmi;
}
else if (john.bmi < mark.bmi){
    highestBMI[0] = mark.name;
    highestBMI[1] = mark.bmi;
}
else{
    highestBMI[0] = 'Both people';
    highestBMI = john.bmi;
}

console.log(highestBMI[0] + ' has the highest BMI of ' + highestBMI[1] + '.'); */

// Loops & iteration
/*
for (var i = 0; i < 10; i++){
    console.log(i);
}*/
/*
var john = ['John', 'Smith', 1990, 'designer', false];*/
/*
for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}*/
/*
var i = 0;
while (i < john.length){
    if (typeof john[i] !== 'string') { // !== means different
            continue;
        }
    console.log(john[i]);
    i++;
}*/

// Looping backwards
/*
for (var i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
}
*/
// Continue & break statements
// continue - stops current iteration of loop, continues with the next
// break - stops all iterations of the loop */

// Coding challenge 5
/*
var billsJohn = {
    subtotals: [124, 48, 268, 180, 42],
    tips: new Array(),
    totals: new Array(),
    calcTips: function (){
        for (var i = 0; i < this.subtotals.length; i++){
            var percentage;
            switch (true){
                case (this.subtotals[i] < 50):
                    percentage = .2;
                    break;
                case (this.subtotals[i] >= 50 && this.subtotals[i] <= 200):
                    percentage = .15;
                    break;
                case (this.subtotals[i] > 200):
                    percentage = .1;
                    break;
            }
            this.tips[i] = this.subtotals[i] * percentage;
            this.totals[i] = this.subtotals[i] + this.tips[i];
        }
    }
}

var billsMark = {
    subtotals: [77, 375, 110, 45],
    tips: new Array(),
    totals: new Array(),
    calcTips: function (){
        for (var i = 0; i < this.subtotals.length; i++){
            var percentage;
            switch (true){
                case (this.subtotals[i] < 100):
                    percentage = .2;
                    break;
                case (this.subtotals[i] >= 100 && this.subtotals[i] <= 300):
                    percentage = .1;
                    break;
                case (this.subtotals[i] > 300):
                    percentage = .25;
                    break;
            }
            this.tips[i] = this.subtotals[i] * percentage;
            this.totals[i] = this.subtotals[i] + this.tips[i];
        }
    }
}

billsJohn.calcTips();
billsMark.calcTips();
var totalTipsJohn = 0, totalTipsMark = 0;

for (var i = 0; i < billsJohn.subtotals.length; i++){
    console.log(billsJohn.tips[i] + ' ' + billsJohn.totals[i]);
    totalTipsJohn += billsJohn.tips[i];
}
var averageTipsJohn = totalTipsJohn / billsJohn.tips.length;

for (var i = 0; i < billsMark.subtotals.length; i++){
    console.log(billsMark.tips[i] + ' ' + billsMark.totals[i]);
    totalTipsMark += billsMark.tips[i];
}
var averageTipsMark = totalTipsMark / billsMark.tips.length;

if (averageTipsJohn > averageTipsMark){
    console.log('John paid the most tips at an average of $' + averageTipsJohn);
}
else if (averageTipsMark > averageTipsJohn) {
    console.log('Mark paid the most tips at an average of $' + averageTipsMark);
}
else{
    console.log('Both John & Mark paid the same amount of tips of $' + averageTipsJohn);
} */