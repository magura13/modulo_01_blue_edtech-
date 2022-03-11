// Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um.
//  Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas.

const prompt = require(`prompt-sync`)();

const register = +prompt(`Enter the number of students you want to register: `);
console.clear();
console.log();

let names = [];
let points = [];

let cont = 1;
while (cont <= register) {
  names.push(prompt(`Enter the name of ${cont}º student: `));
  console.clear();
  points.push(+prompt(`Enter the grade of ${names[cont - 1]}:`));
  console.clear();
  cont++;
}

cont = 0;
let average = 0;
while (cont < register) {
  average = points[cont] + average;
  cont++;
}

cont = 0;
while (cont < register) {
  console.log(`
    ${names[cont]}: ${points[cont]}
    `);
  cont++;
}

console.log(`The final average is ${average / register}`);
