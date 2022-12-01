console.log(Math.round(3.5)); // up or down

console.log(Math.floor(3.9)); // round down

console.log(Math.ceil(5.1)); // round up

console.log(Math.trunc(5.7)); // The integer part of the number

console.log(Math.random()); //between 0 and 1

//You have to generate a whole number between 1 and 10

// Form vadiation exercise

function validationForm() {
  let name1 = document.getElementById("fname");
  let name2 = document.getElementById("lname");

  if (name1 == "") {
    alert("You must be filled out first Name");
    return false;
  } else if (name2 == "") {
    alert("you must  be filled out last name");
    return false;
  } else return true;
}



// function validateForm() {
//     let x = document.forms["validation"]["fname"].value;
//     let y = document.forms["validation"]["lname"].value;
//     if (x == "") {
//         alert("You must be filled out first Name");
//         return false;
//     } else if (y == "") {
//         alert("you must  be filled out last name");
//         return false;
//     } else return true;
// }
//if statement that will check the first name is not blank, if it is then
//create an alert box that says first name must be filled out
//return false;

//When first name is working then validate surname
