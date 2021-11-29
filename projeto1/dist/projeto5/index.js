"use strict";
let nomeFormulario;
let emailFormulario;
let idadeFormulario;
let botaoFormulario;
nomeFormulario = document.querySelector("body > div > div > div > form > input:nth-child(1)");
emailFormulario = document.querySelector("body > div > div > div > form > input.text.email");
idadeFormulario = document.querySelector("body > div > div > div > form > input:nth-child(3)");
botaoFormulario = document.querySelector("body > div > div > div > form > input[type=submit]:nth-child(4)");
let alunoFormulario = {
    nome: nomeFormulario.value,
    email: emailFormulario.value,
    idade: parseInt(idadeFormulario.value),
};
botaoFormulario.addEventListener("click", function (event) {
    event.preventDefault();
    let alunoFormulario = {
        nome: nomeFormulario.value,
        email: emailFormulario.value,
        idade: parseInt(idadeFormulario.value),
    };
    console.log(alunoFormulario);
});
