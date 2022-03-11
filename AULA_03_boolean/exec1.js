const prompt = require(`prompt-sync`)();

let number1 = +prompt(`Enter a number: `);

let number2 = +prompt(`Enter other number:`);

if (number1 > number2) {
  console.log(`Number ${number1} bigger than ${number2}.`);
} else if (number1 == number2) {
  console.log(`Number ${number1} is equal than ${number2}.`);
} else {
  console.log(`Number ${number2} is bigger than ${number1}`);
}