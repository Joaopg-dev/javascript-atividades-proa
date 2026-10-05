let numero = Number(prompt("Informe um número: "))

if (numero <= 0) {
    console.log("Nenhum número positivo foi digitado.")
} else {
    
    let maior_numero = numero
    let menor_numero = numero

    
    while (numero > 0) {
        if (numero > maior_numero) {
            maior_numero = numero
        } else if (numero < menor_numero) {
            menor_numero = numero
        }

        numero = Number(prompt("Informe um número: "))
    }

    console.log(`Maior número digitado: ${maior_numero}`)
    console.log(`Menor número digitado: ${menor_numero}`)
}