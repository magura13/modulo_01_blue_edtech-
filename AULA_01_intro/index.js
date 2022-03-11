console.log(`Hello, World!`);

// console.log(typeof(any)); // typeof nos mostra qual o tipo da variável armazenada.

// const nome = prompt('Digite seu nome: ');
// const nomeUpper = nome.toUpperCase()//.toLowerCase funciona da mesma forma para letras minúsculas!

// console.log(nome);
// console.log(nomeUpper);

// const nome = 'Blue EdTech';

// const nome1 = nome.indexOf('e');
// console.log(nome1); // 3 o primeiro "e" está na 3ª posição

// const nome2 = nome.indexOf('e',4);
// console.log(nome2); // 8 o 4 "e" está na 8 posição
// // atenção ao .indexOf  
// //pode ser usado em várias situações
//https://www.youtube.com/watch?v=b28xNwHrIuI vídeo interessante sobre .indexOf


// const nome = 'Blue EdTech';

// const nomeSlice1 = nome.slice(1);
// console.log(nomeSlice1); //lue EdTech

// const nomeSlice2 = nome.slice(1,3);
// console.log(nomeSlice2); //lu

// const nomeSlice3 = nome.slice(0,-3); 
// console.log(nomeSlice3);// Blue EdT ficou confuso -3 parece que começa do final da string!



// O método split() vai dividir uma string em uma lista ordenada de substrings, 
// coloca essas substrings em um array (veremos mais adiante) e retorna o array.
// A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.

// const nome = 'Blue EdTech';
// const nomeSplit = nome.split(' ');
// console.log(nomeSplit); //criou um array com as duas strings = nomeSplit ["Blue", "Edtech"]