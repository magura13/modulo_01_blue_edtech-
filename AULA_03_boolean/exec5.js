const prompt = require(`prompt-sync`)();

let withdraw = +prompt(`Enter the amount to be withdrawn:`);

const money100 = Math.floor(withdraw / 100);
    withdraw = withdraw % 100

const money50 = Math.floor(withdraw / 50);
    withdraw = withdraw % 50

const money10 = Math.floor(withdraw / 10);
    withdraw = withdraw % 10

const money5 = Math.floor(withdraw / 5);
    withdraw = withdraw % 5

const money1 = withdraw

console.log(`
${money100} hundred bills.
${money50} fifty bills.
${money10} ten bills.
${money5} five bills.
${money1} one bills.
`)