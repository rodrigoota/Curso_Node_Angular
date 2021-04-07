let fetch = require('node-fetch');
//o componente node-fetch utiliza Promises para executar suas tarefas

//declarando a lista de produtos
let lista = [];

//url da api a ser consumida
let url = "http://localhost:3200/api/produtos/";

//consumindo a api com fetch
fetch(url)
    .then(resposta => {
        let x = resposta.json();
        return x;
    })
    .then(valor => {
        lista = valor;
        for (let index = 0; index < lista.length; index++) {
            console.log('Descrição: ' + lista[index].descricao);
            console.log('Categoria: ' + lista[index].categoria);
            console.log('------------------');
        }
        // console.log(lista);
    });


// console.log("teste"); // é executado antes pq o fetch é assincrono