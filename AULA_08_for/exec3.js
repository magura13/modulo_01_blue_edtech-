// Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.
const prompt = require(`prompt-sync`)();

const number = +prompt(`Type a number: `);

for (let i = 1; i <= 10; i++) {
  let result = number * i;
  console.log(`${number} * ${i} = ${result}`);
}
