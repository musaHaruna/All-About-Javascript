let firstNumber = 4
let secondNumber = 3
let sum = firstNumber + secondNumber

console.log(firstNumber)
firstNumber = 5
console.log(firstNumber)
firstNumber = 7
console.log(firstNumber)

////////////////////////////////////
// Linking a JavaScript File
let js = '                   amazing'
console.log(40 + 8 + 23 - 10)

////////////////////////////////////
// Values and Variables
console.log('(James)')
console.log(23)

let Name = 'Musa'

console.log(Name)
console.log(Name)
console.log(Name)

// Variable name conventions
let musa_haruna = 'JM'

let person = 'James'
let PI = 3.1415

let myFirstJob = 'Coder'

let myCurrentJob = 'Teacher'

let job1 = 'programmer'
let job2 = 'teacher'

console.log(myFirstJob)

////////////////////////////////////
// Data Types
let javascriptIsFun = true
console.log(javascriptIsFun)

// console.log(typeof true);
console.log(typeof javascriptIsFun)
// console.log(typeof 23);
// console.log(typeof 'Musa');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun)

let year
console.log(year)
console.log(typeof year)

year = 1991
console.log(typeof year)

console.log(typeof null)

////////////////////////////////////
// let, const and var
let age = 30
age = 31

const birthYear = 1991

lastName = 'Haruna'
console.log(lastName)

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037
const ageMusa = now - 1991
const ageSarah = now - 2018
console.log(ageMusa)
console.log(ageSarah / 10)
console.log(ageMusa * 2, ageSarah / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// Assignment operator
x += 10 // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++ // x = x + 1
x--
x--
console.log(x)

// Comparison operators
console.log(ageJonas > ageSarah) // >, <, >=, <=
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18

console.log(now - 1991 > now - 2018)

////////////////////////////////////
// Operator Precedence
const ageNow = 2037
const ageJonas = ageNow - 1991

console.log(now - 1991 > now - 2018)

let x, y
x = y = 25 - 10 - 5 // x = y = 10, x = 10
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge)

////////////////////////////////////
// Strings and Template Literals
const yourName = 'Musa'
const yourjob = 'teacher'
const yourbirthYear = 1991
const futureyear = 2037

const musa =
  "I'm " +
  firstName +
  ', a ' +
  (futureyear - yourbirthYear) +
  ' year old ' +
  job +
  '!'
console.log(musa)

const jonasNew = `I'm ${firstName}, a ${
  futureyear - yourbirthYear
} year old ${job}!`
console.log(jonasNew)

console.log(`Just a regular string...`)

console.log(
  'String with \n\
multiple \n\
lines'
)

console.log(`String
multiple
lines`)

////////////////////////////////////
// Taking Decisions: if / else Statements
const yourAge = 15

if (age >= 18) {
  console.log('Sarah can start driving license 🚗')
} else {
  const yearsLeft = 18 - age
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const formerYear = 2012

let century
if (formerYear <= 2000) {
  century = 20
} else {
  century = 21
}
console.log(century)

/*


////////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

////////////////////////////////////
// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

/*

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}

////////////////////////////////////
// The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

////////////////////////////////////
// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/
