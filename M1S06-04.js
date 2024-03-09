//[M1S06] Ex 4 - LocalStorage: Crie uma função que irá pedir 3 informações através do prompt, 
// o nome, a idade e o email. Monte essas informações em um objeto igual ao do exercício 03, 
// após isso salve esse objeto com a chave “user” no localStorage.

function coletarInformacoes(){
    let nome = prompt("Digite seu nome:");
    let idade = prompt("Digite sua idade:");
    let email = prompt("Digite seu email:");

    let user = {
        Nome: nome,
        Idade: idade,
        Email: email
    }

    localStorage.setItem("user", JSON.stringify(user));
}

coletarInformacoes();





