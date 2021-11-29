"use strict";
//Exercício 3:
//Criei uma função para calcular o desconto que um cliente terá.
//O primeiro parâmetro é o valor da compra. O segundo parametro será o 
//valor do desconto.
let valor = 0;
let desconto = 0;
let descontoAdc = 0;
//Se o valor a pagar com desconto for entre 90 reais e 100 reais, o cliente terá 
//mais um desconto de 5%.
function calcularDesconto(valor, desconto) {
    let valorTotal = valor - desconto;
    if (valorTotal >= 90 && valorTotal <= 100) {
        descontoAdc = valorTotal * 0.05;
    }
    else 
    //Se o valor a pagar com desconto for maior que 100 reais, o cliente terá mais 
    //um desconto de 10%.
    if (valorTotal > 100) {
        descontoAdc = valorTotal * 0.1;
    }
    let valorFinal = valorTotal - descontoAdc;
    console.log(`O valor total a pagar será: R$ ${valorFinal}`);
    return valorFinal;
}
calcularDesconto(460, 100);
//Apresente o valor que o cliente irá paga
