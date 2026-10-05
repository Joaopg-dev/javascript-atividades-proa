let custoFabrica = parseFloat(prompt("Informe o custo de fábrica do automóvel: "))

let percentualDistribuidor = custoFabrica * 0.28
let percentualImpostos = custoFabrica * 0.45

let valorConsumidor = custoFabrica + percentualDistribuidor + percentualImpostos

console.log("-".repeat(40))
console.log(`O valor final do automóvel (Junto aos valores de distribuidor e impostos) é: R$${valorConsumidor}`)
console.log("-".repeat(40))