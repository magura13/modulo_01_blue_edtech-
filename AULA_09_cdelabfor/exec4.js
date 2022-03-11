const prompt = require(`prompt-sync`)();

const bolsonaro = [];
const lula = [];
const daciolo = [];

const voters = +prompt(`Enter the number of voters: `);

for (let i = 1; i <= voters; i++) {
  console.log(`
For vote in Bolsonaro enter 17.
For vote in Lula enter 13.
For vote in Cabo Daciolo enter 51.
`);

  var vote = +prompt(`${i}° - Type your vote: `);

  if (vote === 17) {
    bolsonaro.push(1);
  } else if (vote === 13) {
    lula.push(1);
  } else if (vote === 51) {
    daciolo.push(1);
  }
}
console.log(`
Candidate Bolsonaro got ${bolsonaro.length} votes.
Candidate Lula got ${lula.length} votes.
Candidate Daciolo got ${daciolo.length} votes.
`);
