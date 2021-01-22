//Temperature today in Kelvin
const kelvin = 0;

//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;

//Fahrenheit equation
let fahrenheit = celsius * (9 /  5) + 32;

//This is to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit)

//output of conversion
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)


//convert celsius to newton
let newCelsius = 30

let newton = newCelsius * (33 / 100)

newton = Math.floor(newton)

console.log(`The temperature is ${newton} degrees Newton.`)