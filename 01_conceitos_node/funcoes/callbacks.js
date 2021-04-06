exports.executar = function(callback) {
    return callback("Cremesp - Node");
}

//escrever uma função chamada 'filtrar', que recebe como parametros uma lista e uma operação callback sobre esta lista.
exports.filtrar = function(lista, callback) {
    let sublista = [];

    for (let i = 0; i < lista.length; i++) {
        if(callback(lista[i])){
            sublista.push(lista[i]);
        }
    }
    return sublista;
}