// Escreva um programa que peça um número e escreva o fatorial dele.
// Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

// const prompt = require(`prompt-sync`)();

//VAI SE TORNAR UM PROMPT
// var number = 5;

// for (let t = number; t > 0; t--) {
//   result = number * (t - 1);
//   console.log(result)
//   factor = result * t;
//   console.log(result, factor);
// }

// console.log(`Hello`);

// for (const iterator of object) {

// }

const prompt = require('prompt-sync')()

// Escreva um programa que peça um número e escreva o fatorial dele. 
// Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

let fatorial = "";                                    //String é melhor pois nao tem virgula no console.log
let numero = +prompt(`Digite um número inteiro: `);
let total = 1;                                        //não pode ser zero
for(let indice = numero; indice > 0; indice--){
   if (indice > 1){                                   //enquanto for maior que 1, mostra o sinal de vezes
      fatorial += (`${indice} x `);
   }else{                                             //Se for 1, mostra o sinal de igual
      fatorial += (`${indice} = `);
   }
   total *= indice;                                   //total = total * indice 
}
console.log(`${numero}! = ${fatorial}${total}`);