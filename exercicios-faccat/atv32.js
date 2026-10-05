let salarioFixo = parseFloat(prompt("Informe o salário fixo: "))
let vendasEfetuadas = parseFloat(prompt("Informe o valor de vendas: "))
let salarioAjustado

if (vendasEfetuadas > 1500) {
    salarioAjustado = salarioFixo + (vendasEfetuadas * 0.05)
} else {
    salarioAjustado = salarioFixo + (vendasEfetuadas * 0.03)
}
console.log(`O salário total do funcionário é: ${salarioAjustado}`)