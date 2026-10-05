let areaTotal = 0
let continuar = "SIM"

do {
    let nomeComodo = prompt("Informe o nome do cômodo (ex: Cozinha): ")
    let largura = parseFloat(prompt(`Informe a largura do(a) ${nomeComodo} (em metros): `))
    let comprimento = parseFloat(prompt(`Informe o comprimento do(a) ${nomeComodo} (em metros): `))

    let areaComodo = largura * comprimento
    areaTotal += areaComodo

    console.log(`A área do(a) ${nomeComodo} é: ${areaComodo}`)

    continuar = prompt("Deseja continuar calculando novos cômodos? (SIM / NAO): ")

} while (continuar !== "NAO")

console.log("-".repeat(50))
console.log(`O valor total acumulado da área residencial é: ${areaTotal.toFixed(2)}`)
console.log("-".repeat(50))