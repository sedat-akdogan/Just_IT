console.log(Math.round(3.5));  // up or down 

console.log(Math.floor(3.9)); // round down

console.log(Math.ceil(5.1)); // round up

console.log(Math.trunc(5.7));  // The integer part of the number

console.log(Math.random()); //between 0 and 1

//You have to generate a whole number between 1 and 10



// Form vadiation exercise

function validateForm() {
    //create a variable to store the first name
    let name1 = document.getElementById("fname");
    let surname = document.getElementById("lname");
    let button = document.getElementById("submit");

    if (name1 === null) {
        window.alert("you must enter your first name");  
     return false;
    }
    //if (name1 !== null) {
    //   return true;
    //}
    //if statement that will check the first name is not blank, if it is then
    //create an alert box that says first name must be filled out
    
   

    //When first name is working then validate surname

}