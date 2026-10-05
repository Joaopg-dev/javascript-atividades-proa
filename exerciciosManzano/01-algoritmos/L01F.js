let valorA = prompt("Informe o primeiro valor: ")
let valorB = prompt("Informe o segundo valor: ")
let auxiliar;

auxiliar = valorB
valorB = valorA
valorA = auxiliar

console.log("Troca de valores")
console.log(`Primeiro valor = ${valorA}`)
console.log(`Segundo valor = ${valorB}`)