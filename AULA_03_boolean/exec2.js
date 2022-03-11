const prompt = require(`prompt-sync`)();
console.log();
const note1 = +prompt(`Enter your math note:`);
console.log();
const note2 = +prompt(`Enter your english note:`);
console.log();
const note3 = +prompt(`Enter your science note: `);
console.log();
const note4 = +prompt(`Enter your history note: `);
console.log();

const average = (note1 + note2 + note3 + note4) / 4;

if (average >= 7){
    console.log(`Your average was ${average}, you are approved`)
} else if (average >= 5 && average <7){
    console.log(`Your average was ${average}, you are in final test`)
} else if (average < 5){
    console.log(`Your average was ${average}, you are disapproved`)
}
