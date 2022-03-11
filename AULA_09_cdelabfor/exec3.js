const prompt = require(`prompt-sync`)();

const list = [];

const choice = +prompt(`Type how many number will register: `); //quantos números o usuário quer adicionar!

for (let i = 1; i <= choice; i++) {
  //adicionando os números a lista
  list.push(+prompt(`Type the ${i}º number to register: `));
  console.log();
}
//fazer a soma dos valores do array
let add = 0;
for (let t = 0; t <= list.length - 1; t++) {
  add = add + list[t];
}

function getMaxOfArray(array) {
  //Essa função está me retornando o maior valor do Array
  return Math.max.apply(null, array);
}

function getMinOfArray(array) {
  //Essa função está me retornando o menor valor do Array
  return Math.min.apply(null, array);
}

console.log(`
  The greater number of the array is ${getMaxOfArray(list)}.
  The smaller number of the array is ${getMinOfArray(list)}.
  The sum of the numbers in the array is ${add}.
  `);
