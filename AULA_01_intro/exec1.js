// Leia 2 valores A e B, que correspondem a 2 notas de um aluno.
// A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6.
// Ex: nota a * 4 e nota b * 6.

// const prompt = require(`prompt-sync`)();

// const valueA = +prompt(`Enter your math grade: `); // colocar um do while para não aceitar caso is NaN. Conferir com Gabriel
// const valueB = +prompt(`Enter your english grade: `);

// const result = (valueA * 4) + (valueB * 6);
// const average = result / 10;

// console.log(`Your semester average was ${average}`);
const prompt = require(`prompt-sync`)();

let teste = +prompt(`Digite um número: `);

console.log(typeof teste);
