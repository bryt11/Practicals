/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:


1. Calculate the average score for each team,using the test data below





2. Compare the team's average scores to determine the winner of the competition and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)





3. Bonus1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


// Data 1
const koalasAvg = (88 + 91 + 110) / 3;
const dolphinsAvg = (96 + 108 + 89) / 3;
console.log(`Koalas(${koalasAvg}), Dolphins(${dolphinsAvg})`);

if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
  console.log(`Koalas(${koalasAvg}) wins the trophy 🏆`);
} else if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log(`Dolphins(${dolphinsAvg}) wins the trophy🏆`);
} else if (
  koalasAvg === dolphinsAvg &&
  koalasAvg >= 100 &&
  dolphinsAvg >= 100
) {
  console.log(`It's a draw...`);
} else {
  console.log(`Nobody wins the trophy 👎🏼 😢`);
}

console.log("First competition...!");

// Data Bonus 1
const koalasAvgBonus1 = (109 + 95 + 123) / 3;
const dolphinsAvgBonus1 = (97 + 112 + 101) / 3;
console.log(`Koalas(${koalasAvgBonus1}), Dolphins(${dolphinsAvgBonus1})`);

if (koalasAvgBonus1 > dolphinsAvgBonus1 && koalasAvgBonus1 >= 100) {
  console.log(`Koalas(${koalasAvgBonus1}) wins the trophy 🏆`);
} else if (dolphinsAvgBonus1 > koalasAvgBonus1 && dolphinsAvgBonus1 >= 100) {
  console.log(`Dolphins(${dolphinsAvgBonus1}) wins the trophy🏆`);
} else if (
  koalasAvgBonus1 === dolphinsAvgBonus1 &&
  koalasAvgBonus1 >= 100 &&
  dolphinsAvgBonus1 >= 100
) {
  console.log(`It's a draw...`);
} else {
  console.log(`Nobody wins the trophy 👎🏼 😢`);
}

console.log("Second competition...!!");

// Data Bonus 2
const koalasAvgBonus2 = (109 + 95 + 106) / 3;
const dolphinsAvgBonus2 = (97 + 112 + 101) / 3;
console.log(`Koalas(${koalasAvgBonus2}), Dolphins(${dolphinsAvgBonus2})`);

if (koalasAvgBonus2 > dolphinsAvgBonus2 && koalasAvgBonus2 >= 100) {
  console.log(`Koalas(${koalasAvgBonus2}) wins the trophy 🏆`);
} else if (dolphinsAvgBonus2 > koalasAvgBonus2 && dolphinsAvgBonus2 >= 100) {
  console.log(`Dolphins(${dolphinsAvgBonus2}) wins the trophy🏆`);
} else if (
  koalasAvgBonus2 === dolphinsAvgBonus2 &&
  koalasAvgBonus2 >= 100 &&
  dolphinsAvgBonus2 >= 100
) {
  console.log(`It's a draw...`);
} else {
  console.log(`Nobody wins the trophy 👎🏼 😢`);
}
console.log("Third competition...!!!");
*/
