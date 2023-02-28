const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
};

funcs[2]();
funcs[8]();

// Aqui temos um problema histórico do JavaScript!. Quando não há escopo, será impresso 10!