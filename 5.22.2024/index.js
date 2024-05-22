// Assignment flaw 
const ps = require("prompt-sync");

const jsIn = ps();
let name = jsIn("What is your name?");
console.log("Hi", name);
const age = parseInt(jsIn("How old are you?"));
console.log("Ok,",name,"Which means you were born in the year",JSON.stringify((2024- age )));