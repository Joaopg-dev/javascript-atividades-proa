let nome = prompt("Informe seu nome: ")
let altura = parseFloat(prompt("Informe a sua altura [ex: 1.70]: "))
let sexo = prompt("Informe seu sexo [M ou F]: ").toUpperCase();
let pesoIdeal;

if (sexo === "M") {
    pesoIdeal = 72.7 * altura - 58
} else {
    pesoIdeal = 62.1 * altura - 44.7
}

console.log(`${nome}, o seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
