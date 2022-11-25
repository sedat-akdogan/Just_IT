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
// // this function will not execute unless you call it.
// greeting();


function greet(name) {
    console.log(name + " is a Just IT learner.")
}

greet("helen");