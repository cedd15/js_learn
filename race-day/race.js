

let raceNumber = Math.floor(Math.random() * 1000);

//Create a variable that indicates whether a runner registered early or not.
//Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.
const regEarly = false;

// Create a variable for the runner’s age and set it equal to a number.
let runnerAge = window.prompt("Enter your age: ");

//Create a control flow statement that checks whether the runner is an adult AND registered early.
// Add 1000 o their raceNumber if this is true
if (runnerAge >= 19 && regEarly) {
  raceNumber += 1000
} 

//Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time.

//For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.
if (runnerAge > 18 && regEarly) {
  document.write(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} 
/* 
Since we already checked for early adults we can write a statement like this: else if runner is over 18 AND did not register early they will race at 11:00am

Write the corresponding else if statement.

Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber. 
*/
else if (runnerAge > 18 && !regEarly) {
    document.write(`You will race at 11:00 am. Your race number is ${raceNumber}`);
} 
//For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.
else if (runnerAge < 18) {
    document.write(`You will race at 12:30pm. Your race number is ${raceNumber}`);
} 
/*
Don’t forget about runners exactly 18 years old!

Add an else statement that logs a statement to the console telling the runner to see the registration desk.
*/
else {
    document.write(`See the registration desk.`);
}