const prompt = require(`prompt-sync`)();

let spent; //Variável de quanto será gasto. - linha: 13
let paymentChoice; //Variável de escolha de pagamento - linha: 56+
let parcel; //Variável de escolha de parcelas - linha: 63
let parcelValue; //Variável criada para usar um toFixed nela
let inCash; //Variável valor a vista - linha: 21+
let twice; //Variável em 2 prestações - linha: 29
const salesAmount1 = []; //lista para guardar o total de valores vendidos na opção 1 (forma de pagamento) - linha: 82
const salesAmount2 = []; //lista para guardar o total de valores vendidos na opção 2 (forma de pagamento) - linha: 87
const salesAmount3 = []; //lista para guardar o total de valores vendidos na opção 3 (forma de pagamento) - linha: 96
//EXISTEM VARIÁVEIS QUE NÃO ESTÃO DECLARADAS AQUI PREVIAMENTE

console.log(`
\tWelcome to Espinhaço Bike Shop.
`); //

while (true) {
  console.log(); //Espaçamento no terminal

  spent = +prompt(`How much you spent: `); //recebendo o valor gasto pelo usuário
  if (spent === 0) {
    //Se o valor digitado for = 0 o programa irá dar um break
    break;
  }

  console.log(); //Espaçamento

  function totalSpent(totalValue) {
    //Função que receberá o total gasto pelo cliente e retornará  os valores de acordo com as condições
    inCash = totalValue * 0.9; //A vista
    inCash.toFixed(2);
    console.log(
      `\nIf you pay cash, will get a 10% discount. The total will be ${inCash.toFixed(
        2
      )} U$.\n `
    );
    twice = totalValue / 2; //Em duas vezes
    twice.toFixed(2);
    console.log(
      `\nIf you pay in twice, will be 2 x ${twice.toFixed(
        2
      )} U$ = ${totalValue} U$.\n`
    );
    if (totalValue >= 100) {
      //Condição do programa para se maior que 100 reais ter a opção de dividir de 3x até 10x
      console.log(`The total amount if paid in insttallments:`);
      for (i = 3; i <= 10; i++) {
        //For para exibir valor de todas as parcelas
        totalValue = totalValue * 1.03;
        console.log(`${i}x = ${totalValue.toFixed(2)} U$`);
      }
    }
  }

  //PRIMEIRA PARTE OK

  // Ao final ele deve retornar o valor total da opção escolhida,
  //  guardar em uma lista e recomeçar

  console.log(totalSpent(spent));

  console.log(`\n\n`);

  do {
    // do while para o usuário escolher a forma de pagamento, enquanto digitado um número que não seja 1 || 2 || 3 (opções de pagamento)
    console.log(`
Option [1] = in cash.
Option [2] = twice.
Option [3] = 3x to 10x
Type the number of the option: [1] [2] [3]
`);
    paymentChoice = +prompt(`What option do you choose:`);
    if (paymentChoice == 3) {
      console.log();
      parcel = +prompt(`Number of parcel: `);
  }
  } while (
    paymentChoice != "1" &&
    paymentChoice != "2" &&
    paymentChoice != "3"
  ); //encerrando o do while para escolha de forma de pagamento

  if (paymentChoice === 1) {
    //Condicionais para exibir e adicionar na lista de acordo com a forma de pagamento escolhida - linha: 86 até 112
    console.log(
      `\nYou chose pay in cash. The total purchased ${inCash.toFixed(2)} U$ \n`
    );
    salesAmount1.push(inCash);
  }
  if (paymentChoice === 2) {
    console.log(
      `\nYou chose pay in twice of ${twice} x 2 = ${spent.toFixed(2)} U$`
    );
    salesAmount2.push(twice);
  }
  if (paymentChoice === 3) {
    for (i = 3; i <= parcel; i++) {
      //For para calcular valor em parcelas
      spent = spent * 1.03;
    }
    parcelValue = spent / parcel;
    parcelValue.toFixed(2);
    console.log(
      `\n\nYou chose pay in ${parcel} times. Each parcel will be ${parcelValue.toFixed(
        2
      )} = ${spent.toFixed(2)} U$`
    );
    salesAmount3.push(spent);
  }
} //while true no inicio com break na linha 26

function balance (){ //função que soma os arrays terei que colocar um continue caso a lista esteja vazia pois se a lista ficar vazia está quebrando
const total1 = salesAmount1.reduce(
  (total, currentElement) => total + currentElement
);
const total2 = salesAmount2.reduce(
  (total, currentElement) => total + currentElement
);
const total3 = salesAmount3.reduce(
  (total, currentElement) => total + currentElement
);

let sold = total1 + total2 + total3

console.log(`
The total sold on the day is: ${sold.toFixed(2)} U$
Sold in cash: ${salesAmount1.length}
Sold in twice: ${salesAmount2.length}
sold in installments: ${salesAmount3.length}
`);
}

console.log(balance());