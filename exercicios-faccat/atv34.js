let produto = prompt("Informe o nome do produto: ")
let quantidadeEstoque = parseFloat(prompt(`Informe a quantidade em estoque - ${produto}: `))
let quantidadeMaximaEstoque = parseFloat(prompt(`Informe a quantidade maxima a se ter no estoque: `))
let quantidadeMinimaEstoque = parseFloat(prompt(`Informe a quantidade minima a se ter no estoque: `))

let mediaQuantidade = (quantidadeMaximaEstoque + quantidadeMinimaEstoque) / 2

if (quantidadeEstoque >= mediaQuantidade) {
    console.log("Não efetuar compra.")
} else {
    console.log("Efetuar compra.")
}