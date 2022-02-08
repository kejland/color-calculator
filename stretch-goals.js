const prompt = require("prompt-sync")();

let colour = prompt("Enter colour(s): ");

//construct: purple, orange, green
if (colour.includes("red") && colour.includes("blue")){
    console.log("purple");
} else if (colour.includes("red") && colour.includes("yellow")){
    console.log("orange");
} else if (colour.includes("yellow") && colour.includes("blue")){
    console.log("green");
} else if (colour.includes("purple")){
    console.log("red + blue");
} else if (colour.includes("orange")){
    console.log("red + yellow");
} else if (colour.includes("green")){
    console.log("yellow + blue");
} else {
    console.log("error")
} 