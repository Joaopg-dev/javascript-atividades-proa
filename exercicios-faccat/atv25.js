let nota01 = parseFloat(prompt("Informe a primeira nota do aluno:  "));
let nota02 = parseFloat(prompt("Informe a segunda nota do aluno:  "));

media = (nota01 + nota02) / 2


if (media >= 6) {
    console.log(`Aluno Aprovado! - Media: ${media}`)
} else {
    console.log(`Aluno Reprovado! - Media: ${media}`)
}