const prompt = require("prompt-sync")();

let option = Number(prompt("Enter [1] for colour constructing. Enter [2] for colour deconstructing."));

if (option === 1){
    let colour1 = Number(prompt("Enter colour: [1]Red [2]Blue [3]Yellow"));
     //if colour 1 is equal to blue, and if colour 2 is equal to red, then print purple
    if (colour1 === 1){
        let colour2 = Number(prompt("Enter second colour: [1]Blue [2]Yellow"));
        if (colour2 === 1){
            console.log("Purple");
        } else if (colour2 === 2){
            console.log("Orange");
        } else {
            console.log("error");
        }
    }
    if (colour1 === 2){
        let colour2 = Number(prompt("Enter second colour: [1]Red [2]Yellow"));
        if (colour2 === 1){
            console.log("Purple");
        } else if (colour2 === 2){
            console.log("Green");
        } else {
            console.log("error");
        }

    }
    if (colour1 === 3){
        let colour2 = Number(prompt("Enter second colour: [1]Red [2]Blue"));
        if (colour2 === 1){
            console.log("Orange");
        } else if (colour2 === 2){
            console.log("Green");
        } else {
            console.log("error");
        }
    }
}

if (option === 2){
    let choice = Number(prompt("Select colour to deconstruct: [1]Purple [2]Orange [3]Green"));
    if (choice === 1){
        console.log("Red + Blue");
    } else if (choice === 2){
        console.log("Red +Yellow");
    } else if (choice === 3){
        console.log("Blue + Yellow");
    } else {
        console.log("error");
    }
}