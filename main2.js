
// * You make at least three commits in git (after completing parts of the project)
// * The user is able to 'catch' fish with randomly generated names, weights, and values
// * The time of day is shown to the user
// * The user can only fish for six hours
// * The user can only catch at maximum 10 lbs of fish
// * Each turn, the sum of the user's caught fishes' weight and value is displayed
// * At the end of the game, all the fish that the user caught are displayed along 
//   with a sum of their weight and value


const prompt = require('prompt-sync')({sigint: true});

var totalTime = 0;

var totalWeight = 0;

var totalValue = 0;

let choice = '';

// const newFish = {
//     fish:   fish,   
//     weight: weight,
//     value:  value
// };

var totalFish = [];

// let castWords = ["You cast your line hard, landing 30 meters away!", "You pull back and release, watching your line fly 20 meters before landing in the lake...", "You cast your line, it lands 10 meters away, you feel a bite immediately"];

var catchStatement = ("Congratulations! You Caught a " + generateRandomFish() + " weighing " + generateFishWeight() + " and valued at $" + generateValue());

// **FUNCTIONS** //
function generateRandomFish() {

    let adj1 = ["'Long Tailed ", "'Gold Striped ", "'Yellow Bellied ", "'Silver Tongued ", "'Fork Tongued ", "'Poison Finned ", "'Dwarf Tailed ", "'Rainbow Scaled ", "'One Eyed ", "'Quad Finned "];
    let adj2 = ["Deep Water ", "Shallow Water ", "Salt Water ", "Fresh Water ", "Fire Breathing ", "Red ", "Brown ", "White ", "Green ", "Orange "];
    let type = ["Salmon'", "Perch'", "Crappie'", "Bass'", "Catfish'", "Trout'", "Sunfish'", "Bluegill'", "Carp'", "Shiner'"];
    let fish = adj1[(Math.floor(Math.random() * (adj1.length-1)))] + adj2[(Math.floor(Math.random() * (adj2.length-1)))] + type[(Math.floor(Math.random() * (type.length-1)))];

    return fish;

}
function generateFishWeight() {

    let weight = ((Math.random() * 7).toFixed(2)) + " Lbs";

    return weight;

}
function generateValue() {

    let value = ((Math.random() * 5).toFixed(2));

    return "$" + value;

}


console.log("Hello! Welcome to Master Fisherman! Do you have what it takes to be the best?");

console.log("To get started cast your line with [C].")
console.log(prompt(choice))

while (totalTime < 6) {

    // console.log(prompt(choice));

    if (totalWeight >= 10) {

            return totalFish;

    }

    if (choice = "C") {

        console.log("You cast your line")

        console.log(catchStatement);

        totalTime++

    }

console.log("\n");

console.log("Would you like to [K]eep this fish or [R]elease it?");

// console.log(prompt(choice));

    if (choice = "R") {


        totalTime++

    } else if (choice = "K") {


        totalTime++

    }

// console.log(generateRandomFish());
// console.log(generateFishWeight());
// console.log(generateValue());
}