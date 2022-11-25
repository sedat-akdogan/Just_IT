// Functions in JS

//repititive tasks can be solved by using functions

// function greeting() {
//     console.log("hello everyone");
// }
// this function will not execute unless you call it.
// greeting();


// function greet(name, time) {
//     console.log(name + " is a Just IT learner." + " since " + time)
// }

// greet("alperen", "3 months");

// functions with pre-defined parameters

// function show(name, text="how are doing today?") {
//     console.log(name + text);
// }
// show(" adjoa ");
// show(" adjoa, ", "got it? ");

// function sum(num1, num2, num3){
//     return console.log( num1 + num2 + num3);
//     console.log("the piece of code is not reachable!")
// }

// sum(1 ,3, 5);


// first practice

// function compare(num1, num2,num3) {
//     if(num1 > num2 & num1>num3) {
//         return console.log(num1);
//     }
//     if(num2 > num1 & num2>num3) {
//         return console.log(num2);
//     }
//     else {return console.log(num3); }
    
// }

// compare(5, 9, 11);


// // second practice

// function min(a, b, c, d){
//     if (a<b & a<c & a<d) {
//         return a;        
//     } 
//     if(b<a & b<c & b<d) {
//         return b;  
//     } 
//     if(c<a & c<b & c<d) {
//         return c;
//     } 
//     else {return d;}
// }

// console.log(min(3, 5, 7, 9));


// Alert, Prompt, and Confirm

// alert is used to display a message
// it is a built in function and takes a string.
// Alert window = MODEL window

// alert("form submitted");


// Prompt asks for users' input,
// it takes two parameters,
// it returns a string,

// let userName = prompt("What is your name?", "default=Guest");


// Confirm offers two options and take action accordingly,

// let deleteOne = confirm("do you really want to delete the record?");

// if (deleteOne) {
//     console.log("you deleted the record");
// } else {
//     console.log("record saved!");
// }



// Ecercise three;

// create a function that sum all elements regardless of number of arguments:

function addition(arguments) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    console.log(sum);  
}

addition(3, 5);
