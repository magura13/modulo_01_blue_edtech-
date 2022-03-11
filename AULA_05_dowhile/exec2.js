const prompt = require(`prompt-sync`)();

do { //validando o nome
    names = prompt(`Type a name: `)
    if (names.length <= 3){
        console.log(`Name must be longer than three characters.`)
    }
} while(names.length <= 3)

console.log();

do { //validando idade
    age = +prompt(`Type your age: `)
    if (age < 0 || age > 150){
        console.log(`Age must be less than 150 and greater than 0.`)
    }
}while (age < 0 || age > 150)

console.log();

do { //validando salário
    wage = +prompt(`Type your wage: `)
    if(wage <= 0){
        console.log(`Wage must be greater than 0.`)
    }
}while(wage <= 0)

console.log();

//do{ 
//    maritalStatus = prompt(`Typer your marital status [m]arried [s]ingle [w]idower [d]ivorced : `)
//    maritalStatus = maritalStatus.toUppercase
//    if(maritalStatus !== "m" || maritalStatus !== "s" || maritalStatus !== "w" || maritalStatus == "d"){
//        console.log(`Marital Status must be [M]arried [S]ingle [W]idower [D]ivorced: `);
//    }
//}while(maritalStatus !== "m" || maritalStatus !== "s" || maritalStatus !== "w" || maritalStatus == "d")
//Marital Status: ${maritalStatus} 

console.log(`
Name: ${names}
Age: ${age}
Wage: ${wage}

`)