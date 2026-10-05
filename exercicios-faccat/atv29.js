let inicioPartida = parseFloat(prompt("Informe a hora inicial da partida (0 a 23hr): "));
let fimPartida = parseFloat(prompt("Informe a hora final da partida (0 a 23hr): "));
let resultado;

if (inicioPartida < fimPartida) {
    resultado = fimPartida - inicioPartida
} else {
    resultado = (24 - inicioPartida) + fimPartida
};

console.log()