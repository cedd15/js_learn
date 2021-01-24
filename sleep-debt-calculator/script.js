//obtains user's sleep hours for each day
const monday = parseInt(window.prompt("Enter your sleep hours on Monday: "))
const tuesday = parseInt(window.prompt("Enter your sleep hours on Tuesday: "))
const wednesday = parseInt(window.prompt("Enter your sleep hours on Wednesday: "))
const thursday = parseInt(window.prompt("Enter your sleep hours on Thursday: "))
const friday = parseInt(window.prompt("Enter your sleep hours on Friday: "))
const saturday = parseInt(window.prompt("Enter your sleep hours on Saturday: "))
const sunday = parseInt(window.prompt("Enter your sleep hours on Sunday: "))



//sums up the total sleep hours for the week
const getActualSleepHours = () => {
    return monday + tuesday + wednesday + thursday + friday + saturday + sunday;
}

//multiplies the ideal sleep hours per day by 7 days 
 const getIdealSleepHours = idealHours => idealHours * 7
  
  
 const calculateSleepDebt =  () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8); // ideal sleep hours per day is 8 hours
      if (actualSleepHours === idealSleepHours) {
        document.write('You have the perfect amount of sleep. Ideal sleep hours per day is 8 hours.')
      } else if (actualSleepHours > idealSleepHours) {
        document.write('You got more sleep than needed. You overslept for ' + (actualSleepHours - idealSleepHours) + ' hours in a week. Ideal sleep hours per day is 8 hours.')
      } else {
        document.write('You should get some rest. You need to sleep for ' + (idealSleepHours - actualSleepHours) + ' more hours. Ideal sleep hours per day is 8 hours.')
      }
  }
  
  calculateSleepDebt(); 