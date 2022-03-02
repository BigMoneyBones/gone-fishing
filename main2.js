const prompt = require('prompt-sync')({sigint: true});

// **VARIABLES** //

// let loopCount = 0

let totalTime = 0;

let fishCount = 0;

    let totalFish = [];

    let totalValueArray = [];

    let totalWeightArray = [];

// **FUNCTIONS** //

function generateTime() { 

    let time = Math.floor(Math.random() * 12);


}



function totalValueGenerator() {

    let totalValue = 0;

    for (count = 0; count < totalValueArray.length; count++) {

        totalValue = totalValue + Number(totalValueArray[count]); 

    }

    return totalValue;

}

function totalWeightGenerator() {

    let totalWeight = 0;

    for (count = 0; count < totalWeightArray.length; count++) {

        totalWeight = totalWeight + Number(totalWeightArray[count]);

    }

    return totalWeight;

}

function generateRandomFish() {

    let adj1 = ["'Long Tailed ", "'Gold Striped ", "'Yellow Bellied ", "'Silver Tongued ", "'Fork Tongued ", "'Poison Finned ", "'Dwarf Tailed ", "'Rainbow Scaled ", "'One Eyed ", "'Quad Finned "];
    let adj2 = ["Deep Water ", "Shallow Water ", "Salt Water ", "Fresh Water ", "Fire Breathing ", "Red ", "Brown ", "White ", "Green ", "Orange "];
    let type = ["Salmon'", "Perch'", "Crappie'", "Bass'", "Catfish'", "Trout'", "Sunfish'", "Bluegill'", "Carp'", "Shiner'"];
    let fish = adj1[(Math.floor(Math.random() * (adj1.length-1)))] + adj2[(Math.floor(Math.random() * (adj2.length-1)))] + type[(Math.floor(Math.random() * (type.length-1)))];

    return fish;

}

function generateFishWeight() {

    let weight = ((Math.random() * 7).toFixed(2));

    return weight;

}

function generateValue() {

    let value = ((Math.random() * 5).toFixed(2));

    return value;

}

// **BEGINNING OF PROGRAM** //

    console.log("Hello! Welcome to Master Fisherman! Do you have what it takes to be the best?");
    console.log("The current time is " + time + ":00.")
    console.log("To get started cast your line with [C].")
    

while (totalTime < 6) {

    let totalWeight = totalWeightGenerator();

    let totalValue = totalValueGenerator();

    let value = generateValue();

    let weight = generateFishWeight();

    let fish = generateRandomFish();

        // console.log("Your current number of caught fish is " + fishCount + " weighing " + totalWeight + " lbs and valued at $" + totalValue); 

        let initialCast = prompt("> ")
    
    var catchStatement = ("Congratulations! You Caught a " + fish + ", weighing " + weight + " lbs, and valued at $" + value);

    const newFish = {

    type: fish,   
    weight: weight,     //Random fish object generated with each loop.
    value:  value

    };

    if (totalWeight >= 10) {

            return totalFish;

    }

    if (initialCast === "C") {

        console.log("You cast your line..");

        console.log("\n");

        console.log("...");

        console.log("\n");

        console.log(catchStatement);

    }

        console.log("\n");

        console.log("Would you like to [K]eep this fish or [R]elease it?");

        let choice2 = prompt("> ")

    if (choice2 = "K") {

        console.log("You have chosen to keep this fish! It has been added to your collection.")

        totalFish.push(newFish);

        totalValueArray.push(newFish.value);

        totalWeightArray.push(newFish.weight);

        console.log("Your current number of caught fish is " + fishCount + " weighing " + totalWeight + " lbs and valued at $" + totalValue); 

        console.log("Your current fish collection consists of: ");

        console.log(totalFish);

        fishCount++
      
    } else if (choice2 = "R") {

        console.log("You throw the fish back!");

    }

        console.log("Cast again with [C]");

        console.log("\n");

        totalTime++;
    
        // loopCount++;

}