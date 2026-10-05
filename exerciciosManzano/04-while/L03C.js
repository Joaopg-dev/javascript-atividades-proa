soma = 0
cont = 1

while (cont <= 500) {
    if (cont % 2 === 0) {
      soma = soma + cont  
    }
    cont++
}

console.log(`A soma dos números pares de 1 a 500 é ${soma}`)