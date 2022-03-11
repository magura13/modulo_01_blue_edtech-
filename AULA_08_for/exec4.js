// Faça um programa que carregue uma lista com os modelos de cinco carros.
// Carregue uma outra lista com o consumo desses carros, isto é, quantos quilômetros cada um desses carros faz com um litro de combustível.
//  Calcule e mostre:
// O modelo do carro mais econômico;
// Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância de 1000 quilômetros e quanto isto custará,
//  considerando um que a gasolina custe R$ 5,50 o litro.
const prompt = require(`prompt-sync`)();

const cars = []; //LISTA com o modelo dos cinco carros
const consumption = []; //LISTA com o consumo desses carros
let cont = 1;
const price = 5.5;

while (cont <= 5) {
  //Adcionando os valores as respectivas listas
  cars.push(prompt(`Type the name of the ${cont}º car: `));
  console.log();
  consumption.push(+prompt(`Type the consumption of the ${cont}º car: `));
  console.clear();
  cont++;
}

let eco = 0;
//Calcular o modelo do carro mais econômico //ESTUDAR E REVISAR BASTANTE ESSE FOR
for (let economic in consumption) {
  if (consumption[economic] > consumption[eco]) eco = economic;
}

console.log(`The most economic car is ${cars[eco]}.`); //EXIBINDO MODELO MAIS ECONÔMICO

console.log();

for (let i = 0; i < 5; i++) {
  //EXIBINDO QUANTO GASTARÁ TODOS OS CARROS PARA PERCORRER 1000KM
  console.log();
  console.log(
    `The car ${cars[i]} will spent ${((1000 / consumption[i]) * price).toFixed(
      2
    )} R$ to run 1000km.`
  );
}

// function getMaxOfArray(array) { //Essa função está me retornando o maior valor do Array, porém precisaria saber o índice
//   return Math.max.apply(null, array);
// }

// console.log(getMaxOfArray(consumption));
