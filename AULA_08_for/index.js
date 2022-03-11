//FOR INDEXADO PARA QUANDO QUEREMOS VALOR E INDICE DA INFORMAÇÃO
//OU DE CADA ITEM DO ARRAY

//O FOR INDEXADO É MAIS FLEXÍVEL PARA TRABALHAR, TEM MAIS ABERTURAS DE COMO FAZER

// const  names = ["Tiago","Lelis","Stehling","Santos"];
// console.log();

// for (let i = 0;i <= names.length; i++){
//     console.log(`i ${i}`);

//     const nome = names[i];

//     console.log(`const nome = names[${i}] ${nome}`)
// }
// console.log();

// //FOR OFF PARA QUANDO QUEREMOS APENAS VALOR DE CADA ITEM

// console.log();
// for (const nome of names){
//     console.log("nome", nome);
// }
// console.log();

// //FOR IN SERVIRÁ PARA QUANDO QUEREMOS APENAS ÍNDICE DE CADA ITEM DO 
// //ARRAY

// console.log();
// for (const i in names){
//     console.log("i",i);
// }
// console.log();



//DESAFIO É ITERAR O ARRAY DO FIM PARA O COMEÇO TEM 2 FORMAS

const  names = ["Tiago","Lelis","Stehling","Santos"];

// names.reverse();

// console.log(names);

// for (const nom of names){
//     console.log(`nom ${nom}`)
// }

//

// for(let t = names.length - 1; t >= 0; t--){
//     const nome = names[t];

//     console.log("nome",t,nome);

// }

//COMPARAÇÃO FOR E WHILE
let num = 0

while (num <= 5){
    console.log(num);
    num++;
}

console.log(

);
for (let t = 0; t <= 5; t++){
    console.log(t)
}