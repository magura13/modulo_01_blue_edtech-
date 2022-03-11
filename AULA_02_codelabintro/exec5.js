const prompt = require(`prompt-sync`)();

console.log(`
\tWelcome to the Atis Hotel.
We have the following hosting options:
[1] Master suite
[2] Standart Suite
[3] Hostel`)
console.log();
do {
    var choice = +prompt(`What is your choice: `)
    console.log();
} while(choice !== 1 && choice !==2 && choice !==3)

if (choice == 1){
    console.log(`You chose Master Suite.`)
} else if (choice == 2) {
    console.log(`You chose Standart Suite.`)
} else if (choice == 3){
    console.log(`You chose Hostel.`)
}