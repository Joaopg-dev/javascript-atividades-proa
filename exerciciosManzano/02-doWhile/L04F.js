let total_valores = 0;
let soma = 0;
let media = 0;
let numero;

do {
    numero = parseInt(prompt("Informe o número desejado: "))

    if (numero > 0) {
        total_valores++
        soma += numero
    }

} while (numero > 0);

if (total_valores > 0) {
    media = soma / total_valores
}

console.log(`Soma: ${soma}`);
console.log(`Total de valores: ${total_valores}`);
console.log(`Média: ${media}`);