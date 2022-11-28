// print numbers from 5 to 10 by using for loop:

// for(i=5; i<11; i++) {
//     console.log(i);
// }


// Make a for loop that loops backwards printing 3 to 0 to 
// the console. Use the >= comparison operator in your stopping 
// condition and the - - operator in your iteration statement.

// for(i=3; i>=0; i--) {
//     console.log(i);
// }

// for(i=0; i<=20; i += 4){
//     console.log(i);
// }


// const animals = ["tiger", "cat", "panda", "wolf", "sheep", "dog"];

// const adj = ["fast", "slow", "flaffy", "dangerous", "delicious", "loyal"];

// for(let i=0; i< animals.length; i++){

//     for(let j=0; j< adj.length; j++){
    
//     console.log(animals[i] + " " + adj[j]);
//     }
// }



// let waqasFollowers = ['Abdul', 'Zak', 'Tim'];
// let narayanFollowers = ['Tim', 'Zak', 'Christian'];
// let mutualFollowers = [];

// for (let i = 0; i < waqasFollowers.length; i++) { //loop through the first array to get the values
//     for (let j = 0; j < narayanFollowers.length; j++) { //loop through the second array to get the values
//         if (waqasFollowers[i] === narayanFollowers[j]) {  // check to see if any values are the same in both arrays
//             mutualFollowers.push(waqasFollowers[i]);
//         }
//     }
// }
// console.log(mutualFollowers);



const phone = ["samsung", "Apple", "Nokia"];
let i = 0;
while (i<phone.length){
    console.log(phone[i]);
    i++;
}

