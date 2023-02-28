let valor; // não foi inicializada
console.log(valor);

// console.log(valor2); // não foi definida (não existe)


valor = null; // ausência de valor
console.log(valor);
// console.log(valor.toString()); // Erro! Já que não é possível acessar/trabalhar com um objeto nulo. 

// interessante não utilizar valor undefined, utilizar apenas null e deixar que o computador interprete o que é undefined

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evitar atribuir undefined
console.log(!!produto.preco);
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);