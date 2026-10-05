alert("TABOADA")
let numero = parseInt(prompt("Digite um número: "))

console.log(`TABOADA DE ${numero}`)

for (let i = 1; i <= 10; i++) {
    let multiplicacao = numero * i
    console.log(`${numero} x ${i} = ${multiplicacao}`)
}