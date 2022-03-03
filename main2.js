const prompt = require('prompt-sync')({sigint: true});

// **VARIABLES** //

let totalTime = 0;

let time = generateTime();

let fishCount = 0;

    let totalFish = [];

    let totalValueArray = [];

    let totalWeightArray = [];

// **FUNCTIONS** //

function generateTime() { 

    let time = Math.floor(Math.random() * 13);

    return time

}

function totalValueGenerator() {

    let totalValue = 0;

    for (count = 0; count < totalValueArray.length; count++) {

        totalValue = totalValue + Number(totalValueArray[count]); 

    }

    return totalValue.toFixed(2);

}

function totalWeightGenerator() {

    let totalWeight = 0;

    for (count = 0; count < totalWeightArray.length; count++) {

        totalWeight = totalWeight + Number(totalWeightArray[count]);

    }

    return totalWeight.toFixed(2);

}

function generateRandomFish() {

    let adj1 = ["'Long Tailed ", "'Gold Striped ", "'Yellow Bellied ", "'Silver Tongued ", "'Fork Tongued ", "'Poison Finned ", "'Dwarf Tailed ", "'Rainbow Scaled ", "'One Eyed ", "'Quad Finned "];
    let adj2 = ["Deep Water ", "Shallow Water ", "Salt Water ", "Fresh Water ", "Fire Breathing ", "Red ", "Brown ", "White ", "Green ", "Orange "];
    let type = ["Salmon'", "Perch'", "Crappie'", "Bass'", "Catfish'", "Trout'", "Sunfish'", "Bluegill'", "Carp'", "Shiner'"];
    let fish = adj1[(Math.floor(Math.random() * (adj1.length-1)))] + adj2[(Math.floor(Math.random() * (adj2.length-1)))] + type[(Math.floor(Math.random() * (type.length-1)))];

    return fish;

}

function generateFishWeight() {

    let weight = ((Math.random() * 4).toFixed(2));

    return weight;

}

function generateValue() {

    let value = ((Math.random() * 10).toFixed(2));

    return value;

}

// **BEGINNING OF PROGRAM** //

    console.log("Hello! Welcome to Master Fisherman! Do you have what it takes to be the best?");

    console.log("To get started press any key to cast your line!")

while (totalTime < 6) {

    let totalWeight = totalWeightGenerator();

    let totalValue = totalValueGenerator();

    let value = generateValue();

    let weight = generateFishWeight();

    let fish = generateRandomFish();

        time++;

    // if (totalTime === 6) {

    //     console.log("Your final collection of fish is: ")

    //     console.log(totalFish);

    //     console.log("Your total fish weight is: " + totalWeight + ".");

    //     console.log("Your total fish value is: " + totalValue + ".");

    //     return
    // }

        console.log("The current time is " + time + ":00.")

        console.log("Your current number of caught fish is " + fishCount + " weighing " + totalWeight + " lbs and valued at $" + totalValue); 
        
        if (Number(totalWeight) <= 10) {

            console.log("continue");

        }

        console.log(prompt("> "))

    const newFish = {

    type: fish,   
    weight: weight,     //Random fish object generated with each loop.
    value: value

    };

        console.log("You cast your line..");

        console.log("...");

        console.log("Congratulations! You Caught a " + fish + ", weighing " + weight + " lbs, and valued at $" + value);

        if (Number(totalWeight) + Number(weight) > 10) {

             console.log("This fish exceeds the 10 lb limit! This fish must be [r]eleased.")  

        }

        console.log("Would you like to [K]eep this fish or [R]elease it?");

        let choice2 = prompt("> ")
        
    if (choice2 === "K" || choice2 === "k" && Number(totalWeight) <= 10) {

        fishCount++

        console.log("You have chosen to keep this fish! It has been added to your collection.")

        totalFish.push(newFish);

        totalValueArray.push(newFish.value);

        totalWeightArray.push(newFish.weight);

        console.log("Your current fish collection consists of: ");

        // console.log(totalFish);
      
    } else if (choice2 === "R" || choice2 === "r") {

        console.log("You throw the fish back!");

    } else {

        console.log("Input invalid, please try again.")

    }

        console.log("\n");

        // console.log("Press any key to cast again.");

        console.log("\n");

         totalTime++;

        // time++;

        if (totalTime === 6) {

            console.log("Your final collection of fish is: ")
    
            console.log(totalFish);
    
            console.log("Your total fish weight is: " + totalWeight + "lbs.");
    
            console.log("Your total fish value is: $" + totalValue + ".");
    
            return
        }

}
