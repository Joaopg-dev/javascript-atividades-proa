let valor = parseFloat(prompt("Informe o valor base da prestação: "))
let taxa = parseFloat(prompt("Informe a taxa de juros (%): "))
let tempo = parseFloat(prompt("Informe o tempo de atraso (em dias): "))

let prestacao = valor + (valor * taxa / 100) * tempo

console.log(`O valor da prestação em atraso é: R$ ${prestacao}`)