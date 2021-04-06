//importando as funções referenciando-as pela variavel fn
let fn = require('./funcoes/apiFuncoes');

let soma = fn.somar(2, 2);
console.log(`Soma: ${soma}`);

let maior = fn.buscarMaior(5,4);
console.log(`Maior: ${maior}`);
