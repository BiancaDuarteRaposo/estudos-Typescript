let campoNome: HTMLInputElement;
let campoEmail: HTMLInputElement;
let botaoSubmit: HTMLInputElement;


campoNome = document.querySelector("body > div > div > div > form > input:nth-child(1)") as HTMLInputElement;
campoEmail = document.querySelector("body > div > div > div > form > input.text.email") as HTMLInputElement;
botaoSubmit = document.querySelector("body > div > div > div > form > input[type=submit]:nth-child(3)") as HTMLInputElement;
botaoSubmit.addEventListener("click", function(event) {
     event.preventDefault();
     alert(`Nome: ${campoNome.value} - Email: ${campoEmail.value}`)
})