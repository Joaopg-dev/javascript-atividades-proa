let eleitoresMunicipio = parseInt(prompt("Informe a quantidade de eleitores do município: "))

let votos_validos = parseInt(prompt("Informe a quantidade de votos validos do município: "))
let votos_brancos = parseInt(prompt("Informe a quantidade de votos brancos do município: "))
let votos_nulos = parseInt(prompt("Informe a quantidade de votos nulos do município: "))

let percentual_validos = (votos_validos * 100) / eleitoresMunicipio
let percentual_brancos = (votos_brancos * 100) / eleitoresMunicipio
let percentual_nulos = (votos_nulos * 100) / eleitoresMunicipio


console.log("-".repeat(40))
console.log(`A quantidade de eleitores no município é ${eleitoresMunicipio}`)
console.log(`O percentual de votos validos foi de: ${percentual_validos.toFixed(2)}`)
console.log(`O percentual de votos brancos foi de: ${percentual_brancos.toFixed(2)}`)
console.log(`O percentual de votos nulos foi de: ${percentual_nulos.toFixed(2)}`)