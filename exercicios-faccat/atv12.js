let salarioMensal = parseFloat(prompt("Informe o salário mensal: "))
let reajuste = parseFloat(prompt("Informe o percentual de reajuste: "))

let reajusteSalario = (reajuste * 0.01) * salarioMensal

let novoSalario = salarioMensal + reajusteSalario

console.log("-".repeat(40))
console.log(`O valor antigo do salário era de ${salarioMensal}`)
console.log(`O novo valor do salário mensal e de: ${novoSalario}`)
console.log("-".repeat(40))