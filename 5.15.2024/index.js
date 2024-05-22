// using the concept of node js/ js write a simple program on you machine to determine the highest number in an array
// The program should sort and print in descending order

//Write a program to carry out a grading system 
//blah blah blah
//Then teh program shiould flag error if it is out of range

const array = [35,54,32,67,4,33,44,55,36,65,80,101];
var temp  = [35,54,32,67,4,33,44,55,36,65,80, 101];
var highest = 0;
var sortedArray = temp.sort((a,b)=>(b-a))
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (highest < element) {
        highest = element
    }
}
console.log("Highest in the array:",highest) 
console.log("Sorted array",sortedArray)


for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element>= 0 && element  <= 39) {
        console.log(`Score ${(i + 1)}which is ${array[i]} is F`)
    } else    if (element >= 40 && element <= 44) {
        console.log(`Score ${(i + 1)}which is ${array[i]} is E`)
    } else    if (element >= 45 && element <= 49) {
        console.log(`Score ${(i + 1)}which is ${array[i]} is D`)
    } else    if (element >= 50 && element <= 59) {
        console.log(`Score ${(i + 1)}which is ${array[i]}  is C`)
    } else    if (element >= 60 && element <= 69) {
        console.log(`Score ${(i + 1)}which is ${array[i]} is B`)
    } else    if (element >= 70 && element <= 100) {
        console.log(`Score ${(i + 1)}which is ${array[i]} is A`)
}   else{
    console.log(`Score ${(i+1)} which is ${array[i]} is not in the range of 0-100`)
}
}
//destnd2bgr8t@gmail.com