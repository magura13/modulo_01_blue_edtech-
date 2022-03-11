// function somar(a, b) {
//   return a + b;
// }

// const resultado = somar(1, 2);
// console.log({ resultado });

// // arrow function

// const somarArrow = (a, b) => {
//   return a + b;
// };

// const resultadoArrow = somarArrow(1, 2);
// console.log({ resultadoArrow });

// const subtracaoArrow = (a, b) => {
//   return a - b;
// };

// const resultadoSubtracao = subtracaoArrow(4, 2);
// console.log({ resultadoSubtracao });

// //NA ARROW FUNCTION QUANDO TENHO APENAS UMA LINHA E ESSA É DE RETORNO, POSSO FAZER O SEGUINTE:
// //APAGAR A CHAVE, APAGAR O RETORNO E SUBIR TODOS PARA A LINHA DE CIMA

// const subtracaoArrow1 = (a, b) => a - b; // A MESMA FUNCÃO DA LINHA 17!

// const resultado1Subtracao = subtracaoArrow1(4, 2);
// console.log({ resultado1Subtracao });

// //

// const exibirNome = (nome) => console.log(nome);
// const exibirNome2 = console.log;
// //const exibirNome = nome => console.log(nome);//QUANDO TEMOS APENAS UM PARÂMETRO OS PARÊNTESES SÃO OPCIONAIS

// exibirNome("Tiago Lelis Stehling Santos");

// // const resultadoExibirNome = exibirNome("Tiago Lelis Stehling Santos");
// // console.log(resultadoExibirNome); //undefined PQ? O console.log por padrão retorna void

//  const resultadoExibirNome2 = exibirNome2("@tiagolelis");
//  console.log({resultadoExibirNome2});

// forEach
//É UM METODO DE PROTOTYPE

//normalmente para varrer os valores dessa lista usamos um forOf
// for (const numero of numeros) {
//   console.log({ numero });
// }
//OUTRA FORMA SERIA O forEach

// const somarArrow = (a, b) => a + b;

// function minhaFuncao(valor, indice, lista) {
//   console.log({ valor, indice, lista });
// }

// minhaFuncao(100, 200, 300);

// const numeros = [1, 2, 3];

// numeros.forEach(minhaFuncao);

// //função anônima - coloquei a função direto dentro do forEach
// console.log();
// numeros.forEach(function (valor, indice, lista) {
//   console.log({ valor, indice, lista });
// });

// //convertendo a função anônima para Arrow Function
// console.log();
// numeros.forEach((valor, indice, lista) =>
//   console.log({ valor, indice, lista })
// );

// //Antes eu tinha um objeto
// console.log();
// numeros.forEach(console.log);

//FILTER
// const nomes = ["Tiago", null, "Lelis", undefined, "Stehling", ""];

// const nomesLimpos = [];

// for (const nome of nomes) {
//   if (nome !== undefined && nome !== null && nome !== "") {
//     nomesLimpos.push(nome);
//   }
// }
// console.log({ nomesLimpos });

// // const nomesLimpoos2 = nomes.filter(function (value, index, array) {
// //   return Boolean(value); //  = return value !== undefined && value !== null && value !== "";
// // });
// // console.log({ nomesLimpoos2 });

// // const nomesLimpoos2 = nomes.filter(
// //   (value, index, array) => Boolean(value) //  = return value !== undefined && value !== null && value !== "";
// // );
// // console.log({ nomesLimpoos2 });
// //BRINCANDO UM POUCO DE CLEAN CODE
// const nomesLimpoos2 = nomes.filter(Boolean); //  = return value !== undefined && value !== null && value !== "";

// console.log({ nomesLimpoos2 });

const numeros = [5, 15, 45, 90, 270];

const novaLista = [...numeros];
console.log({ novaLista });

function teste(parametro1) {
  console.log(parametro1, typeof parametro1);
}
teste({ numeros });
teste(...numeros)