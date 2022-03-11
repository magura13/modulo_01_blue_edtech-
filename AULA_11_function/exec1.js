// Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal de operador matemático (+, -, * ou /).
//  Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.
const prompt = require(`prompt-sync`)();

function operators(num1, num2, operator) {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "*") {
    return num1 * num2;
  } else if (operator == "/") {
    return num1 / num2;
  }
}

const num1 = +prompt(`Type a number: `);
const num2 = +prompt(`Type a number: `);
const operator = prompt(`Type a operator: `);

console.log(operators(num1, num2, operator));
