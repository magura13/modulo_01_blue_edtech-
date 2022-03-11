let list = [];
var cont1 = 0;
var cont2 = 0;
var cont3 = 0;
var cont4 = 0;
var cont5 = 0;
var cont6 = 0;

while (true) {
  list.unshift(Math.floor(Math.random() * 7));
  if (list[0] === 1) {
    cont1++;
  } else if (list[0] === 2) {
    cont2++;
  } else if (list[0] === 3) {
    cont3++;
  } else if (list[0] === 4) {
    cont4++;
  } else if (list[0] === 5) {
    cont5++;
  } else if (list[0] === 6) {
    cont6++;
  }
  if (list.length >= 100) {
    break;
  }
}

console.log(list);
console.log();
console.log(`
The number of time each number was correct:
number 1 : ${cont1}
number 2 : ${cont2}
number 3 : ${cont3}
number 4 : ${cont4}
number 5 : ${cont5}
number 6 : ${cont6}
`);

//DEU PAU
