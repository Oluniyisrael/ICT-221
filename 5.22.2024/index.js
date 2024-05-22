// Assignment flaw 
const ps = require("prompt-sync");
const jsIn = ps();

// let name = jsIn("What is your name?");
// console.log("Hi", name);
// const age = parseInt(jsIn("How old are you?"));
// console.log("Ok,",name,"Which means you were born in the year",JSON.stringify((2024- age )));
// // console.log(`Your age is ${age}`);

// into of array
var array=[];
const numberOfArray = jsIn("How many numbers do you want to store?");
for (let i = 0; i < numberOfArray; i++) {
    array[i]= parseInt(jsIn(`Input into array[${i}]`));
}
// console.log(array)
// console.log(array.length)

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log("Array [",index,"] = ", element);
}
var sum = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum += element;
    
}
console.log("Sum:", sum);