// utilizalção de funções callback presentes na biblioteca do Javascript
// vamos referenciar 
let colecoes = require('./listas/listaDados');
let fn = require('./funcoes/callbacks');

console.log(colecoes.nomes);

// exemplo 1 - buscando os nomes que iniciem com a letra 'A'
let lista1 = fn.filtrar(colecoes.nomes, nome => nome.startsWith('A'));
console.log(lista1);

// exemplo 2 - buscar os nomes que tenham mais de 6 caracteres
let lista2 = fn.filtrar(colecoes.nomes, s => s.length > 6);
console.log(lista2);