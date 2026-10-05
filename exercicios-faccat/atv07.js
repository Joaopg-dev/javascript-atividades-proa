alert("Calculadora de idade em dias")
alert("Informe exato da sua idade em ANOS, MESES E DIAS")

let anos = parseInt(prompt("Informe sua idade em anos: "))
let meses = parseInt(prompt("Informe sua idade em meses: "))
let dias = parseInt(prompt("Informe sua idade em dias: "))

let dias_anos = anos * 365
let dias_meses = meses * 30

let dias_totais = dias_anos + dias_meses + dias

console.log(`Você tem exatos ${dias_totais} dias de vida!`)