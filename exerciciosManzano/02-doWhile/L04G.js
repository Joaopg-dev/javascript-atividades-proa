let soma = 0
let i = 1

do {
    let fatorial = 1

    if (i % 2 !== 0) {
        for (let j = i; j > 1; j--) {
            fatorial *= j
        }
        soma += fatorial
    }
    i++
} while (i <= 10)

console.log(`O somatório total dos fatoriais é: ${soma}`)