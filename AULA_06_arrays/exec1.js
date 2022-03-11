const prompt = require(`prompt-sync`)();

const odd = []; //poderia usar let ou const? inicei usando VAR
const even = []; 

for (let i = 1; i<=10; i++){
    console.log();
    numbers = +prompt(`Enter a number: `)
   if(numbers % 2 == 1){
    odd.push(numbers)
   } else {
    even.push(numbers)
   }
}
console.log();

console.log(`
This is your odd array: ${odd} 
This is your even array: ${even}
`);