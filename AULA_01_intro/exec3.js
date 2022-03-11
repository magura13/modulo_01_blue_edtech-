// Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Exemplo: eu tenho 30 anos, 2 meses 3 7 dias.
// Calcule e exiba o total de dias que essa pessoa já viveu.
// Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.
const prompt = require(`prompt-sync`)();

const year = +prompt(`Years: `);
const months = +prompt(`Months: `);
const days = +prompt(`Days: `);

const result = year * 365 + months * 30 + days;

console.log(`You already live ${result} days.`);
