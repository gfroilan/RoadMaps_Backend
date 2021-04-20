// JavaScript Crash Course for beginners by Traversy Media

// String, Numbers, Boolean, null, undefined

const name = 'John';
const age = 30;

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;

// String properties and methods
const s = 'Hello World';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));

const s = 'technology, computers, it, code';
console.log(s.split(', '));

//Arrays- variables that hold multiple values

const numbers = new Array(1,2,3,4,5);                                           // Array constructor
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];                                  // fruits = ['apples', 'oranges', 'pears', 10, true] also good
console.log(fruits);
console.log(fruits[1]);

fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));

// Object Literals

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName } = person;
console.log(firstName);

const { firstName, lastName, address: { city } } = person;
console.log(city);

person.email = 'john@gmail.com'
console.log(person);

// Array of objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For and while loops and loop through arrays

for(let i = 0; i < 10; i++) {
    console.log(i);
}

for(let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

// For Of loop

for(let todo of todos) {
    console.log(todo);
    console.log(todo.text);
}

// High Order Array methods: forEach, map, filter

todos.forEach(funtion(todo) {
    console.log(todo.text);
});

const todoText = todos.map(funtion(todo) {
    return todo.text;                                                           // Returns an array of todo text
});
console.log(todoText);

const todoCompleted = todos.filter(funtion(todo) {
    return todo.isCompleted == true;                                            // Returns an array of completed tasks
});
console.log(todoCompleted);

const todoCompleted = todos.filter(funtion(todo) {
    return todo.isCompleted == true;                                            // Returns an array of completed tasks
}).map(function(todo) {
    return todo.text                                                            // Returns an array of the text of the array of completed tasks
})
console.log(todoCompleted);

// Conditionals

const x = 10;

if (x == 10) {                                                                  // Returns true
    console.log('x is 10');
}

const x = '10';

if (x == 10) {                                                                  // Also returns true
    console.log('x is 10');
}

const x = '10';

if (x === 10) {                                                                  // Returns false (triple equal sign checks if same datatype)
    console.log('x is 10');
} else{
    console.log('x is NOT 10');
}

const x = 20;

if (x === 10) {                                                                  // Returns false even if same datatype not same number
    console.log('x is 10');
} else if(x > 10) {
    console.log('x is greater than 10');                                         // Returns true
} else{
    console.log('x is less than 10');                                            // Returns false
}

const q = 4;
const w = 10;

if(q > 5 || w > 10) {
    console.log('q is more than 5 or w is more than 10');
}

// Ternary operator (shorthand if statement)

const e = 10;

const color = e > 10 ? 'red' : 'blue';
console.log(color);                                                             // Returns blue bc not true

// Switches

const r = 10;
const color = r > 10 ? 'red' : 'blue';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

// Functions

function addNums(num1, num2) {
    console.log(num1 + num2);
}

addNums(5, 4);                                                                  // Returns 9

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;                                                         // We usually do return instead of console.log
}

console.log(addNums(5, 5));                                                     // Return 10 despite the default values

// Arrow Functions

const addNums = (num1 = 1, num2 = 1) => {
    return num1 + num2;                                                         // Same as above
}

const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);               // Same as above

const addNums = (num1 = 1, num2 = 1) => num1 + num2;                            
console.log(addNums(5, 5));                                                      // Same as above

todos.forEach((todo) => console.log(todo));

// Object Oriented Programming

// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
console.log(person1);

const person2 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person2.firstName);                                                     // Returns Mary

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);                                                       // Passes dob as a date object
}

console.log(person2.dob);
console.log(person2.dob.getFullYear());

// Add methods to functions
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);                                                       // Passes dob as a date object
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person1.getBirthYear());
console.log(person1.getFullName());

// Prototypes
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);                                                       // Passes dob as a date object
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

console.log(person2.getFullName());

// Class
class Person {
    constructor (firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// DOM Document Object Model
// Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

// Multiple Element
console.log(document.querySelectorAll('.item')); 
console.log(document.getElementsByTagName('li'));

// Loop 
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// Manipulating the DOM / changing things in the DOM (UI)
const ul = document.querySelector('.items');
ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn');
btn.style.background = 'red';

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
});

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});

btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});

// Application: Form Script
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value == '' || emailInput.value == '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);                                          // Makes error message disappear after 3 seconds
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
    console.log(nameInput.value);
}