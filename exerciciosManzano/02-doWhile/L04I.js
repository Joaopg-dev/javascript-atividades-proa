let numero = parseInt(prompt("Informe o número desejavel (para sair digite um número negativo): "))

let maiorNumero = numero
let menorNumero = numero
do {
    if (numero >= 0) {
        if (numero > maiorNumero) {
            maiorNumero = numero
        } else if (numero < menorNumero) {
            menorNumero = numero
        }
    }
    numero = parseInt(prompt("Informe o número desejavel (para sair digite um número negativo): "))
} while (numero >= 0)

console.log(`${maiorNumero}`)
console.log(`${menorNumero}`)
