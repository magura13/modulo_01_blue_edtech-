// Peça ao usuário uma quantidade de linhas e e outra de colunas,
//  e imprima essas informações na forma de uma tabela como no exemplo
//   de 3 linhas e 4 colunas:
// [ 0, 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]

const prompt = require(`prompt-sync`)();

let lines;
let columns;

do{
     lines = +prompt(`Enter the number of lines: `);
} while(isNaN(lines));

do{
     columns = +prompt(`Enter the number of columns: `)
} while(isNaN(columns));


//EXECUTA O CALCULO PARA CONSTRUIR CADA LINHA
for(let lineA = 0; lineA < lines; lineA++){
    //CRIA UMA NOVA LISTA DE NUMEROS
    const numbers = [];

    //PREENCHE A LISTA DE NÚMEROS COM OS NÚMEROS CALCULADOS
    for(let number = lineA; number < lineA + columns; number++){
        numbers.push(number)
    }

    //EXIBE A LISTA COM NÚMEROS
    console.log(numbers);
}