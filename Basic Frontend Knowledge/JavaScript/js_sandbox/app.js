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
    city: 'Boston'
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
