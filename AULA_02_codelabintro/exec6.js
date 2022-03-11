const prompt = require(`prompt-sync`)();
console.log();
const life = +prompt(`Type the monster life. It can not be <10 or >50: `);
console.log();
const atack = +prompt(`Type your player atack. It can not be <5 or >10: `);

const rounds = life / atack;
console.log();
console.log(`You need ${Math.ceil(rounds)} rounds to defeat the monster.`)