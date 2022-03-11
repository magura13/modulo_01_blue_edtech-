const prompt = require(`prompt-sync`)();

// Posição	País	Índice de crescimento populacional anual(%)
// 1	 Libéria	4.50 - 3 955 000 hab
// 2	 Burundi	3.90 - 12 006 000 hab
// 3	 Afeganistão	3.85 - 32 225 560 hab
// 4	 Saara Ocidental	3.72 - 567,402 hab
// 5	 Timor-Leste	3.50 - 1 291 358 hab
// 6	 Níger	3.49 - 19 899 000 hab. 
// 7	 Eritreia	3.24 - 4 954 645 hab
// 8	 Uganda	3.24 - 46 700 000 hab
// 9	 República Democrática do Congo	3.22 - 86 895 208 hab
// 10	 Palestina	3.18 - 4 816 503 hab

let populationA = +prompt(`Type the population of A:`); //DIGITAR A POPULAÇÃO DE 2 PAISES A E B. A POPULAÇÃO DE A TEM QUE SER MENOR QUE A DE B
console.log();
let populationB = +prompt(`Type the population of B:`); //POSSO FAZER UM ARRAY OU OBJETO / LET POIS NO LAÇO DE REPETIÇÃO SERÁ ALTERADO
console.clear();
//TAXA DE CRESCIMENTO POPULACIONAL É CALCULADA EM PORCENTAGEM, BASEADO NO CRESCIMENTO VEGETATIVO: TaxaDeNatalidade - TaxaMortes = total em %
const populationGrowthA = +prompt(`Type the population growth of A:`); //DIGITAR A TAXA DE CRESCIMENTO POPULACIONAL DE A E B. yearsUDO DESSA VEZ A TEM QUE SER MAIOR QUE B
console.log();
const populationGrowthB = +prompt(`Type the population growth of B:`); //TAMBÉM PODE FAZER UM ARRAY(ATÉ UM DENTRO DO OUTRO) OBJETO
console.clear();

const percentageA = (populationGrowthA + 100) / 100;
const percentageB = (populationGrowthB + 100) / 100;

let years = 0; //CONTADOR DE QUANTOS ANOS SERÁ NECESSÁRIO PARA A ULTRAPASSAR OU IGUALAR A POPULAÇÃO DO PAÍS B

while (true) {
  populationA = populationA * percentageA;
  //   console.log({ populationA });
  years++;
  //   console.log({ years });
  populationB = populationB * percentageB;
  //   console.log();
  //   console.log({ populationB });
  //   console.log();
  if (populationA >= populationB) break;
}

console.log(
  `It will take ${years} years for the population of "A" exceed or equal the population of "B".

  POPULATION A: ${populationA.toFixed(0)}
  POPULATION B: ${populationB.toFixed(0)}  
   `
);

//TREINAR A FORMA QUE O DANI FEZ COM OSBJETOS OBS O CODIGO VAI ATE A LINHA 130 
// const prompt = require("prompt-sync")();
// Faça um programa que peça ao usuário digitar a população e
// a taxa de crescimento populacional de 2 países A e B, sendo
// que a população do país A deve ser menor que a de B, e a taxa
// de crescimento de A seja maior.

// Faça um programa que calcule e escreva o número de anos necessários para que a população do
// país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

// const paisA = {
//   populacao: 0,
//   crescimento: 0,
// };
// const paisB = {
//   populacao: 0,
//   crescimento: 0,
// };
// let anos;

// console.log(`Temos dois países: A e B.

// O pais A precisa ter uma população menor e uma taxa de crescimento maior que o pais B.

// Vamos gerar alguns exemplos para calcularmos em quanto tempo a população do pais A
// iguala ou ultrapassa a população do Pais B.
// `);
// do {
//   do {
//     paisA.populacao = +prompt(`Digite um NÚMERO para a poulação do pais A: `);
//   } while (isNaN(paisA.populacao));

//   do {
//     paisA.crescimento = +prompt(
//       `Digire um NÚMERO para a taxa de crescimento por ano do país A: `
//     );
//   } while (isNaN(paisA.crescimento));

//   console.log();

//   do {
//     paisB.populacao = +prompt(`Digite um NÚMERO para a poulação do pais B: `);
//   } while (isNaN(paisB.populacao));

//   do {
//     paisB.crescimento = +prompt(
//       `Digire um NÚMERO para a taxa de crescimento por ano do país B: `
//     );
//   } while (isNaN(paisB.crescimento));

//   if (
//     paisA.crescimento <= paisB.crescimento ||
//     paisA.populacao >= paisB.populacao
//   ) {
//     console.log();
//     console.log(`Por favor, com esses dados não podemos dar seguimento ao exemplo.
        
//         O pais A precisa ter uma população menor e uma taxa de crescimento maior que o pais B.
//         `);
//   }
// } while (
//   paisA.crescimento <= paisB.crescimento ||
//   paisA.populacao >= paisB.populacao
// );

// for(let x = 1; paisA.populacao < paisB.populacao; x++ ){
//     paisB.populacao += paisB.crescimento
//     paisA.populacao += paisA.crescimento
//     anos = x
//     // console.log(`${anos}º ano:
    
//     // População do Pais A: ${paisA.populacao} pessoas
//     // População do Pais B: ${paisB.populacao} pessoas
//     // `)
// }
// console.clear()
// console.log(`
// São nescessários ${anos} anos para a população do Pais A alcançar a população do Pais B.`)