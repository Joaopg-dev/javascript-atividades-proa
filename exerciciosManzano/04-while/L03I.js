let soma = 0
let i = 1
let numero = 0

while (i <= 10) {
    numero = Number(prompt(`Informe o ${i} número: `))

    soma += numero
    i++
}

let media = 0

media = soma / 10

console.log(`O valor total da somatória foi de: ${soma}`)
console.log(`O valor final da média foi de: ${media}`)