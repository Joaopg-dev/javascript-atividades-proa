let cotacaoDolar = parseFloat(prompt("Digite a cotação do dolar: "))
let quantidadeReal = parseFloat(prompt("Digite a quantidade de reais que deseja converter: "))

let conversao = quantidadeReal / cotacaoDolar

console.log("-".repeat(50))
console.log(`Qunatidade de reais fornecidos para conversao: R$${quantidadeReal.toFixed(2)}`)
console.log(`Valor de dolar adquirido: $${conversao.toFixed(2)}`)
console.log("-".repeat(50))