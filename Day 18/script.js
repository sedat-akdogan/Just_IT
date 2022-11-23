console.log("Day 18 work!!");

// String immutibility in JS

// once a string is created, it cannot be changed. 

//string methods will create a new string, original string remains unchanged.

let str1 = "this is Just IT!";

let str2 = str1.replace("IT", "Apple");

console.log(str1);
console.log(str2);

str1 = str1.concat(" is it better than Apple!");
console.log(str1);
// trim(): it remove the white space from beginning and end of the string.


str2 = "         there is some white space among me        ..         ";
console.log(str2);
str3 = str2.trim();

console.log(str3);

