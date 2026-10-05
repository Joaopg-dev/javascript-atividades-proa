let auxiliar = 0
let numero1 = 1
let numero2 = 1


for (let i = 1; i <= 15; i++) {
    console.log(numero1)

    auxiliar = numero1 + numero2
    numero1 = numero2
    numero2 = auxiliar
}
