// 3. Exercício – Treino: Faça um programa que tenha uma função chamada area(),
//  que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terreno.
const prompt = require(`prompt-sync`)();

const width = +prompt(`Type the width: `);
console.log(`\n\n`);
const length = +prompt(`Type the length: `);

function area(width,length) {
    return console.log(`The area is ${width * length}m².`);
}
console.log(`\n\n`);
console.log(area(width,length));