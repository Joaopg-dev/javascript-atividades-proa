let comprimentoPista = parseFloat(prompt("Informe o comprimento em metros da pista de corrida: "))
let numerosVoltas = parseFloat(prompt("Informe o número de voltas a serem realizadas: "))
let numerosreabastecimento = parseFloat(prompt("Informe o número de reabastecimentos a serem realizados: "))
let consumocombustivel = parseFloat(prompt("Informe o consumo de combustível (KM/L): "))

let metrosPercorridos = comprimentoPista * numerosVoltas
let quilometrosPercorridos = metrosPercorridos / 1000

let metrosreabastecimento = quilometrosPercorridos / (numerosreabastecimento + 1)
let litrosCombustivel = metrosreabastecimento / consumocombustivel
 
console.log("-".repeat(40))
console.log(`A valor percorrido em metros na corrida e de: ${metrosPercorridos}`)
console.log(`A quantidade de litros por área de reabastecimento é: ${litrosCombustivel}`)
console.log("-".repeat(40))