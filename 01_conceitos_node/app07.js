let mod = require('./modulos/modulo');

let soma = mod(2,15);
console.log(`soma: ${soma}`);

let soma2 = require('./modulos/modulo')(2,9);
console.log('soma2: ' + soma2);