const prompt = require(`prompt-sync`)();

console.log();
const number1 = +prompt(`Type a number: `);
console.log();
const number2 = +prompt(`Type other number: `);
console.log();

const list = [];

if (number1 > number2) {
  for (let i = number2; i <= number1; i++) {
    list.push(i);
  }
}

if (number2 > number1) {
  for (let t = number2; t >= number1; t--) {
    list.push(t);
  }
}

list.sort();
console.log(list);
