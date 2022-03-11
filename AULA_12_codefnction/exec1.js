// 1. Exercício – Treino: Crie uma função que dado dois valores (passados como parâmetros) mostre no console
//  a soma, subtração, multiplicação e divisão desses valores.
const prompt = require(`prompt-sync`)();

let add;
let multiplication;
let subtraction;
let division;

function calculation(value1, value2) {
  add = value1 + value2;
  multiplication = value1 * value2;
  if (value1 > value2) {
    subtraction = value1 - value2;
    division = value1 / value2;
  } else {
    subtraction = value2 - value1;
    division = value2 / value1;
  }
  console.log({ add });
  console.log({ subtraction });
  console.log({multiplication});
  console.log({division});
}

const value1 = +prompt(`Enter a number: `);
const value2 = +prompt(`Enter a number: `);

console.log(calculation(value1, value2));