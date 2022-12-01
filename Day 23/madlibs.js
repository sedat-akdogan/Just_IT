

function libIt() {
    var storyDiv = document.getElementById("story");
    var person = document.getElementById("person").value;
    var adjective = document.getElementById("adjective").value;
    var noun = document.getElementById("noun").value;
    storyDiv.innerHTML = person + " married a " + adjective + " " + noun + "... So weird!";
}
  
var libButton = document.getElementById('lib-button');
libButton.addEventListener('click', libIt);


// var button = document.getElementById("lib-button");
// button.addEventListener("click", myFunction);

// function myFunction() {
//     var noun = document.getElementById("noun").value;
//     var adj = document.getElementById("adjective").value;
//     var person = document.getElementById("person").value;

//     var storyDiv = document.getElementById("story");
//     storyDiv.innerHTML = noun + " " + adj + " " + person;
// }