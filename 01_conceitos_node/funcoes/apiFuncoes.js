//função nomeada
//função que recebe dois parametros numericos e retorna sua soma
function calcularSoma(valor1, valor2 = 0){  // valor2 é opcional e seu valor será 0 se não for informado
    if(typeof(valor1) != 'number' || typeof(valor2) != 'number') {
        throw new Error("Os parametros devem ser numericos");
    }
    return valor1 + valor2;
}
exports.somar = calcularSoma;  // função exportada com o nome 'somar'


//função anonima
//neste exemplo, a função recebe dois parametros e retorna o maior deles
exports.buscarMaior = function (a = 0, b = 0) {  
    if(typeof(a) != 'number' || typeof(b) != 'number') {
        throw new Error("Os parametros devem ser numericos");
    }
    return a > b ? a : b;
}