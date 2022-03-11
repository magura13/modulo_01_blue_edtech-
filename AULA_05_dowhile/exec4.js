const prompt = require(`prompt-sync`)();

var cont = 0;

do {
  aleatoryNumber = Math.floor(Math.random() * 11);

  userChoice = +prompt(`Guess the computer choice: `);
        console.log();
  console.log(`Computer thinking was ${aleatoryNumber}.`);
        console.log();
  if (userChoice > aleatoryNumber) {
    console.log(`You chose a greater number.`);
  } else if (userChoice == aleatoryNumber) {
    console.log(`Congratulations you're rigth`);
  } else {
    console.log(`You chose a smaller number.`);
  }
  cont++;
} while (aleatoryNumber !== userChoice);

        console.log();
        
console.log(`It took ${cont} atempts.`);

// console.log(aleatoryNumber)
