//definir uma lista de nomes, que deverá ser exportada
exports.nomes = ["José Manuel","Daniela","Marcos","Bernardo","Ana Paula"];

//objeto empresa: apresentar os dados de uma empresa
exports.empresa = {
    razaoSocial: "CREMESP",
    endereco: {
        logradouro: "Rua Frei Caneca",
        numero: 1282,
        cidade: "São Paulo"
    },
    funcionarios: this.nomes        //acessamos elementos do próprio modulo com this
}