"use strict";
// definido um array com os nomes 'Marcos', 'Luan', 'Bento', 'Ruan','João'
let nomes = ['Marcos', 'Luan', 'Bento', 'Ruan', 'João'];
//alterar o nome do aluno Marcos para Marcos Silva
//nomes[0] = "Marcos Silva"
function atualizarNome(nomes) {
    let index = nomes.indexOf("Marcos");
    nomes[index] = "Marcos Silva";
    console.log(nomes);
}
atualizarNome(nomes);
console.log(nomes);
// acrescentar o aluno Rodrigo
nomes.push("Rodrigo");
console.log(nomes);
// excluir o ultimo aluno da lista
nomes.pop();
console.log(nomes);
// retirar o aluno Bento
//nomes.splice(2,1)
///console.log(nomes)
// nomes.splice(nomes.indexOf('Bento'),1);
function retirarNome(nomes) {
    let index = nomes.indexOf("Bento");
    nomes.splice(index, 1);
    console.log(nomes);
}
retirarNome(nomes);
// varrear o array construido
nomes.forEach(function (value) { console.log(value); });
