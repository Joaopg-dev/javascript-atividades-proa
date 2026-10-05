let largura = parseFloat(prompt("Informe a largura do cômodo: "))
let comprimento = parseFloat(prompt("Informe o comprimento do cômodo: "))
let altura = parseFloat(prompt("Informe a altura do cômodo: "))

let areaTotal = 2 * (largura * altura) + 2 * (comprimento * altura)
let caixaAzulejos = areaTotal / 1.5 

console.log("-".repeat(40))
console.log(`A quantidade de caixas de azulejos necessários é: ${caixaAzulejos}`)
console.log("-".repeat(40))