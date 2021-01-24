const myAge = window.prompt("Enter your age: ") // this is my age
let earlyYears = 2; // this is early years age, please check readme file for more info
earlyYears = earlyYears * 10.5;

let laterYears = myAge - 2; //  accounted for the first two years, please check readme file for more info
laterYears = laterYears * 4; //following year is multiplied by 4, please check readme file for more info

document.write("Early Years: " + earlyYears)
document.write("\nLater Years: " + laterYears)

let myAgeInDogYears = earlyYears + laterYears; // my age converted to dog years

myName = "Cedd".toLowerCase(); //my name in lower case

document.write(`\nMy name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

