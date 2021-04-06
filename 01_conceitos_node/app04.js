let fn = require('./funcoes/callbacks');


let res1 = fn.executar(function(item){ 
    return item.length 
});
console.log("res1: " + res1);

let res2 = fn.executar(function(item){
    return item === "Cremesp";
});
console.log("res2: " + res2);

let res3 = fn.executar(function(item){
    var teste = item.toUpperCase() + ' 2';
    return teste;
});
console.log("res3: " + res3);

//arrow function -- mesmo resultado do res1
let res4 = fn.executar(item => item.length );
console.log("res4: " + res4);

let res5 = fn.executar( teste => teste === "Cremesp - Node");
console.log("res5: " + res5);