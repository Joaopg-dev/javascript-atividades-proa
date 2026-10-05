let contaCliente = parseFloat(prompt("Digite o número da conta: "));
let saldo = parseFloat(prompt("Digite o saldo da conta: "));
let debito = parseFloat(prompt("Informe o valor de débito: "));
let credito = parseFloat(prompt("Informe o valor de credito: "));
let saldoAtual = saldo - debito + credito

if (saldoAtual >= 0) {
    console.log(`Conta: ${contaCliente}`)
    console.log(`Saldo atual: ${saldoAtual}`)
    console.log(`Saldo positivo!`)
} else {
    console.log(`Conta: ${contaCliente}`)
    console.log(`Saldo atual: ${saldoAtual}`)
    console.log(`Saldo negativo!`)    
}
