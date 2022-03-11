const prompt = require(`prompt-sync`)();

const choice = +prompt(`Enter a number: `);

var odd = [];
var even = [];

let cont = 1;
while (cont <= choice) {
  if (cont % 2 === 1) {
    odd.push(cont);
  } else {
    even.push(cont);
  }
  cont++
}

console.log(`even ${even} 
odd ${odd}`);

//DEU PAU