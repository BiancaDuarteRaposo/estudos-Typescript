//Passe 5 números para 
//uma função e apresente o resultado da soma dos número
let numeros : Array<number> = [13,33,99,28,9];
function calcular(numeros:number[]){
    let soma= 0;
    numeros.forEach(function(value){
        soma = soma + value;
        
        console.log(`${soma}`)
    }
    );
}


//function somar (a:number, b:number, c:number, d:number, e:number) : number {
//    return a + b + c + d + e;
 //  }
 //  console.log(`Resultado da função somar:  ${somar(1,2,3,4,5)}`);