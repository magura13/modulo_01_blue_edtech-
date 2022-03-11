const number = [];

cont = 1;
while (cont <= 20) {
  let random = Math.floor(Math.random() * 101);
  number.push(random);
  cont++;
}

number.sort();
console.log(number);