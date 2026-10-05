let ladoA = parseFloat(prompt("Digite a medida do lado A: "));
let ladoB = parseFloat(prompt("Digite a medida do lado B: "));
let ladoC = parseFloat(prompt("Digite a medida do lado C: "));

if ((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)) {
    console.log("Formam um triângulo!");
} else {
    console.log("Não formam um triângulo!");
}