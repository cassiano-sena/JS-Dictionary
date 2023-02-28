const escola = "Cod3r";

console.log(escola.charAt(4)); // retornará r
// console.log(escola.charAt(5)); // não vai dar erro pq js nao quer dar erro em coisa boba, só não vai retornar nada
// tomar cuidado para não causar efeitos colaterais ao abusar da boa vontade do js
// gostaria de saber por que deu erro, será que é por que o linux mint está desatualizado?

console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace(3, 'e'));
console.log('Escola ' + escola + "!");
console.log(escola.replace(/\d/, 'e')); // Regex: substitua todos os dígitos pela letra "e"

console.log('Ana,Maria,Pedro'.split(','));