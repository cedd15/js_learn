//Temperature today in Kelvin
const kelvin = window.prompt("Enter Kelvin temperature  : ")
//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;

//Fahrenheit equation
let fahrenheit = celsius * (9 /  5) + 32;

//This is to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit)

//output of conversion
document.write(`The temperature is ${fahrenheit} degrees Fahrenheit.`)


//convert celsius to newton

//const newCelsius = window.prompt("Enter Celsius: ")

let newton = newCelsius * (33 / 100) // converts c to newton

newton = Math.floor(newton) //rounds down newton

//document.write(`The temperature is ${newton} degrees Newton.`)


