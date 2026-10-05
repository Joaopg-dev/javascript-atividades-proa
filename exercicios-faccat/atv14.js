let salarioFixo = parseFloat(prompt("Informe o valor do salário fixo do funcionário: "))
let carrosVendidos = parseFloat(prompt("Informe a quantidade de carros vendidos pelo funcionário: "))
let valorVendas = parseFloat(prompt("Informe o valor obtido pelas vendas: "))
let comissaoFixa = parseFloat(prompt("Digite o valor fixo de comissão por cada carro vendido: "))

let salarioTotal = salarioFixo + (comissaoFixa * carrosVendidos) + (valorVendas * 0.05)


console.log("-".repeat(40))
console.log(`O salário final do funcionário é de: R$${salarioTotal}`)
console.log("-".repeat(40))