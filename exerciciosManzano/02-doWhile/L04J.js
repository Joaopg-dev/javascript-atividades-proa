let dividendo = parseInt(prompt("Informe o valor do dividendo: "))
let divisor = parseInt(prompt("Informe o valor do divisor: "))

if (divisor === 0) {
    console.log("Erro: Não é possível dividir por zero.")
} else {
    let quociente = 0
    let resto = dividendo

    while (resto >= divisor) {
        resto -= divisor
        quociente++
    }
    console.log(`Dividendo: ${dividendo}`)
    console.log(`Divisor: ${divisor}`)
    console.log(`Quociente (quantas vezes cabe): ${quociente}`)
    console.log(`Resto da divisão: ${resto}`)
}