const prompt = require(`prompt-sync`)();

let a = +prompt(`Type a number: `);
console.log();
let b = +prompt(`Type other number: `)
console.log();

if (a % b == 0){
    console.log(`The numbers are multiples!`)
} else {
    console.log(`The numbers are not multiples!`);
}
