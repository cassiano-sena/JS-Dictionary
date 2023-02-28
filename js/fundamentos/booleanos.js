let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('\nos veirdadeiros...');
console.log(!!3);
console.log(!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)); // é observado que o valor é verdadeiro, e não se a atribuição deu certo

console.log('\nos falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN); // Not a Number
console.log(!!undefined);
console.log(!!(isAtivo = false)); // é observado que o valor é falso, e não se a atribuição deu errado

console.log('\npra finalizar...');
console.log(!!('' || null || 0 || ' '));

let nome = '';

console.log(nome || 'Desconhecido');