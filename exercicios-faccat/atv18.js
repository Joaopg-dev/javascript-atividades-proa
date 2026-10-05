let potenciaLampada = parseInt(prompt("Informe a potencia da lampada utilizada: "))
let largura = parseFloat(prompt("Informe a largura do cômodo: "))
let comprimento = parseFloat(prompt("Informe o comprimento do cômodo: "))

let area = largura * comprimento
let potenciaNecessaria = area * 18
let lampadasNecessarias = potenciaNecessaria / potenciaLampada

console.log("-".repeat(40))
console.log(`O número de lampadas que seram utilizadas no cômodo com ${area} de área quadrada é: ${lampadasNecessarias}`)
console.log("-".repeat(40))