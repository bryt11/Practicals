/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉


let johnHeight = 1.76;
let johnMass = 85;
let markHeight = 1.88;
let markMass = 95;

let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / johnHeight ** 2;

console.log(johnBMI, markBMI);

if (johnBMI > markBMI) {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
} else {
  console.log(`Mark's BMI(${markBMI}) is higher than John's (${johnBMI})!`);
}
*/
