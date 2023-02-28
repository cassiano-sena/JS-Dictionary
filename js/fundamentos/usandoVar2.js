var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero);
};
console.log('fora = ', numero);

// O número 1 (um) é sobrescrito mesmo fora do escopo.

// A dica é, fuja do escopo global!