let cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar: "))
let quantidadeDolar = parseFloat(prompt("Digite a quantidade de dólares disponível: "))

let conversao = quantidadeDolar * cotacaoDolar

console.log("-".repeat(50))
console.log(`Quantidade de dólares fornecidos: $ ${quantidadeDolar.toFixed(2)}`)
console.log(`Valor em reais adquirido: R$ ${conversao.toFixed(2)}`)
console.log("-".repeat(50))