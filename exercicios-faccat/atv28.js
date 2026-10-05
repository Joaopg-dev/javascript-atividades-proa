let numero1 = parseInt(prompt("Digite o primeiro valor: "))
let numero2 = parseInt(prompt("Digite o segundo valor: "))

if (numero1 < numero2) {
    console.log(`Ordem crescente: ${numero1}, ${numero2}!`)
} else {
    console.log(`Ordem crescente: ${numero2}, ${numero1}!`)
}