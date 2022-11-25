// arrays -  Sorting out arrays:


// let Arr = [51,66, 78, 99, 23, 55, 5, 6, 8, 9];
// console.log(Arr.sort(function (a, b) {return a-b}));

// // function (a, b) {return a-b}; to return numbers in terms of 
// // math ascending order.

// let arr2 = new Array(3, 33, 56); // this arrays length is 3

// let arr3 = new Array(3); // this arrays length is also 3 !!!

// // the above array will create 3 empty elements !!!


// let name1 = "google";

// let arr4 = Array.from(name1); // this is the "array from string" method.
// console.table(arr4); 
// console.log(typeof arr4);

// // OBJECTS

// let employee = {
//     name1: "sultan",
//     salary: 1000,
//     language: "English",
//     kids: 3
// }

// console.table(employee);

// // How to access any element of the object?

// console.log(employee.name1);
// console.log(employee.salary);

// console.log(employee["kids"]);

// // if there any space in any key of the object, we must use [" "] access method. 

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

function compare(num1, num2,num3) {
    if(num1 > num2 & num1>num3) {
        return console.log(num1);
    }
    if(num2 > num1 & num2>num3) {
        return console.log(num2);
    }
    else {return console.log(num3); }
    
}

compare(5, 9, 11);


// second practice

function min(a, b, c, d){
    if (a<b & a<c & a<d) {
        return a;        
    } 
    if(b<a & b<c & b<d) {
        return b;  
    } 
    if(c<a & c<b & c<d) {
        return c;
    } 
    else {return d;}
}

console.log(min(3, 5, 7, 9));
