//[M1S06] Ex 2 - Async/Await: Crie uma função chamada getUserInfo que simula uma consulta assíncrona 
// a um servidor para obter informações de um usuário. Essa função deve retornar um objeto com as 
// informações de um usuário, como nome, idade e email (você pode definir os valores). 
// Com o setTimeout simule o tempo de espera da consulta para demorar 2 segundos. 
// Utilize async/await para realizar a chamada de forma assíncrona.
// Em seguida, crie outra função que utiliza getUserInfo para obter as informações do usuário e, 
// após receber essas informações, exibe-as no console.

function getUserInfo (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let user = {
                nome: "Gabriela",
                idade: 33,
                email: "gabriela@email.com"
            };

            if(user != undefined){
                resolve(user);
            }
        }, 2000)
    });
}

async function playGetUser(){
    let retorno = await getUserInfo();
    console.log(retorno);
}

console.log(playGetUser());