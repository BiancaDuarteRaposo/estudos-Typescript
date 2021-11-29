"use strict";
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
//Função que vai verificar se os campos estão vazios
function verificarCamposVazios(...inputs) {
    inputs.forEach((campo) => {
        if (!campo.value) {
            console.log(`${campo.className} está vazio`);
            apresentaMSGErro(campo, 'O campo não pode estar vazio!');
        }
    });
}
// definindo o evento do form
form.addEventListener('submit', function (event) {
    //eu quero que eele cancele o evento de submeter para ir para uma outra página
    event.preventDefault();
    verificarCamposVazios(username, email, password, password2);
});
function apresentaMSGErro(input, msg) {
    let formField = input.parentElement;
    let errorMessage = formField.querySelector('.error-message');
    errorMessage.innerText = msg;
    formField.classList.add('show-error-message');
}
