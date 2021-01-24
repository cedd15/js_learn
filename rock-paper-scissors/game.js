// asks user to input their choice
const getUserChoice = userInput => {
    userInput =  userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
        document.write('Invalid input.')
      }
  };


// obtains computer choice
  const getComputerChoice = ()  => {
    randomNumber = Math.floor(Math.random() * 3);
      switch (randomNumber) {
        case 0:
          return 'rock'
            break;
        case 1:
          return 'paper'
            break;
        case 2:
          return 'scissors'
            break;
      } 
  
  }
  
  // determines the winner; compares user's choice vs computer's
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game was a tie.';
    } 

    if (userChoice === 'bomb') {
      return 'Cheat code activated! You won!'
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer won :(';
      } else {
        return 'You won! XD';
      }
    }
  
   if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer won :(';
      } else {
        return 'You won! XD';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer won :(';
      } else {
        return 'You won! XD';
      }
    }
  }
  
  
  //outputs who wins or loses or it's a tie
  const playGame = () => {
    const userChoice = getUserChoice(window.prompt("Enter your choice: "));
    const computerChoice = getComputerChoice();
    document.write("You chose: " + userChoice + " \n");
    document.write("The computer chose: " + computerChoice + " \n");
    document.write(determineWinner(userChoice, computerChoice));
    }
  
  playGame(); 