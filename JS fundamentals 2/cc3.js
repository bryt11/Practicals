"use strict";

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their fullname, mass and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI(the same method on both objects). Store the BMI value to a property and also return it from the method
3. Log to the console who has the higherBMI, together with the full name and the respective BMI. 
Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.


const markObject = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const johnObject = {
  fullname: "John Doe",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

markObject.calcBMI();
johnObject.calcBMI();
console.log(`Mark's BMI (${markObject.bmi})... John's BMI ${johnObject.bmi}`);

markObject.bmi > johnObject.bmi
  ? console.log(
      `${markObject.fullname}'s BMI (${markObject.bmi}) is higher than ${johnObject.fullname}'s (${johnObject.bmi})`
    )
  : console.log(
      `${johnObject.fullname}'s BMI (${johnObject.bmi}) is higher than ${markObject.fullname}'s (${markObject.bmi})`
    );
*/
