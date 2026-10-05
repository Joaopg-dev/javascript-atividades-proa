let macas = parseInt(prompt("Quantas maças deseja comprar: "));
let preco_macas;

if (macas >= 12) {
    preco_macas = macas * 1.00;
} else {
    preco_macas = macas * 1.30;
}

console.log("-".repeat(40));
console.log(`O valor total da compra é: R$ ${preco_macas.toFixed(2)}`);
console.log("-".repeat(40));