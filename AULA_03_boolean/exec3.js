const prompt = require(`prompt-sync`)();

const number = +prompt(`Type a number: `)
console.log();

if(number % 2 == 0){
    console.log(`The number ${number} is even.`)
} else {
    console.log(`The number ${number} is odd.`)
}