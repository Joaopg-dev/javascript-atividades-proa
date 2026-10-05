let numero1 = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))
let numero3 = parseInt(prompt("Digite o terceiro número: "))

let soma;

if ((numero1 > numero2) && (numero3 > numero2)) {
    soma = numero1 + numero3
    console.log(`A soma dos dois maiores números digitados é: ${soma}`)
} else if ((numero1 > numero3) && (numero2 > numero3)) {
    soma = numero1 + numero2
    console.log(`A soma dos dois maiores números digitados é: ${soma}`)
} else {
    soma = numero2 + numero3
    console.log(`A soma dos dois maiores números digitados é: ${soma}`)
}