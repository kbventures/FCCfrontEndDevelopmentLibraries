// #1 Importing the JSDOM representation of the page.
const page = require('./page');

console.log('Initial Page Body:');
console.log(page.window.document.body.innerHTML);

// #2 Creating a paragraph element
const paragraph = page.window.document.createElement('p');

//#3 Updating the paragraph’s content
paragraph.innerHTML = "Look, I'm a new paragraph";

//#4 Attaching the paragraph to the page
page.window.document.body.appendChild(paragraph);

console.log("Final page body:")
console.log(page.window.document.body.innerHTML);

console.log("Initial contents of the count element");
console.log(page.window.document.getElementById("count").innerHTML);

page.window.document.getElementById('count').innerHTML = 1337;
console.log('Updated contents of the count element:'); 
console.log(page.window.document.getElementById('count').innerHTML);