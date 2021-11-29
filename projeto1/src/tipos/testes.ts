// Trabalhando com vetores

import estudante from "./estudantes";

let vetorNumeros : Array<number> =[1,2,3];
let outroVetor : Array<number> =[10,20,30,40,50];
vetorNumeros.splice(2,1, ...outroVetor);

let vetorStrings : Array<string> = [];

let Bianca: estudante ={
    nome: "Bianca",
    email: "bianca@gmail.com",
    matricula:"211221",
    idade: 23    
}

let vetorEstudantes: Array<estudante> = [];
vetorEstudantes.push(Bianca);

vetorStrings.push("Otávio");

let vetorEstudanteEgressos: estudante[] = [];

// Primeira forma de imprimir elementos
function imprimirElementosVetor(vetor: any):void{
    for(let i =0;i<vetor.length;i++){
        console.log(vetor[i]);
    }
}


// Segunda forma de imprimir elementos (usando forEach)

function imprimirElementosVetorV2(vetor: estudante[]):void{
    vetor.forEach(function(e){
        console.log(e);
    })
}

imprimirElementosVetor(outroVetor);
imprimirElementosVetor(vetorNumeros);
imprimirElementosVetorV2(vetorEstudantes);
imprimirElementosVetorV2(vetorEstudanteEgressos)


