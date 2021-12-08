interface Usuario {
    username: string;
    email: string;
    password: string;
    password2: string;
    button: boolean;
}


const form =document.querySelector('.form') as HTMLFormElement;
const username =document.querySelector('.username') as HTMLInputElement;
const email =document.querySelector('.email') as HTMLInputElement;
const password =document.querySelector('.password') as HTMLInputElement;
const password2 =document.querySelector('.password2') as HTMLInputElement;
const button =document.querySelector("#form > div:nth-child(6) > button")as HTMLButtonElement;

button.disabled = true;

function habilitarBotaoSubmit(form: HTMLFormElement){
    let erros: NodeListOf<Element> = form.querySelectorAll('.show-error-message');
    if (erros.length > 0){
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

// definindo o evento do form
form.addEventListener('submit', function(event: Event){
    //eu quero que eele cancele o evento de submeter para ir para uma outra página
    event.preventDefault();
    excluirMSGErro(form); // exclui a mensagem de erro com o campo alterado
    verificarCamposVazios(username, email, password, password2);

    let usuario : Usuario = {
        username: username.value,
        email: email.value,
        password: password.value,
        password2: password2.value,
        button: false
    }
    console.log(usuario);

    username.value="";
    email.value="";
    password.value="";
    password2.value="";
    button.disabled = true;

});

//Função que vai verificar se os campos estão vazios
function verificarCamposVazios(...inputs:HTMLInputElement[]):void{
    inputs.forEach((campo)=>{
        if(!campo.value){
            console.log(`${campo.className} está vazio`)
            apresentaMSGErro(campo,'O campo não pode estar vazio!');
        }
    })
}

//Excluir a mensagem de error
function excluirMSGErro(form: HTMLFormElement):void{
    form.querySelectorAll('.show-error-message').forEach(function(item){
        item.classList.remove('show-error-message');
    })
}

function apresentaMSGErro(input:HTMLInputElement, msg:string){
    let formField= input.parentElement as HTMLDivElement;
    let errorMessage = formField.querySelector('.error-message') as HTMLSpanElement
    errorMessage.innerText = msg;
    formField.classList.add('show-error-message'); 
}
    
form.querySelectorAll('input').forEach(elemento=>{
    elemento.addEventListener('blur', (event)=>{
        event.preventDefault();
        if(!elemento.value){
            apresentaMSGErro(elemento,'O camponão pode ser vazio!');
        }else{
            let formField = elemento.parentElement as HTMLDivElement;
            formField.classList.remove('show-error-message');
            if (elemento.className == 'password', elemento.className == 'password2'){
            verificarSenha(password, password2);
            }
        }
        habilitarBotaoSubmit(form);
    })
})

function verificarSenha(password:HTMLInputElement, password2:HTMLInputElement):void{
    if(password.value.length <8){
        apresentaMSGErro(password, "A senha dever ter no mínimo 8 caracteres.")
    }
    
    if (password.value != password2.value){
        apresentaMSGErro(password2, "As senhas devem ser iguais.")
    }
}

