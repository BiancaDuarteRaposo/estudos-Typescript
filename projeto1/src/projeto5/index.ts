interface aluno{
     nome: string;
     email: string;
     idade: number;
}


let nomeFormulario: HTMLInputElement;
let emailFormulario: HTMLInputElement;
let idadeFormulario: HTMLInputElement;
let botaoFormulario: HTMLInputElement;


nomeFormulario = document.querySelector("body > div > div > div > form > input:nth-child(1)") as HTMLInputElement;
emailFormulario = document.querySelector("body > div > div > div > form > input.text.email") as HTMLInputElement;
idadeFormulario= document.querySelector("body > div > div > div > form > input:nth-child(3)") as HTMLInputElement;
botaoFormulario= document.querySelector("body > div > div > div > form > input[type=submit]:nth-child(4)") as HTMLInputElement;

let alunoFormulario: aluno ={
     nome: nomeFormulario.value,
     email: emailFormulario.value,
     idade: parseInt(idadeFormulario.value),

}
botaoFormulario.addEventListener("click", function(event) {
     event.preventDefault();
     let alunoFormulario: aluno ={
          nome: nomeFormulario.value,
          email: emailFormulario.value,
          idade: parseInt(idadeFormulario.value),
     
     }
     console.log(alunoFormulario)
})