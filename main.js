const prompt = require('prompt-sync')({sigint: true});

console.log("Hello! Welcome to Jesse's fishing expedition!");
console.log("\n");
console.log("Press [F] to start fishing!");
console.log(prompt("> "));

let time = 0;
let totalTime = 0;
// let weight = 0;
let totalWeight = 0;
let cast = totalTime +1;  //adds 1 hour to total time
// let value = 0;
let totalValue = 0;

//Prompt responses
let choice = '';


let randomFish1 = {

    name : "Largemouth Bass",
    weight: Math.random()*4,
    value: Math.random()*3

}
let randomFish2 = {

    name : "Smallmouth Bass",
    weight: Math.random()*2,
    value: Math.random()*2

}
let randomFish3 = {

    name : "Crappie",
    weight: Math.random()*1.5,
    value: Math.random()*1.5

}
let randomFish4 = {

    name : "Bluegill",
    weight: Math.random()*1.8,
    value: Math.random()*2

}
let randomFish5 = {

    name : "Rock Bass",
    weight: Math.random()*2.2,
    value: Math.random()*3.7

}
let randomFish6 = {

    name : "Gar",
    weight: Math.random()*6,
    value: Math.random()*5.5

}
let randomFish7 = {

    name : "Catfish",
    weight: Math.random()*5.5,
    value: Math.random()*4.9

}
let randomFish8 = {

    name : "Redfish",
    weight: Math.random()*6.5,
    value: Math.random()*6

}

let randomFish9= {

    name : "Salmon",
    weight: Math.random()*7,
    value: Math.random()*9

}

let randomFish10 = {

    name : "Rainbow Trout",
    weight: Math.random()*8,
    value: Math.random()*12

}






while (totalTime < 6){

    if (totalWeight >= 10) {

        console.log("You've reached your maximum allowable weight!");
        return  console.log("You caught " + numberOfFish + " fish with a combined total weight of " + totalWeight + " valued at $" + totalValue + " ")

    }

    for (count = 0; count <= totalTime; count++) {



    }






















}
