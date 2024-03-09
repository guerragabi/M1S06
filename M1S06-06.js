// [M1S06] Ex 6 - Projeto (parte 1): Para treinar um pouco mais requisições fetch inicie uma comunicação com a API 
// via cep (https://viacep.com.br).
// OBS: Crie uma página html para imprimir o endereço através do cep.
// Utilize este endpoint: https://viacep.com.br/ws/{cep_informado}/json
// Caso a api retorne sucesso imprima em um alert o endereço formatado da seguinte forma: 
// “logradouro, complemento - bairro - localidade/uf” o cep_informado será passado por prompt pelo usuário.

let cep = prompt("Digite seu CEP:");

fetch (`https://viacep.com.br/ws/${cep}/json`, {method: "GET"})
    .then((retornoFetch) => {
        return retornoFetch.json();
    })
    .then((retornoApi) => {
        alert(`${retornoApi.logradouro}, ${retornoApi.complemento} - ${retornoApi.bairro} - ${retornoApi.localidade}/${retornoApi.uf}`);
    })
