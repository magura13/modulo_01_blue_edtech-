// Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias.
//  Também considere todo ano com 365 dias e todo mês com 30 dias.
const prompt = require(`prompt-sync`)();

const userAge = +prompt(`Enter the number of days you already lived:  `);

const months = userAge % 365;

const days = months % 30;

console.log(
  `You lived ${Math.floor(userAge / 365)} years, ${Math.floor(
    months / 30
  )} months and ${days} days.`
);
