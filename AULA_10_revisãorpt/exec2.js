// Peça ao usuário para digitar vários nomes (a quantidade deve ser escolhida por ele).
//  Exiba na tela todos os nomes digitados, porém de maneira invertida (do último para o primeiro),
//   apresente também o maior e o menor nome (caso haja empate, deve mostrar todos).
const prompt = require(`prompt-sync`)();

const names1 = [];
let bigName;
let smallName;

do {
  names1.push(prompt(`Enter a name: `));
  var loop = prompt(`Do you want type more names? [Y]yes or [N]no: `);
} while (loop === "Y" || loop === "y");

names1.reverse();

console.log(names1);

for (let i = 0; i < names1.length; i++) {
  const name = names1[i];
  if (bigName === undefined) {
    bigName = name;
  }
  if (smallName === undefined) {
    smallName = name;
  }
}
console.log({ bigName });
console.log({smallName});

// console.log(names.indexOf(i))
