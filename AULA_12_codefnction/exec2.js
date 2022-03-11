// 2. Exercício – Treino:  Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true ou false.
const prompt = require(`prompt-sync`)();

const number = +prompt(`Type a number: `);

function divisible(num) {
  if (num % 3 == 0) {
    return console.log(`Number ${num} is divisible by 3.`);
  } else {
    return console.log(`Number ${num} isn't divisible by 3.`);
  }
}

console.log(divisible(number));