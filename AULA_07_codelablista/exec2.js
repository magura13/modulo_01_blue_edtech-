const prompt = require(`prompt-sync`)();

const qtdGrades = +prompt(`How many grades will register: `);

let approved = [];
let recovery = [];
let failed = [];

let cont = 1;
while (cont <= qtdGrades) {
  let grades = +prompt(`Type the ${cont}ª grade: `);
  if (grades >= 7) {
    approved.push(grades);
  }
  if (grades >= 5 && grades < 7) {
    recovery.push(grades);
  }
  if (grades < 5) {
    failed.push(grades);
  }
  cont++
}

console.log(`
Approved students: ${approved.length}\nRecovery students : ${recovery.length}\nFailed students : ${failed.length}
`);
