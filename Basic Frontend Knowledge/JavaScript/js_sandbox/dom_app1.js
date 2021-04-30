// Chapter 3: DOM Manipulation & Events
// DOM: Document Object Model
// A structured representation of a HTML document
// Tree of nodes/elements created by the browser
// JavaScript can be used to read/write/manipulate to the DOM
// Object Oriented Representation 
// Each node has its own set of properties and methods
// Through DOM you can manipulate HTML tags through JavaScript

let val;

val = document;
// val will refer to the entire document

val = document.all;      
// val will return an html collection of the entire document
// contains an array of all html tags used in the document

val = document.all[0];
// Returns the <html> tag of the document, the first tag in the html document 

val = document.all.length;
// Returns the number of elements in the DOM

val = document.head;
// Returns the head of the document
 val = document.body;
 // Returns the body of the document
 val = document.doctype;
 // Returns <!DOCTYPE html>
 val = document.domain;
 // Returns the loop back address
 val = document.URL
 // Returns protocol, loop back address, port, and file name
 val = document.characterSet
 val = document.contentType;

 val = document.forms;
 // Selects all of the form tags in the document, first form would have the index of 0
 val = document.forms[0];
 val = document.forms[0].id;
 // Gets the id of the first form
 val = document.forms[0].method;

 val = document.links;
 // Selects a collection of links in the document
 val = document.links[0];
 // Selects the first link in the document
 val = document.links[0].className;
 // Returns a string of all the classes of links in the document
 val = document.link[0].classList;
 // Returns a collection of all the class names in the document

 val = document.images;
 // Returns a collection of images in the document
 val = document.scripts;
 // Returns a collection of all linked scripts in the document
 val = document.scripts[2].getAttribute('src');
 // Gets the source attribute of the 3rd linked script in the document (name of the file)

 // We cannot use forEach to loop through through the tags in a document to get an array
 // Instead we can use
 let scripts = document.scripts;
 let scriptsArr = Array.from(scripts);
 scriptsArr.forEach(function(script) {
     console.log(script);
 });
// Using this we can loop through each script within the script array

let scripts = document.scripts;
let scritpsArr = Array.from(scripts);
scriptsArr.forEach(function(script) {
    console.log(script.getAttribute('src'));
});
// Using this we can loop through each script and retrieve its source attributes

// DOM SELECTORS FOR SINGLE ELEMENTS
// There are single element selectors and multiple element selectors in vanilla javascript
// Single element selectors can only return single elements and multiple element selectors can return a collection

// document.getElementById();
document.getElementById('task-title');
// Get things from the element
// Gets elements by their id
document.getElementById('task-title').id;
// Returns only the id of the elements when the document searches the element by its id
document.getElementById('task-title').className;
// Returns only the class name of the elements when the document searches the element by its id
// Change Styling
document.getElementById('task-title').style.background = '#333';

// Change styling
document.getElementById('task-title').style.background = '#333';
// Changes task title to be filled in dark grey
document.getElementById('task-title').style.color = '#fff';
// Changes task title to be in white font
document.getElementById('task-title').style.padding = '5px';
// Adds 5px padding to task title
document.getElementById('task-title').style.display = 'none';
// Gets rid of task-title title

// Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'Task List';
// Two ways to change title list both insert a text to an element according to id
document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';
// Changes task-title by inserting html code to element

// Not efficient to call getElementById all the time so we make a shortcut
const taskTitle = document.getElementById('task-title');
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector() another more powerful way to select single elements in the DOM
console.log(document.querySelector('#task-title'));
// Returns the html element by the id name task-title
console.log(document.querySelector('.card-title'));
// Returns the html element by the class name .card-title
console.log(document.querySelector('h5'));
// Returns the first instance of an h5 element within the document
document.querySelector('li').style.color = 'red';
// Changes the font color of the first li into red
document.querySelector('ul li').style.color = 'blue';
// We can use querySelector to manipulate nested elements --> li in ul
document.querySelector('li:last-child').style.color = 'red';
// Using querySelector to manipulate the last li element
document.querySelector('li:nth-child(3)').style.color = 'yellow';
// Using querySelector to manipulate the 3rd li element
document.querySelector('li:nth-child(4)').textContent = "Hello World";
// Changes the text of the 4th li into Hello World
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// Since querySelector can only select single elements only the 1st element will be changed into a gray background

// DOM SELECTORS FOR MULTIPLE ELEMENTS

// document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
// Returns an html collection and each item is going to be in an index just like an array
// Returns an html collection of all and any elements with the class name 'collection-item'
items[0].style.color = 'red';
// Changes the font color of the first 'collection-item' into red
items[3].textContent = 'Hello';
// Can select and manipulate elements like an array

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// Selects all elements with the class name 'collection-item' within the element ul

// document.getElementsByTagName
const lis = document.getElementsByTagName('li');
console.log(lis);
// Returns an html collection of all the lis in the document
console.log(lis[0]);
// Returns the first index of lis can be accessed like arrays
// Html collections can be indexed like arrays but array methods cannot be used on html collections
// To use array methods we can convert HTML collections into arrays
lis = Array.from(lis);
lis.reverse();
// Now we can use the reverse function on the converted HTML collection
lis.forEach(function(li){
    console.log(li.className)
    li.textContent = 'Hello'
});
// Outputs the class name of all li elements within the html document
// And changes the text content of all li elements into Hello

// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');
// Same effect as query selecting all li and returns a node list
items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});
// No need to convert node list into an array to manipulate text content

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
liOdd.forEach(function(li, index){
    li.style.background = '#ccc';
});
// Changes the background of each odd li element into a gray color

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4';
}
// Can be done with a for loop instead of a forEach loop in this case
// Changes the background of each even li element into a light gray color

// TRAVERSING THE DOM

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
// Selects first child of li.collection-item

// Get child nodes
val = list.childNodes;
// Returns a NodeList of childNodes within the ul element
// Within this NodeList line breaks are outputted as text

// Get children element nodes
val = list.children;
// Same as above returns a nodeList of elements within the 
val = list.childNodes[0]
// Returns the first node of the ul element which is #text
val = list.childNodes[0].nodeName;
// Returns the first node of the ul element #text like above
val = list.childNodes[0].nodeType;
// Returns a 3 check which is a type text node

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Comments are included in the nodeList of children nodes
// .children is usually used more than .childNodes
// .children gives the HTML collection of all the elements and can be indexed like arrays
list.children[1].textContent = 'Hello';
// Changes the text content of the 2nd li into Hello
val = list.children[3].children;
// Returns the children of the 4th li child of the list ul which is a link element can index these like an array
list.children[3].children[0].id = 'test-link';
// Creates an id of test-link within the first child node of the 4th child node in the ul list

val = list.firstChild;
// Returns the firstChild of the list regardless if its a text/comment/element returns #text in this case
val = list.firstElementChild;
// Returns the first child of list that is an html element returns li in this case
// In most cases we use this
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
// Returns null if there are no more list items as the previous element sibling

// CREATING ELEMENTS

// Create element
const li = document.createElement('li');
// Add class
li.className = 'collection-item';
// Add id
li.id = 'new-item';
// Add attribute
li.setAttribute('title', 'New Item');
// Create text node and append
li.appendChild(document.createTextNode('Hello World'));
// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = <i class = "fa fa-remove"></i>;
// Append link into li
li.appendChild(link);
// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

// REPLACE ELEMENT

// Create element
const newHeading = document.createElement('h2');
// Add id 
newHeading.id = 'task-title';
// New Text Node
newHeading.appendChild(document.createTextNode('Task List'));
//Get the old heading
const oldHeading = document. getElementById('task-title');
// Get parent
const cardAction = document.querySelector('.card-action');
// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// Remove first list item
lis[0].remove();
// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
let val;

// Classes
val = link.className; // Returns strings of class name
val = link.classList; // Returns a DOMToken list of the class names
val = link.classList[0]; // Returns the first element within a list of class names
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('href');                        // Returns true as the link <a> has an href attribute of #
link.removeAttribute('title');

// EVENT LISTENERS & THE EVENT OBJECT
document.querySelector('.clear-tasks').addEventListener('click', function(e){
    console.log('Hello World');

    e.preventDefault();                                 // Prevents default link behavior so that Hello World stays in the console log # does the same    
});

document.querySelector('clear-tasks').addEventListener('click', onClick);

function onClick(e){
    console.log('Clicked');

    let val;
    val = e;
    // Event target element
    val = e.target;                                     // Returns html element a
    val = e.target.id;                                  // Returns id of link element
    val = e.className;                                  // Returns the className of link element
    val = e.target.classList;                           // Returns a list of class names of the link element
    e.target.innerText = 'Hello';                       // Changes text in button to Hello

    // Event type
    val = e.type;                                       // Returns type of event we are looking for (mouse click)

    // Timestamp
    val = e.timeStamp;

    // Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;
} // Using a named function is cleaner code

// MOUSE EVENTS
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);
// Doubleclick
clearBtn.addEventListener('dblclick', runEvent);
// Mousedown (click and hold)
clearBtn.addEventListener('mousedown', runEvent);
// Mouseup (let go of mouse)
clearBtn.addEventListener('mouseup', runEvent);
// MouseEnter (mouse while holding on click enters into target space)
clearBtn.addEventListener('mouseenter', runEvent);
// Mouseleave (mouse while holding on click leaves a target space)
card.addEventListener('mouseleave', runEvent);
// Mouseover (mouse hovers and enters any space)
card.addEventListener('mouseover', runEvent);
// Mouseout (mouse hovers and leaves any space)
card.addEventListener('mouseout', runEvent);
// Mousemove (Tracks any mouse movement within the element)
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    // this line shows the coordinates of the mouse within the card on the document
    // can be used to know where a character is in a game

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
    // background of the page changes color according to the X and Y coordinates of the mouse
}

// KEYBOARD & INPUT EVENTS
const form = document.querySelector('form');                // Might want to select by class or id if there is more than one form tag
const taskInput = document.getElementById('task');          // Fetching input element from document

taskInput.value = '';                                       // Clears out "Walk the dog" line from input
form.addEventListener('submit', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);                   // Returns EVENT TYPE: submit

    console.log(taskInput.value);                           // Returns the user input value of the form line
    console.log(e.target.value);                            // Logs the every character typed by the user

    e.preventDefault();                                     // Prevents document from redirecting to index.php upon clicking submit
}

// Events we can add for user input
// Keydown
taskInput.addEventListener('keydown', runEvent);            // Document will return event type: keydown with every character typed
// Keyup
taskInput.addEventListener('keyup', runEvent);              // Will fire off when a ket is let go
// Keypress
taskInput.addEventListener('keypress', runEvent);
// Focus
taskInput.addEventListener('focus', runEvent);              // When you click inside an input space and it focuses there
// Blur
taskInput.addEventListener('focus', runEvent);              // When you click outside of an input and it unfocuses
// Cut
taskInput.addEventListener('cut', runEvent);                // Fires an event when the input text was cut
// Paste
taskInput.addEventListener('paste', runEvent);              // Fires an event when the input text was pasted on
// Input
taskInput.addEventListener('input', runEvent);              // Fires off on any input event

// EVENT BUBBLING AND DELEGATION

// Event bubbling --> bubbling up of events through the DOM
document.querySelector('.card-title').addEventListener('click', function(){
    console.log('card title');
});
// To prove the bubbling up of events we also place an event listener on its parents
document.querySelector('.card-content').addEventListener('click', function(){
    console.log('card content');
});
// And prove once again by placing an event lisenter on card-content's parents
document.querySelector('.card').addEventListener('click', function(){
    console.log('card');
});
// And once again
document.querySelector('.col').addEventListener('click', function(){
    console.log('col');
});
// All events will fire off once.card-title's text 'Task List' is clicked

// Event delegation --> Opposite of event bubbling, needed when you have a list of similar elements 
// and when you dynamically insert something in the DOM through JavaScript

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    if(e.target.parentElement.className === 'fa fa-remove'){
        console.log('delete item')
    }
}
// Ensures that every x icon for each element works and that not only the top icon works
// className only checks for one class name where as classList checks to see if name exist within the class list
// Using classList is better to target links

function deleteItem(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}
// When x icon is clicked the referred item is removed

// LOCAL & SESSION STORAGE
// set local storage item

localStorage.setItem('name', 'John');
// In dev tools go to Application -> Storage -> Local Storage to find stored name and key
// Set session storage item
sessionStorage.setItem('name', 'Beth');
// When the browser is restarted John's data will persist and Beth's data will be lost
// Session storage is lost when the session is ended
// remove from storage
localStorage.removeItem('name');
// get from storage
const name = localStorage.getItem('name');
// clear local storage and turns values to null
localStorage.clear();

// put user input into storage
document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    localStorage.setItem('task', task);
    alert('Task saved');

    e.preventDefault();
});
// The problem with this is that only one input can be added to the storage as the previous input will be replaced every time

// put user input into storage
document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task saved');

    e.preventDefault();
});
// Let's user add more than one task without it being replaced

// Presents items in the local Storage as an array so we can iterate through it to fetch items
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
})