let numero1 = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))
let numero3 = parseInt(prompt("Digite o terceiro número: "))

let menor, meio, maior;

if (numero1 < numero2 && numero1 < numero3) {
    menor = numero1;
    if (numero2 < numero3) {
        meio = numero2;
        maior = numero3;
    } else {
        meio = numero3;
        maior = numero2;
    }
} else if (numero2 < numero1 && numero2 < numero3) {
    menor = numero2;
    if (numero1 < numero3) {
        meio = numero1;
        maior = numero3;
    } else {
        meio = numero3;
        maior = numero1;
    }
} else {
    menor = numero3;
    if (numero1 < numero2) {
        meio = numero1;
        maior = numero2;
    } else {
        meio = numero2;
        maior = numero1;
    }
}

console.log(`Ordem crescente: ${menor}, ${meio}, ${maior}`);