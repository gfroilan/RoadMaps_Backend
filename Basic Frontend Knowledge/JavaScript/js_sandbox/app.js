// Using the console
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});
console.error('This is some error');
//console.clear();
console.warn('This is a warning');
console.time('Hello');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
console.timeEnd('Hello');

// var, let, const
var name = 'John Doe';
console.log(name); 
name = 'Steve Smith';
console.log(name);

// Init var undefined
var greeting;       
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// A variable name can only include letters, numbers, _, $
// A variable name cannot start with a number
// Use Camel Case for multi-word variables
var firstName = 'John';
// Or use underscore convention
var first_name = 'Sara';

// LET
let name;
name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// CONST
// Cannot reassign const variables and cannot leave const variables
// undefined, unassigned
// Following are exceptions

const person = {
    name: 'John',
    age: 30
}
person.name = 'Sara';
console.log(person);
// Variables in const objects can be reassigned in this case
// But the object itself cannot be reassigned

const numbers = [1,2,3,4,5];
numbers.push(6);
// New values can be added into a const array
// But we cannot reassign a const array like this
numbers = [1,2,3,4,5,6];

/* 
Primitive Data Types:
- Stored directly in the location the variable accesses
- Stored on the stack
- String, Number, Booloean, Null, Undefined, Symbols
- When you access primitive data you access it by its actual value

Reference Data Types:
- Accessed by reference
- Objects that are stored on the heap
- A pointer to a location in memory
- Arrays, Object Literals, Functions, Dates, Anything Else

JavaScript is a Dynamically Typed Language
- Types are associated with values not variables
- The same variable can hold multiple types
- We do not need to specify types
- Most other languages are statically typed (Java, C#, C++)
- There are supersets of JS and addons to allow static typing
(Typescript, Flow)
*/

const name = 'John Doe';
console.log(typeof name);

// Symbol
const sym = Symbol();
console.log(typeof sym);

// Arrays
const hobbies = ['movies', 'music']

// Object literal
const address = {
    city: 'Boston',
    state: 'MA'
}

// Date
const today = new Date();

// Type conversion: Number to a string
let val;
val = String(5);
val = String(4+4);
// val = '8', of type string and string length 1
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);

// toString() method
val = (5).toString();
val = (true).toString();

// String to number using Number()
val = Number('5');
// Bool to number
val = Number(true);
// value of val will be 1
val = Number(false);
// value of val will be 0
val = Number(null);
// value of null will be 0
val = Number('hello');
// value of 'hello' will be NaN
val = Number([1,2,3]);
// NaN

// String to number using parseInt()
val = parseInt('100');
// 100
val = parseInt('100.30');
// 100 since string is parsed as an integer not a float
val = parseFloat('100.30');
// 100.3 since string is parsed as a float
val = parseFloat('100.30').toFixed(2);
// 100.30 since using toFixed(2) ensures that result is shown with 2 decimal places

// Type coercion (done by js itself)
const val1 = 5;
const val2 = 6;
const sum = val1 + val2;
// sum will have the value 11

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
// Resulting sum will be 56

// Math Objects
val = Math.PI;
// 3.14... value of pi
val = Math.E;
// 2.71... vlaue of euler's number
val = Math.round(2.8);
// Will round up to 3
val = Math.ceil(2.4);
// Will round up to 3
val = Math.floor(2.8);
// Will round down to 2
val = Math.sqrt(64);
// 8
val = Math.abs(-3);
// 3
val = Math.pow(8, 2);
// 64
val = Math.min(2,33,1,6,5,7);
// 1
val = Math.max(1,4,67,4,33,34);
// 67
val = Math.random();
// outputs a random float number
val = Math.floor(Math.random() * 20 + 1);
// always outputs a random integer between 1 and 20

// Strings
const firstName = 'William';
const lastName = 'Johnson';
// Concatentation
val = firstName + ' ' + lastName;
// Append
val = 'Brad';
val += 'Traversy';
// Escaping
val = 'That\s awesome, I can/t wait';
// Length
val = firstName.length;
// 7
val = firstName.concat(' ', lastName);
vall = firstName.toUpperCase();
// WILLIAM
val = firstName.toLowerCase();
// william
// Indexing strings
val = firstName[0];
// w
val = firstName.indexOf('l');
// 2 gets index for first appearance of given character
val = firstName.lastIndexOf('l');
// 3 method starts indexing from the end of the string
val = firstName.charAt('2');
// l gets character at index 2
val = firstName.charAt(firstName.length - 1);
// m returns the last character of the string
val = firstName.substring(0, 4);
// Will gets a substring of William
val = firstName.slice(0, 4);
// Returns Will like above
val = firstName.slice(-3);
// iam gets a substring of the last 3 characters starts from the back
const str = 'Hello there my name is Brad'
val = str.split(' ');
// ["Hello", "there", "my", "name", "is", "Brad"];
// Splits string based on spaces
val = str.replace('Brad', 'Jack');
// Hello there my name is Jack
// Replaces a part of a string with a new part
val = str.includes('Hello');
// true
val = str.includes('foo');
// false

// Template Literals
const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;
// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';
document.body.innerHTML = html;
// With template strings (es6)
function hello() {
    return 'hello';
}

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>`;
// Can be helpful when making html tables

// Arrays and array method
// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date];
let val;
val = numbers.length;
// 7
val = Array.isArray(numbers);
// true
val = Array.isArray('hello');
// false
val = numbers[3];
// 23
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);
// 5
// Mutating arrays
numbers.push(250);
// numbers = [43,56,100,23,44,36,5,250]
// Add unto front
numbers.unshift(120);
// numbers = [120,43,56,100,23,44,36,5,250]
// Take off from end
numbers.pop();
// numbers = [120,43,56,100,23,44,36,5]
// Take off from front
numbers.shift();
// numbers = [43,56,100,23,44,36,5]
// Splice values
numbers.splice(1,1);
// numbers = [43,10023,44,36,5]
// Splices off from index 1 to 1
// Reverse
numbers.reverse();
// numbers = [5,36,44,43];
// Concatenate array
val = numbers.concat(numbers2);
// Concatenates 2 arrays together
// Sorting arrays
val = fruit.sort();
// ["Apple", "Banana", "Orange", "Pear"];
// Sorts a string array in alphabetical order
val = numbers.sort();
// numbers = [100,23,36,43,44,5,56];
// Sorts number array only according to its first number
// Use the "compare function"
val = numbers.sort(function(x, y) {
    return x - y;
});

// Reverse sort
val = numbers.sort(function(x,y) {
    return y - x;
})

// Find 
function under50(num){
    return num < 50;
}

val = numbers.find(under50);
// Function finds first number under 50 and returns it which is 43

const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function() {
        return 2017 - this.age;
    }

}

val = person.firstName;
// Steve
val = person['firstName'];
// Steve 
val = person.age;
// 30
val = person.hobbies;
// ["music", "sports"]
val = person.hobbies[1];
// sports 
val = person.address.state;
// FL
val = person.address['city'];
// Miami
val = person.getBirthYear();
// 1987

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}
// John
// Mike

// Dates and Time
const today = new Date();
// Today's date and time with type object
val = today.toString();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');
// Different ways to assign values to a Date object
val = today.getMonth();
// Returns month in integer ex. 10 except 0 based --> January is 0
val = today.getDate();
// Returns date only and not 0 based
val = today.getDay();
// Returns day, 0 bassed, Thursday --> 4, Sunday --> 0
val = today.getFullYear();
// Returns full year ex. 2017
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
// Sets birthdate to Mar 12, 1985

// Conditionals
const id = 100;

// EQUAL TO (types don't matter)
if (id == 100) { 
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}
// Result: CORRECT

// NOT EQUAL TO
if (id != 100) { 
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}
// Result: CORRECT

// EQUAL TO VALUE AND TYPE
const id = '100';
if (id === 100) { 
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}
// Result: INCORRECT (since id is a string compared to a number)

// NOT EQUAL TO VALUE AND TYPE
if (id !== 100) { 
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}
// Result: CORRECT (since id and number are different in type)

if (typeof id !== 'undefined'){
    console.log(`The ID is ${id}`);
} else {
    console.log('NO ID');
}
// Conditional prints NO ID if id variable is undefined

// GREATER OR LESS THAN
if(id > 200){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}
// Works with >=, <, <=

// IF ELSE
const color = 'yellow';

if(color == 'red'){
    console.log('Color is red');
} else if(color == 'blue'){
    console.log('Color is blue');
} else {
    console.log('Color is not red or blue');
}
// Result: Color is not red or blue

// LOGICAL OPERATORS

const name = 'Steve';
const age = 20;
// LOGICAL AND
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}
// Result: Steve is an adult

// OR ||
if (age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
// id = 100
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');
// Result: CORRECT since id is 100

// WITHOUT BRACES
if (id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');
// conditional runs as normal

// Switch Statements
const color = 'red';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}
// Result: Color is red
// Switch is recommended when working with a lot of cases

let day;

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);

// FUNCTION DECLARATIONS

function greet(firstName, lastName){
    return 'Hello'+ firstName + ' ' + lastName;
}
console.log(greet('John', 'Doe'));
// To print function output in console log
// If there is no arguments/ parameters passed result: Hello undefined undefined

function greet(firstName, lastName){
    if(typeof firstName === 'undefined'){firstName = 'John'}
    if(typeof lastName === 'undefined'){lastName = 'Doe'}
    return 'Hello' + firstName + ' ' + lastName;
} // for es5

console.log(greet());
// Result: Hello John Doe
console.log(greet('Steve', 'Smith'));
// Result: Hello Steve Smith

// es6 way of declaring a default
function greet(firstName = 'John', lastName = 'Doe'){
    if(typeof firstName === 'undefined'){firstName = 'John'}
    if(typeof lastName === 'undefined'){lastName = 'Doe'}
    return 'Hello' + firstName + ' ' + lastName;
}
// Works the same way as the previous function

// FUNCTION EXPRESSIONS
const square = function(x = 3){
    return x*x;
};

console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function(){
    console.log('IIFE Ran..');
})();
// Result: IIFE Ran (no need to call function)

(function(name){
    console.log('Hello ' + name);
})('Brad');
// Result: Hello Brad

// PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}
// Adds a add and edit function to the todo object

todo.delete = function(){
    console.log('Delete todo...');
}
// Creates a new function delete to the todo object

todo.add();
// Result: Add todo..
todo.edit(22);
// Result: Edit todo 22
todo.delete();
// Result: Delete todo...

// FOR LOOP

// can't use var or const inside a loop only let
for(let i = 0; i < 10; i++){
    console.log(i);
}
// Loop counts from 0 to 9 in the console log

for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my favorite number');
        continue;
    }
    console.log('Number ' + 1);
}
// Loop counts from 0 to 9 in the console log
// When i equals to 2 result: 2 is my favorite number
// By putting in continue; the console log will not print out 2 when counting and will move on to the next iteration

for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my favorite number');
        continue;
    }
    if (i == 5){
        console.log('Stop the loop');
        break;
    }
    console.log('Number ' + i);
}
// Loop only counts from 0 to 4 in the console log by using break if i = 5, code will break out of the for loop without printing 5
// When i = 2, console log will print out: 2 is my favorite number without printing out 2
// At the end of counting after 4 console log will print out: Stop the loop

// WHILE LOOP
// Use for loop when you know how many iterations you need to run and use a while loop when you don't know how many iterations you need to run

let i = 0;

while(i < 10){
    console.log('Number ' + i);
    i++;
}
// While loop counts from number 0 to number 9

// DO WHILE LOOP

let i = 0;

do {
    console.log('Number ' +  i);
    i++;
}

while(i < 10);
// Loop counts from number 0 to number 9
// The do condition will run no matter what, even if the while condition isn't met

// if we let i = 100;
// Result: Number 100

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}
// Result: Ford Chevy Honda Toyota

// FOREACH
cars.forEach(function(car){
    console.log(car);
});
// Result: Ford Chevy Honda Toyota
// Recommended to use a forEach loop when looping through an array

// MAP
const users = [
    {id:1, name:'John'},
    {id: 2, name: 'Sarah'},
    {id: 3, name: 'Karen'}
];

const ids = users.map(function(user){
    return user.id;
});
console.log(ids);
// Returns an array of user ids in the array id

cars.forEach(function(car, index){
    console.log(`${index} : ${car}`);
});
// Result:
// 0: Ford
// 1: Chevy
// 2: Honda
// 3: Toyota

// FOR IN LOOP
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(x);
}
// Result:
// firstName
// lastName
// age
// Prints in the console log the values of the keys in the object user 

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}
// Result:
// firstName : John
// lastName : Doe
// age : 40
// Prints in the console log the values of the keys in the object user and the values of the objects assigned to the keys 

// Window is the global object in client side JavaScript
// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
window.alert('Hello World');
// or
alert('Hello World');
// Creates a popup box in the window that alerts the user

// Prompt
const input = prompt();
alert(input);
// Creates a popup box in the window with an input text box
// Whatever the user enters into the prompt will pop back out in an alert with th text that the user inputted

// Confirm
if(confirm('Are you sure')){
    console.log('YES');
} else {
    console.log('NO');
}
// Creates a confirmation box in the window
// If the user clicks yes, then the console will print YES, if the user clicks cancel, then the console will print NO
// Not recommended to use these for web dev use a boostrap alert instead

let val;

// Outer height and width
val = window.outerHeight;
console.log(val);
// Prints the height of the window in the console log
// Height dynamically changes when the window size is adjusted

val = window.outerWidth;
console.log(val);
// Prints the width of the window
// Outer means the outer with of the window

// Inner height and width (within the scroll bars)
val = window.innerHeight;
val = window.innerWidth;
// Height purely counts window size and doesn't count console height

// Scroll points
val = window.scrollY;
// Gets position of scroll bar on the Y axis
val = window.scrollX;
// Gets position of scroll bar on the X axis
// Good to use when animations start on a page as the user scrolls down the page

// Location Object
val = window.location;
// Prints out location information in the console (host ip, hostname, port, etc)
val = window.location.hostname;
// Gets hostname ip address
val = window.location.port;
// Gets port number
val = window.location.href;
// Gets protocol, hostname, and port
val = window.location.search;
// Gets user's search parameters (what they searched for in the browser)
window.location.href ='http://google.com';
// Redirects the user to google main page
window.location.reload();
// Constantly reloads the page (not very helpful) (used in a function and not in a global scope so that the page doesn't keep on reloading)

// History Object
window.history.go(-1);
// Go to the site loaded before current site
// -2 would go to 2 site before current site
val = window.history.length;
// Shows how many sites you have behind you

// Navigator Object
val = window.navigator;
// Shows navigator object (includes: appName, appCodeName, cookieEnabled, etc)
val = window.navigator.appName;
// Shows navigator appName Netscape or IE
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

// Block Scope with let & const
// Global Scope
var a = 1;
let b = 2;
const c = 3;

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);
}

test();

console.log('Global Scope: ', a, b, c);

// Result:
// Function Scope: 4 5 6 
// Global Scope: 1 2 3 
// Variables are differnt because they are all of different scopes

// Block Scope
var a = 1;
let b = 2;
const c = 3;

if(true) {
    // Block Scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('If Scope: ', a, b, c);
}

console.log('Global Scope: ', a, b, c);

// Result:
// If Scope: 4 5 6 
// Global Scope: 4 2 3 
// Variable declared by var can be globally changed even within a block scope (be it within an if statement, or a for loop) 