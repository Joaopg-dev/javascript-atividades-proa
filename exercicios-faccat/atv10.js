let salarioHora = parseFloat(prompt("Informe seu salário por hora: "))
let horasTrabalhadas = parseFloat(prompt("Informe quantidade de horas trabalhadas por mês: "))

let salarioMensal = salarioHora * horasTrabalhadas

console.log(`Você receberá por mês um total de: ${salarioMensal}`)