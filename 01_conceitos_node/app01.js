//declarando variaveis
let nome = "Rodrigo Ota";
let curso = "Node e Angular";
let ch = 24;
let status = true; //o curso está ativo

console.log('Nome do colaborador: ' + nome);
console.log(`Nome do curso: ${curso}`); //interpolação com `${ }`
console.log("Carga horária: " + ch + " horas");
console.log(`Carga horária: ${ch} horas`);

console.log(status)

if (status) {
    console.log('O curso está ativo');
} else {
    console.log('O curso está inativo');
}

console.log(status ? 'Ativo' : 'Inativo');
