function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor, opera bit por bit!
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete; // operador unário

    console.log('\n', 'Trabalho 1: ', trabalho1, ',', 'Trabalho 2: ', trabalho2);
    // return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }; // Recurso novo do EcmaScript 2015, não há necessidade de criar o objeto (fica redundante mencionar cada parâmetro duas vezes)
    return {
        comprarSorvete: comprarSorvete,
        comprarTv50: comprarTv50,
        comprarTv32: comprarTv32,
        manterSaudavel: manterSaudavel
    };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));

