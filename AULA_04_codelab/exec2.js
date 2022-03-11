const prompt = require(`prompt-sync`)();

let random = Math.floor(Math.random() * 11);

const choice = +prompt(`Type a number: `);

if (random === choice) {
  console.log(`PC choice : ${random}\nYour choice : ${choice}\nYou win.`);
} else {
  console.log(`PC choice : ${random}\nYour choice : ${choice}\nYou lose.`);
}
