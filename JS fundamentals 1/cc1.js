/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula(you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

// Data 1
let johnHeight = 1.95;
let johnMass = 92;
let markHeight = 1.69;
let markMass = 78;

let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;

console.log(johnBMI, markBMI, markHigherBMI);

// // Data 2
// let johnHeight = 1.76;
// let johnMass = 85;
// let markHeight = 1.88;
// let markMass = 95;

// let markBMI = markMass / (markHeight * markHeight);
// let johnBMI = johnMass / johnHeight ** 2;
// let markHigherBMI = markBMI > johnBMI;

// console.log(johnBMI, markBMI, markHigherBMI);

/*

// Data 2
const johnHeight2 = 1.76;
const johnMass2 = 85;
const markHeight2 = 1.88;
const markMass2 = 95;
const markBMI_2 = markMass2 / (markHeight2 * markHeight2);
const johnBMI_2 = johnMass2 / johnHeight2 ** 2;
const markHigherBMI_2 = markBMI_2 > johnBMI_2;

console.log(johnBMI_2, markBMI_2, markHigherBMI_2);
*/
