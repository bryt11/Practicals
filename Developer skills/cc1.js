'use strict';
/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data2:[12,5,-5,0,4]
*/

// How to compute "17oC in 1 days..."

const array1 = [17, 21, 23];
const array2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}oC in ${i + 1} days... `;
  }

  console.log('...' + str);
  //   console.log(days);
};

// for (let days = 1; days <= arr.length; days++) {
printForecast(array1);
console.log('------ ------- ------');
printForecast(array2);

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`----- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`FOR: Lifting weight repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep++;
// }
