// Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1,
//  o número de peças1 que o usuário quer, o valor unitário de cada peça1,
//   o nome de uma peça2,
//  o número de peças2 e o valor unitário de cada peça2.
//  Após, calcule e mostre o valor a ser pago.

const prompt = require(`prompt-sync`)();

const peca1 = 5.5;
const peca2 = 7.8;

const wish1 = +prompt(`Enter the number of peça1 do you want: `);
console.log();
const wish2 = +prompt(`Enter the number of peça2 do you want: `);

const result = peca1 * wish1 + peca2 * wish2;

console.log();
console.log(`
Hi, you chose ${wish1} peça1. The peça1 it's costing ${peca1} U$.
And also you chose ${wish2} peça2. The peça2 it's costing ${peca2} U$.
The final value of your purchase is ${result.toFixed(2)} U$
`);
