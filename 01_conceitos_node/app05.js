// utilizalção de funções callback presentes na biblioteca do Javascript
// vamos referenciar 
let colecoes = require('./listas/listaDados');
console.log(colecoes.nomes);

// exemplo 1 - buscando os nomes que iniciem com a letra 'A'
let lista1 = colecoes.nomes.filter(nome => nome.startsWith('A'));
console.log(lista1);

// exemplo 2 - buscar os nomes que tenham mais de 6 caracteres
let lista2 = colecoes.nomes.filter(s => s.length > 6);
console.log(lista2);