let total_graos = 0
let quadro_graos = 1
let i = 1

do {
    total_graos += quadro_graos
    quadro_graos = quadro_graos * 2

    i++
} while (i <= 64)

console.log(`${total_graos}`)