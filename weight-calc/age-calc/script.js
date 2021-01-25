// This calculates your age in a certain year

const howOld = (age, year) => {
    let dayToday = new Date()
    let theCurrentYear = dayToday.getFullYear() // which is 2021
  
    const yearDifference = year - theCurrentYear
    const newAge = age + yearDifference
  
    if (year > theCurrentYear) {
      a = (year - theCurrentYear) + age;
      return `You will be ${a} in the year ${year}`
    } else if (newAge < 0) {
      b = (theCurrentYear - age) - year;
      return `The year ${year} was ${b} years before you were born`
    } else {
      return `You were ${newAge} in the year ${year}`
    }
  }
  
let enterAge = parseInt(window.prompt("Enter your age: "))
let enterYear = parseInt(window.prompt("Enter any year: "))

  document.write(howOld(enterAge, enterYear));
  
  
  
  
  