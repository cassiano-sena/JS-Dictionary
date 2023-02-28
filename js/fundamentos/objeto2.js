console.log(typeof Object);
console.log(typeof new Object); // instanciando uma função/ chamando o construtor

const Cliente = function () { };
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto { }; // ES 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto());