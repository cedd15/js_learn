//this program calculates your weight in different planets

function calculateWeight(earthWeight, planet) {
     
    if (isNaN(earthWeight)) {
       return 'You have to enter a number for weight.'
      } 
      
    switch (planet) {
      case 'mercury':
        return earthWeight * 0.378
          break;
      case 'venus':
        return earthWeight * 0.907
          break;
      case 'mars':
        return earthWeight * 0.377
          break;
      case 'jupiter':
        return earthWeight * 2.36
          break;
      case 'saturn':
        return earthWeight * 0.916
          break;
      default:
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
          break;
    }
  }
  
  a = window.prompt("Enter your weight on Earth: ")
  b = window.prompt("Enter a planet: ").toLowerCase()

  document.write(calculateWeight(a, b))