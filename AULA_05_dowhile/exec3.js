const prompt = require(`prompt-sync`)();

do {
  number = +prompt(`Type a even number: `);
} while (number % 2 != 0);
