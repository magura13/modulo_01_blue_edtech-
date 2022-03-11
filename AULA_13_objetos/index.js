//OBJETOS PRECISAM DE NOMES OU VALORES PARA SEUS ÍNDICES
//TODO OBJETO POSSUI OBRIGATORIAMENTE CHAVE E VALOR
//INDEX E VALOR
//KEY E VALUE

// const pessoa = { //MESMO SENDO CONST POSSO ALTERAR OS VALORES DENTRO
//   nome: "Tiago",
//   sobrenome: "Stehling",
//   idade: 29,
// };

// console.log(pessoa);

// console.log("Nome: " + pessoa.nome);

// console.log(pessoa["idade"]);

// pessoa.idade = 30;

// console.log(pessoa["idade"]);
// const nome = "Tiago";
// const sobrenome = "Stehling";
// const idade = 30;

// const pessoa = {
//   "nome teste": nome, //caso o nome tenho espaço eu posso usar as aspas
//   sobrenome,
//   idade,
//   vivo: true, //posso ter um boolean
//   lista: [1, 2, 3], //posso ter qualquer tipo de lista
// };

// console.log(pessoa);

//JSON JavaScript Object Notation
//

// const pessoaEmJson = JSON.stringify(pessoa); //transformando um objeto JavaScrip em Json

// console.log(typeof pessoaEmJson, pessoaEmJson);

let friend = {
  nome: "Tiago",
  sexo: "M",
  altura: 1.71,
  crescer(a = 0) {
    this.altura += a;
  },
  peso: 78.8,
  engordar(p = 0) {
    this.peso += p;
  },
};
friend.engordar(1.4);
friend.crescer(0.2);
friend.engordar(1.4);
friend.crescer(0.2);


console.log(friend);
