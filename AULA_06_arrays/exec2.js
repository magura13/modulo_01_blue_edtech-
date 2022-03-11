// Faça um Programa que peça a idade e a altura de 5 pessoas,
// armazene cada informação no seu respectivo array.
// Imprima a média de idade e de altura.

const prompt = require(`prompt-sync`)();

let age = [];
let heigth = [];

let cont = 1;
while (cont <= 5) {
  heigth.push(+prompt(`Enter the heigth of the ${cont}ª person: `));
  cont++;
}
console.log(heigth);

cont = 1;
while (cont <= 5) {
  age.push(+prompt(`Enter the age of the ${cont}ª person:`));
  cont++;
}
console.log(age);

cont = 0;
let averageH = 0;
let averageA = 0;

while (cont <= 5) {
  averageH = averageH + heigth[cont];
  averageA = averageA + age[cont];
  cont++;
}

console.log(averageA / 5, averageH / 5);
// const prompt = require("prompt-sync")();

// const name = [],
//   age = [],
//   heigth = [];

// let cont = 0;

// while (cont < 5) {
//   name.push(prompt(`Digite o ${cont + 1}º nome: `));
//   console.log();
//   age.push(+prompt(`Digite a idade de ${name[cont]}: `));
//   console.log();
//   heigth.push(+prompt(`Digite a altura de ${name[cont]}: `));
//   cont++;
// }

// cont = 0;
// let averageA = 0;
// let averageH = 0;

// while (cont < 5) {
//   console.log(`${name[cont]} \t${age[cont]}\t${heigth[cont]}`);
//   averageA = averageA + age[cont];
//   averageH = averageH + heigth[cont];
//   cont++;
// }

// console.log(`Altura média do grupo: ${averageH / 5}`);
// console.log(`Idade média do grupo: ${averageA / 5}`);
