// const prompt = require(`prompt-sync`)();

// let sim = 0; //CONTADOR QUE SERÁ CALCULADO AO FINAL QUANTOS "SIM" OBTIVE COMO RESPOSTA, ADIDIONANDO ELE AO LOOP
// let pergunta = '';
// console.clear();
// const name = prompt(
//     `Olá, hoje você irá participar do projeto 1 da Blue Ed Tech. Qual o seu nome? `,
// ); // pergunta interativa básica

// console.clear();

// console.log(`\tA TRAVESSIA DA SERRA DO ESPINHAÇO`);
// console.log(`\n\t${name} resolveu um dia fazer a travessia da Serra do Espinhaço. A serra do Espinhaço é uma cadeia montanhosa localizada no planalto Atlântico, estendendo-se pelos estados de Minas Gerais e Bahia.
// A serra do Espinhaço pode ser considerada a única cordilheira do Brasil, pois é singular em sua forma e formação. Há mais de um bilhão de anos em constante movimento, é uma cadeia de montanhas bastante longa e estreita, entrecortada por picos e vales.
// Tem cerca de 1000 quilômetros de extensão, no sentido latitudinal do Quadrilátero Ferrífero, ao Norte de Minas e, depois de uma breve interrupção, alcança a porção sul da Bahia. Todo esse percurso apresenta uma diferença mínima de longitude, ou seja,
// sua largura varia apenas entre 50 e 100 km. Entre os municípios que são cortados pela Serra do Espinhaço estão Ouro Branco, Ouro Preto, Catas Altas, Caeté, Serro, Diamantina, Botumirim, Grão Mogol, Itacambira, Porteirinha, Mato Verde, Espinosa, Olhos-d'Água, e Monte Azul.
// Foi ao longo da serra do Espinhaço que a mineração, no período colonial se deu, principalmente. E foi na Serra do Espinhaço, em consequência, que os núcleos urbanos mais importantes se formaram (Ouro Preto, Sabará, Serro e São João Del Rei, por exemplo, dentre outros).
// As raízes africanas, europeias e indígenas se misturam no Espinhaço, deixando marcas nos costumes e manifestações culturais das comunidades locais. A beleza e a cultura da região oferecem condições para o desenvolvimento do ecoturismo.
// \tContudo ${name} precisará de conferir se está realmente pronto para essa grande aventura, por essa Serra que representa a história desse país incrível chamado Brasil. `); // introdução, história, etc..

// console.log(
//     `\n\n${name}, responda as perguntas que seguem para sabermos se está pronto. As perguntas devem ser respondidas com [1] = sim ou [0] = não. `,
// );

// console.log(`\n\n`);

// do {
//     //LOOP PARA ACEITAR SOMENTE A RESPOSTA 0 || 1, while A RESPOSTA NÃO FOR ESSA NÃO SAIRÁ DO LOOP
//     pergunta = +prompt(
//         `Você treinou o suficiente para atravessar todos os km's e desafios que estarão no seu caminho?   `,
//     );
//     if (pergunta != 1 && pergunta != 0) {
//         console.log(
//             `Responda com os dígitos númericos [1] ou [0]. Outra resposta não será aceita`,
//         );
//     }
//     if (pergunta == 1) {
//         sim++;
//     }
// } while (pergunta != 1 && pergunta != 0);

// console.clear();

// do {
//     pergunta = +prompt(
//         `Você estudou bastante toda a geografia, relevos e caminhos que irá enfrentar?  `,
//     );
//     if (pergunta != 1 && pergunta != 0) {
//         console.log(
//             `Responda com os dígitos númericos [1] ou [0]. Outra resposta não será aceita`,
//         );
//     }
//     if (pergunta == 1) {
//         sim++;
//     }
// } while (pergunta != 1 && pergunta != 0);

// console.clear();

// do {
//     pergunta = +prompt(
//         `Avisou a fámilia e amigos por todos os lugares por onde irá passar? `,
//     );
//     if (pergunta != 1 && pergunta != 0) {
//         console.log(
//             `Responda com os dígitos númericos [1] ou [0]. Outra resposta não será aceita`,
//         );
//     }
//     if (pergunta == 1) {
//         sim++;
//     }
// } while (pergunta != 1 && pergunta != 0);

// console.clear();

// do {
//     pergunta = +prompt(
//         `Preparou todo o equipamento necessário para a aventura?   `,
//     );
//     if (pergunta != 1 && pergunta != 0) {
//         console.log(
//             `Responda com os dígitos númericos [1] ou [0]. Outra resposta não será aceita`,
//         );
//     }
//     if (pergunta == 1) {
//         sim++;
//     }
// } while (pergunta != 1 && pergunta != 0);

// console.clear();

// do {
//     pergunta = +prompt(`Está levando o kit de primeiros socorros?   `);
//     if (pergunta != 1 && pergunta != 0) {
//         console.log(
//             `Responda com os dígitos númericos [1] ou [0]. Outra resposta não será aceita`,
//         );
//     }
//     if (pergunta == 1) {
//         sim++;
//     }
// } while (pergunta != 1 && pergunta != 0);

// console.clear();

// if (sim == 5) {
//     //CONDICIONAIS, DE ACORDO COM A QUANTIDADE DO CONTADOR "SIM" IRÁ ENTRAR EM CADA CONDIÇÃO
//     console.log(
//         `Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.`,
//     );
// } else if (sim == 4) {
//     console.log(
//         `Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.`,
//     );
// } else if (sim == 3) {
//     console.log(
//         `Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.`,
//     );
// } else if (sim == 2 || sim == 1) {
//     console.log(`Você falha, mas ainda consegue fugir da situação.`);
// } else {
//     console.log(`Você falha miseravelmente.`);
// }

// prompt(`\t...`);

const prompt = require("prompt-sync")();

console.log(`****Essa história será sobre o personagem que você criar!****\n`);

let name = prompt(`Qual seu nome? `);
console.log(`\nBem vindo ${name}`);

console.log(`\nEm uma vila distante chamada Vinland Sun, vivia uma criança chamada ${name}, 
filhoª de Thors "O espadachim indomável" e Eldora uma maga especialista em magia elemental.\n
Frequentemente a vila recebia invasões de demonios que comiam as pessoas, e o pai de ${name} era o chefe
da guarda da cidade e também era muito forte.\nCerto dia, em treinamento que ${name} fazia todos os dias junto de seu pai, 
um estranho comerciante passou e contou uma história sobre "As respirações", e falou o nome de um velho que 
morava no pé da montanha, perto de onde morava e que ele sabia mais sobre esse assunto.
\nComo ${name} era muito empanhado nos treinamento, decidiu partir em busca do velho para poder aprender
sobre as respirações e se dedicar junto de seu pai na proteção da vila.\n`);

let cont = 0;
let yes = 0;
let lifeBoss = 0;

console.log(`Digite "sim" ou "nao", para responder as perguntas!\n`);

let sensei = prompt(
  `Você conseguiu encontar o velho da montanha? `
).toLowerCase();

while (sensei !== `sim` && sensei !== `nao`) {
  console.log("\nDigite entre sim e não: \n");
  sensei = prompt(`Conseguiu encontrar o velho?`).toLowerCase();
}

if (sensei === `sim`) {
  console.log(`\nAo encontrar o velho que se chama Izui. Ele pediu para ${name} fazer um teste, se 
passasse no teste, Izui o treinaria.\n.\n.\n.`);

  console.log(`Depois de 4 anos de treinamento de respiração, para poder fortalecer o corpo, espirito e as habilidades. ${name}
retorna a sua vila, e seu pai, que está sua espera e já um pouco debilitado devido a idade. E pergunta para ele se pode tomar o 
posto de guarda da cidade, e fez a seguinte pergunta: \n`);
} else if (sensei === `nao`) {
  console.log(`\nComo ${name} não encontrou o velho, teve que pesquisar e treinar sozinho.
Demorou para se fortalecer e voltou para casa, não tão diferente de quando saiu, e foi ter uma conversa com seu velho pai.
E ele perguntou para ${name}: \n`);
}

let body = prompt(
  `Você conseguiu se fortalecer seu corpo com o treinamento que foi fazer? `
).toLowerCase();

while (body !== `sim` && body !== `nao`) {
  console.log("\nDigite entre sim e não: \n");
  body = prompt(`Você conseguiu se fortalecer? `).toLowerCase();
}

if (body === `sim`) {
  console.log(`\nJá que ${name} estava bem fortalecido, Thors seu pai, mandou ele em busca de um velho amigo,
um ferreiro, para poder fazer uma espada com um ferro especial, para poder acabar com as ameaças da cidade.\n`);
} else if (body === `nao`) {
  console.log(`\nComo ${name} não conseguiu se fortalecer, a cidade foi invadida por demonios na noite seguinte,
e sem sem pai, e ninguem a altura para proteger a cidade, e ${name} teve que partir em busca de vingança.
Lendo as anotações de seu pai, descobriu sobre um velho amigo ferreiro que vivia isolado. E ${name} parte para acha-lo.`);
}

console.log(`\nAo chegar em uma cidadezinha no meio da floresta, ${name} procura pelo amigo de seu pai para poder fazer 
sua espada.\n`);

console.log(
  `\nApós encontrar o ferreiro, que se chamava Akusa, conversaram por um tempo. E Akusa perguntou para ${name}: \n`
);

const elementos = ["fogo", "agua", "terra", "raio", "nevoa", "vento"];
const cores = ["vermelha", "azul", "marsala", "amarela", "cinza", "verde"];

let elementoEscolhido;

do {
  elementoEscolhido = prompt(
    `${name}, tenho esses elementos disponivel pra você: ${elementos}. Qual você deseja colocar em sua espada? `
  ).toLowerCase();
} while (!elementos.includes(elementoEscolhido));

const elementoS = elementos.indexOf(elementoEscolhido);
const cor = cores[elementoS];

console.log(
  `\nSua espada ficou com a cor ${cor} devido ter escolhido o elemento "${elementoEscolhido}".`
);

console.log(
  `\nAo fazer sua espada no elemento ${elementoEscolhido}, ${name} teve que partir em busca de um novo treinamento.`
);

console.log(`\nE como sua mãe era uma maga, apresentou ele ao Sishui, que era mestre no elemento ${elementoEscolhido}. E assim começaram
o treinamento de dominio angular ${elementoEscolhido}.\n`);

let training = prompt(
  `Conseguiu dominar todos os 76 passos do dominio angular ${elementoEscolhido}? `
).toLowerCase();

while (training !== `sim` && training !== `nao`) {
  console.log("\nDigite entre sim e não: \n");
  training = prompt(`Você conseguiu dominar os 76 passos? `).toLowerCase();
}

if (training === `sim`) {
  console.log(
    `\nAgora, dominando todos os 76 passos, ${name} pode retornar a sua vila, e herdar o lugar de Thors, seu pai.\n`
  );

  console.log(
    `\nA caminho de casa, ${name} vê um enorme dragão demonio, Bahamut, indo em direção a sua vila e ele começa a se apressar para chegar em casa.\n`
  );
} else if (training === `nao`) {
  console.log(
    `\nMesmo sem ter dominado todos os passos. ${name} retorna para casa, pois já estava muito tempo fora.\n.\n.\n.`
  );

  console.log(
    `\nA caminho de casa, ${name} vê um enorme dragão demonio, Bahamut, indo em direção a sua vila e ele começa a se apressar para chegar em casa.\n`
  );
}

console.log(`\nNo caminho ele encontrou muitos demonios com teve que lutar, e assim demorando ainda mais para chegar em casa.
Mas acabou servindo de um belo treinamento para refinar ainda mais o dominio angular. E no meio da confusão tinha uma jovem sendo atacada.\n`);

let save = prompt(`Deseja salvar a jovem? `);

while (save !== `sim` && save !== `nao`) {
  console.log("\nDigite entre sim e não: \n");
  save = prompt(`Quer salvar a jovem? `).toLowerCase();
}

if (save === `sim`) {
  console.log(
    `A jovem moça simplesmente foi embora sem ao menos agradecer, ${name} ficou indigado.`
  );
} else if (save === `nao`) {
  console.log(`${name} deixou a jovem morrer sem ter piedade.`);
}

console.log(`\nChegando perto da vila, viu que o dragão que tinha visto antes estava prestes a atacar a vila dele. 
Como ele teve que derrotar vários demonios ao caminho. Ele acumulou forças para derrotar o dragão Bahamut.\n`);

let strength = prompt(`Conseguiu acumuluar forças caçando demônios? `);

while (strength !== `sim` && strength !== `nao`) {
  console.log("\nDigite entre sim e não: \n");
  strength = prompt(`Conseguiu acumular forçar? `).toLowerCase();
}

if (strength === `sim`) {
  console.log(
    `\nCom toda a força acumulada, agora precisa derrotar o dragão Bahamut!!!\n`
  );
} else if (strength === `nao`) {
  console.log(
    `Mesmo não estando tão forte ainda, você precisa tentar derrotar o dragão para salvar sua vila.`
  );
}

// VALIDAÇÃO DE QUANTOS SIM O USUÁRIO DIGITAR

if (body === `sim`) {
  yes++;
}

if (sensei === `sim`) {
  yes++;
}

if (save === `sim`) {
  yes++;
}

if (training === `sim`) {
  yes++;
}

if (strength === `sim`) {
  yes++;
}

// RESPOSTA DE ACORDO COM A VALIDAÇÃO

if (yes === 1) {
  console.log(
    `\n${name}, você precisa treinar muito mais. Com esse nível você merrerá!\n`
  );
} else if (yes === 2) {
  console.log(`\n${name}, treine mais, lhe falta ódio!\n`);
} else if (yes === 3) {
  console.log(
    `\n${name}, está quase lá, o boss irá quebrar sua espada nesse nivel. Mas vamos lá.\n`
  );
} else if (yes === 4) {
  console.log(
    `\nCom esse nível vocÊ vai conseguir derrota-lo com algum esforço.\n`
  );
} else if (yes === 5) {
  console.log(`\n${name}, conseguiu chegar no ápice da sua força!!\n`);
}

console.log(
  `\n${name}, para salvar sua vila, você vai precisar enfrentar o dragão Bahamut.\n`
);

// VIDA DO BOSS VARIA DE ACORDO COM O NUMERO DE "SIM" QUE O JOGADOR DIGITAR

if (yes === 1) {
  lifeBoss = 1000000000000;
} else if (yes < 3) {
  lifeBoss = 500000000;
} else if (yes <= 3) {
  lifeBoss = 100500;
} else if (yes <= 4) {
  lifeBoss = 50000;
} else if (yes <= 5) {
  lifeBoss = 1000;
}

// CONDIÇÃO QUE VAI VARIAR A VIDA DO BOSS DE ACORDO COM AS RESPOSTAR DO USUARIO

if (lifeBoss === 1000000000000) {
  console.log(
    `\nVocê quis continuar mesmo fraco, não é páreo para o Bahamut\n`
  );
} else if (lifeBoss === 500000000) {
  console.log(`\nNão terá chance, e acaborá morrendo, treine um pouco mais.\n`);
} else if (lifeBoss === 100500) {
  console.log(
    `\nVocê irá quase morrer e se ferir muito, mas também, não conseguirá derrotá-lo.\n`
  );
} else if (lifeBoss === 50000) {
  console.log(
    `\nIrá se ferir bastante, mas com paciencia vai conseguir derrotá-lo e retornar para casa.\n`
  );
} else if (lifeBoss === 1000) {
  console.log(
    `\nUm guerreiro lendário como você não terá muitos esforços para derrotá-lo, ${name} retorne com glória para casa!!!\n`
  );
}

// REPETIDOR E CONTADOR DE GOLPES

let valueDmg = +prompt(`${name}, digite seu dmg por golpe: `);

while (valueDmg < 50 || valueDmg > 500) {
  valueDmg = +prompt(
    `Tenha um entre 50 e 500 AD para enfrentar Bahamut. Digite novamente depois de ter treinado: `
  );
}

console.log(
  `\nVocê vai ter que aplicar ${Math.ceil(
    lifeBoss / valueDmg
  )} golpes no Bahamut.\n`
);

// CONDIÇÃO FINAL PARA RETORNAR OU VOLTAR AO INICIO;

if (lifeBoss === 50000 || lifeBoss === 1000) {
  console.log(`\nApos ${name} ter derrotado o dragão Bahamut, uma era de paz começou a reinar sobre Vinland Sun.
${name} com a derrota do dragão foi nomeado a lider da vila, e assim foram pelas proximas 3 gerações. Até uma proxima ameaça aparecer...\n\n[FIM]`);
} else {
  console.log(
    `\nVocê morreu. Bahamut era muito forte. volte ao inicio, treine, derrete o Bahamut e retorne pra casa.`
  );
}