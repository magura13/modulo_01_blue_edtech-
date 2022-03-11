const prompt = require(`prompt-sync`)();

const number = +prompt(`Type a number: `)

for (let i = 0; i <= number; i++) {
  if (i % 2 == 1) {
    console.log({ i });
  }
}
