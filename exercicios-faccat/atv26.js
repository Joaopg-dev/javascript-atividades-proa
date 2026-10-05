let anoAtual = parseInt(prompt("Digite o número do ano atual: "))
let anoNascimento = parseInt(prompt("Digite o ano do seu nascimento: "))

let resultado = anoAtual - anoNascimento

if (resultado >= 16) {
    console.log("PODE votar esse ano!")
} else {
    console.log("NÃO PODE votar esse ano!")
}