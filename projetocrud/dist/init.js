"use strict";
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
const button = document.querySelector("#form > div:nth-child(6) > button");
button.disabled = true;
function habilitarBotaoSubmit(form) {
    let erros = form.querySelectorAll('.show-error-message');
    if (erros.length > 0) {
        button.disabled = true;
    }
    else {
        button.disabled = false;
    }
}
// definindo o evento do form
form.addEventListener('submit', function (event) {
    //eu quero que eele cancele o evento de submeter para ir para uma outra página
    event.preventDefault();
    excluirMSGErro(form); // exclui a mensagem de erro com o campo alterado
    verificarCamposVazios(username, email, password, password2);
    let usuario = {
        username: username.value,
        email: email.value,
        password: password.value,
        password2: password2.value,
        button: false
    };
    console.log(usuario);
    username.value = "";
    email.value = "";
    password.value = "";
    password2.value = "";
    button.disabled = true;
});
//Função que vai verificar se os campos estão vazios
function verificarCamposVazios(...inputs) {
    inputs.forEach((campo) => {
        if (!campo.value) {
            console.log(`${campo.className} está vazio`);
            apresentaMSGErro(campo, 'O campo não pode estar vazio!');
        }
    });
}
//Excluir a mensagem de error
function excluirMSGErro(form) {
    form.querySelectorAll('.show-error-message').forEach(function (item) {
        item.classList.remove('show-error-message');
    });
}
function apresentaMSGErro(input, msg) {
    let formField = input.parentElement;
    let errorMessage = formField.querySelector('.error-message');
    errorMessage.innerText = msg;
    formField.classList.add('show-error-message');
}
form.querySelectorAll('input').forEach(elemento => {
    elemento.addEventListener('blur', (event) => {
        event.preventDefault();
        if (!elemento.value) {
            apresentaMSGErro(elemento, 'O camponão pode ser vazio!');
        }
        else {
            let formField = elemento.parentElement;
            formField.classList.remove('show-error-message');
            if (elemento.className == 'password', elemento.className == 'password2') {
                verificarSenha(password, password2);
            }
        }
        habilitarBotaoSubmit(form);
    });
});
function verificarSenha(password, password2) {
    if (password.value.length < 8) {
        apresentaMSGErro(password, "A senha dever ter no mínimo 8 caracteres.");
    }
    if (password.value != password2.value) {
        apresentaMSGErro(password2, "As senhas devem ser iguais.");
    }
}
