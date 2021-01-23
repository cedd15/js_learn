// Magic 8 Ball project to test if/else or switch statements

let userName = window.prompt("Enter your name: ");
if (userName) {
  document.write(`Hello ${userName}!\n`);
} else {
  document.write('Hello!');
}

const userQuestion = 'Will I become a werewolf tonight?';
document.write(`The user ${userName} asked: ${userQuestion} \n`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

/* switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
      break;
  case 1:
    eightBall = 'It is decidedly so';
      break;
  case 2:
    eightBall = 'Reply hazy try again';
      break;
  case 3:
    eightBall = 'Cannot predict now';
      break;
  case 4:
    eightBall = 'Do not count on it';
      break;
  case 5:
    eightBall = 'My sources say no';
      break;
  case 6:
    eightBall = 'Outlook not so good';
      break;
  case 7:
    eightBall = 'Signs point to yes';
      break;    
  default:
    eightBall = 'Nothing more';
      break;
}
document.write(`The answer is ${eightBall}.`); */

if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
} else {
  eightBall = 'Signs point to yes';
}

document.write(`The answer is \"${eightBall}\".`);
