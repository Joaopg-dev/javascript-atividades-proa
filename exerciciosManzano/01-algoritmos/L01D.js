let tempo = parseFloat(prompt("Informe o tempo gasto em sua viagem: "))
let velocidadeMedia = parseFloat(prompt("Informe a velocidade media percorrida: "))

let distancia = tempo * velocidadeMedia
let litrosUsados = distancia / 12

console.log("-".repeat(50))
console.log(`A distância percorrida será de: ${distancia}km`)
console.log(`A quantidade de litros gastos é de: ${litrosUsados}`)
console.log("-".repeat(50))

