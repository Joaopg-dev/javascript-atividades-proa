let soma = 0
let i = 50
soma_pares = 0

while (i <= 70) {
    if (i % 2 == 0) {
        soma += i
        soma_pares++
    }
    i++
}

let media = 0

media = soma / soma_pares

console.log(`O valor total da somatória foi de: ${soma}`)
console.log(`O valor final da média foi de: ${media}`)