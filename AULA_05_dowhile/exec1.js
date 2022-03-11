const prompt = require(`prompt-sync`)();

do {
  var username = prompt(`Type your username: `);

  var password = prompt(`Type your password: `);

  if (username.trim() == password.trim()) {
    console.log(`Username and password cannot be the same.`);
  }
} while (username.trim() == password.trim());


//gostaria de adicionar um .toUppercase() nas variáveis para ser mais uma condição de não aceitar a senha