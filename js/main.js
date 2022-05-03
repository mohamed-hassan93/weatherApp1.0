//Carosel Ride Counter

/*for (let carosel=0; carosel<=10; carosel++){
    console.log(`the carosel is on spin number ${carosel}`)
}

/*Parity 
Check the following program that shows even numbers (divisible by 2) between 1 and 10.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}
This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.

console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

This program must show exactly 10 numbers including the first one, not 11 numbers!
*/

/*for (let i=1; i<=20; i++){
    if (i%2!==0){
        console.log(`${i} is odd`)
    }
}*/

/* Input validation
Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

When you are done with the above, improve the program so that the terminating number is between 50 and 100.
*/

function countPositivesSumNegatives(input) {
  var newArr = [];
  var positiveNumber = 0;
  var negativeNumber = 0;
  
  // Validate Input
  if (input === null || input.length === 0)
    return newArr;
  
  // Loop through array of Numbers 
  for (var i = 0; i < input.length; i++) {
    if (input[i] == 0)
     continue;
  
    // Count positives
    else if (input[i] > 0) 
      positiveNumber++;     
        
    // Sum negatives
    else if (input[i] < 0) 
      negativeNumber += input[i];
    
  }
  
  // Prepare Output
  newArr.push(positiveNumber);
  newArr.push(negativeNumber);
  
  return newArr;
}

countPositivesSumNegatives([1,2,3,4,5,6,7,8,9,10,-12,-14,-123])