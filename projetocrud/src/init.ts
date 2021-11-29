const form =document.querySelector('.form')as HTMLFormElement;
const username =document.querySelector('.username')as HTMLInputElement;
const email =document.querySelector('.email')as HTMLInputElement;
const password =document.querySelector('.password')as HTMLInputElement;
const password2 =document.querySelector('.password2')as HTMLInputElement;

//Função que vai verificar se os campos estão vazios
function verificarCamposVazios(...inputs:HTMLInputElement[]):void{
    inputs.forEach((campo)=>{
        if(!campo.value){
            console.log(`${campo.className} está vazio`)
            apresentaMSGErro(campo,'O campo não pode estar vazio!');
        }
    })
}

// definindo o evento do form
form.addEventListener('submit', function(event: Event){
    //eu quero que eele cancele o evento de submeter para ir para uma outra página
    event.preventDefault();
    verificarCamposVazios(username, email, password, password2);
});

function apresentaMSGErro(input:HTMLInputElement, msg:string){
    let formField= input.parentElement as HTMLDivElement;
    let errorMessage = formField.querySelector('.error-message') as HTMLSpanElement
    errorMessage.innerText = msg;
    formField.classList.add('show-error-message'); 
}
    