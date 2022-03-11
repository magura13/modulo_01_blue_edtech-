//Quando usar o SWITCH e não o IF ELSE???

const prompt = require(`prompt-sync`)();

let test = +prompt(`n: `);

switch (test) {
  case 1:
    console.log("Number 1");
    break;

  case 2:
    console.log(`Number 2`);
    break;

  case 3:
    console.log(`number 3`);
    break;

  default:
    console.log(`Default seria o ELSE do IF Else`);
}

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
