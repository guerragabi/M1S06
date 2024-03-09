// [M1S06] Ex 1 - Promise: Construa uma função que irá verificar se um valor passado pelo parâmetro é par. 
// Construa as validações dentro de uma promise para que caso seja uma par retorne para o then a mensagem: 
// "Número validado é par”.
// Caso o valor seja ímpar, retorne para o catch a mensagem: “Error: número informado é impar”.‌
// OBS: Se for par ele deve chamar o “resolve”, se não for par ele irá chamar o “reject”. 
// Não esqueça de enviar a mensagem como parâmetro

const prompt = require('prompt-sync')();

function verificarPar (){
    return new Promise((resolve,reject)=>{
        let n = prompt("Digite um número:");
        if(n % 2 == 0){
            resolve("Número validado é par");
        } else {
            reject("Error: número informado é impar");
        }
    });
}

verificarPar()
.then((mensagem)=>{
    console.log("Número validado é par");
})
.catch((error)=>{
    console.log("Error: número informado é impar");
})
