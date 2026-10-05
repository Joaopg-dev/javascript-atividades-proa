let nota01 = parseFloat(prompt("Informe a primeira nota do aluno: ")) 
let nota02 = parseFloat(prompt("Informe a segunda nota do aluno: ")) 
let nota03 = parseFloat(prompt("Informe a terceira nota do aluno: ")) 

let media = ((nota01 * 2) + (nota02 * 3) + (nota03 * 5)) / 10

console.log("-".repeat(40))
console.log(`A média final desse aluno e de: ${media}`)
console.log("-".repeat(40))