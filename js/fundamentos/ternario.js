// ternário: três operandos

// um unico parametro, nao precisa de parenteses
// = parametro
// => funcao
// ? verdadeiro : falso
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

/* const resultado = nota => {
    nota >= 7 ? 'Aprovado' : 'Reprovado';
}*/

console.log(resultado(7.1));
console.log(resultado(6.7));

// const status = nota >= 7 ? 'Aprovado' : 'Reprovado';
