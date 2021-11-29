"use strict";
// Trabalhando com vetores
Object.defineProperty(exports, "__esModule", { value: true });
let vetorNumeros = [1, 2, 3];
let outroVetor = [10, 20, 30, 40, 50];
vetorNumeros.splice(2, 1, ...outroVetor);
let vetorStrings = [];
let Bianca = {
    nome: "Bianca",
    email: "bianca@gmail.com",
    matricula: "211221",
    idade: 23
};
let vetorEstudantes = [];
vetorEstudantes.push(Bianca);
vetorStrings.push("Otávio");
let vetorEstudanteEgressos = [];
// Primeira forma de imprimir elementos
function imprimirElementosVetor(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        console.log(vetor[i]);
    }
}
// Segunda forma de imprimir elementos (usando forEach)
function imprimirElementosVetorV2(vetor) {
    vetor.forEach(function (e) {
        console.log(e);
    });
}
imprimirElementosVetor(outroVetor);
imprimirElementosVetor(vetorNumeros);
imprimirElementosVetorV2(vetorEstudantes);
imprimirElementosVetorV2(vetorEstudanteEgressos);
