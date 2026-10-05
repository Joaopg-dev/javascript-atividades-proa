let odometroInicio = parseFloat(prompt("Informe o valor inicial do odômetro"))
let odometroFinal = parseFloat(prompt("Informe o valor final do odômetro"))

let combustivelGasto = parseFloat(prompt("Informe a quantidade de combustível gasto: "))
let valorRecebido = parseFloat(prompt("Informe o valor recebido dos passageiros: "))

let kmRodado = odometroFinal - odometroInicio 
let mediaConsumo = kmRodado / combustivelGasto

let lucro = valorRecebido - (combustivelGasto * 2.9)

console.log("-".repeat(40))
console.log(`Quantidade de Km Rodados: ${kmRodado.toFixed(2)}`)
console.log(`Media de consumo por Km/L: ${mediaConsumo.toFixed(2)}`)
console.log(`Lucro final (descontado combustível): ${lucro.toFixed(2)}`)
console.log("-".repeat(40))