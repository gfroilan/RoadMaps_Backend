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