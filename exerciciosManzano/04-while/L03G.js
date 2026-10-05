let num1 = 1
let num2 = 1
let aux = 0

let i = 0

while (i <= 15) {
    console.log(num1)
    aux = num1 + num2
    num1 = num2
    num2 = aux

    i++
}