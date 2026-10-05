let base = parseInt(prompt("Digite o número da base do calculo: "))
let expoente = parseInt(prompt("Digite o número do expoente do calculo: "))
let resposta = 1

for (let i = 1; i <= expoente; i++) {
    resposta *= base
}

console.log(`${base} elevado a ${expoente} é: ${resposta}`) 