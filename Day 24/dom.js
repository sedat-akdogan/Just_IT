// Changing HTML

document.getElementById("p1").innerHTML = "We can change every element by this way";

const element = document.getElementById("id01");
element.innerHTML = "New Heading";

console.log(2 + 3);


// Changing the Value of an Attribute

document.getElementById("image").src = "landscape.jpg";


//  Dynamic HTML content

document.getElementById("demo3").innerHTML = "Date : " + Date();


// JavaScript Form Validation

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    } else return true;
}

// JavaScript Can Validate Numeric Input

function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}



// Data Validation

// Server side validation is performed by a web server, after input has been sent to the server.

// Client side validation is performed by a web browser, before input is sent to a web server.


// Changing HTML Style
// document.getElementById(id).style.property = new style

document.getElementById("p22").style.color = "blue";
document.getElementById("p22").style.fontFamily = "Arial";
document.getElementById("p22").style.fontSize = "larger";


// Dynamic Page: DOM Animation

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
}

// JavaScript HTML DOM Events
