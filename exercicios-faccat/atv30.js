let horasTrabalhadas = parseInt(prompt("Informe a quantidade de horas trabalhadas no mês: "))
let salarioHora = parseInt(prompt("Informe o salário por hora recebido: "))
let resultado = 0

if (horasTrabalhadas > 160) {
    resultado = horasTrabalhadas * salarioHora + (((horasTrabalhadas - 160) * 0.5) * salarioHora)
} else {
    resultado = horasTrabalhadas * salarioHora
}

console.log(`${resultado}`)