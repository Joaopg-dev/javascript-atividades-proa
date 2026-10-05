let nome
let largura, comprimento
let area = 0
let area_total = 0
let resposta = "sim"

while (resposta === "sim") {
    nome = prompt("Informe o nome do cômodo: ")
    largura = Number(prompt(`Informe a largura do cômodo ${nome}: `))
    comprimento = Number(prompt(`Informe o comprimento do cômodo ${nome}: `))

    area = largura * comprimento
    area_total = area_total + area

    console.log(`A área do cômodo ${nome} é de: ${area}`)
    resposta = String(prompt("Deseja continuar [sim/nao]: "))
}
console.log(`A área final da residência é ${area_total}`)