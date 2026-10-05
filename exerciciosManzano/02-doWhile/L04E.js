let soma = 0
let i = 1

do {
    let numero = parseInt(prompt(`Informe o ${i}º número inteiro:`))
    let fatorial = 1
    for (let j = numero; j > 1; j--) {
        fatorial *= j
    }

    soma += fatorial
    i++
} while (i <= 15)

console.log(`O somatório total dos fatoriais é: ${soma}`)
