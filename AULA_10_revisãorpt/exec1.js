const prompt = require(`prompt-sync`)();

// Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
//  Um número primo é aquele que é divisível somente por ele mesmo e por 1.

let number = +prompt(`Type a number: `);

let qtdNumbers = 0;

for (let i = 1; i <= number; i++) {
  let resto = number % i;

  if (resto === 0) {
    qtdNumbers++;
  }
}

if (qtdNumbers === 2) {
  console.log(`Seu número é primo`);
} else {
  console.log(`Seu número não é primo.`);
}

console.time();
console.timeEnd();
