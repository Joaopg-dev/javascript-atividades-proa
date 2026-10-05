let cont = 0
let resultado = 0
let numero = 0

numero = parseInt(prompt("Informe o número desejado: "))

while (cont <= 10) {
    resultado = numero * cont
    console.log(`${numero} "x" ${cont} "=" ${resultado}`)
    
    cont++
}