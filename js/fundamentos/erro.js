function tratarErroELancar(erro) {
    // throw new Error('Um erro ocorreu! Nosso suporte já foi contatado!');
    // throw 10;
    // throw true;
    // throw 'mensagem';
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    };
}

function imprimirNomeGritado(obj) {
    // colocar dentro do try algo que você julgue que possa dar erro!
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    }
    // catch para capturar um erro e manipulá-lo 
    catch (e) {
        tratarErroELancar(e);
    }
    // finally será sempre chamado, independente, poderá ser depois do try com um sucesso, ou depois do catch com erro
    finally {
        console.log('final');
    }
}
// o erro está sendo forçado! name está escrito errado de propósito! para funcionar, escreva 'name' ao invés de 'nome'!
const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj);

// dica: tente não expor tanto ao usuário em caso de erro, para tanto não assustar o mesmo e também para segurança da aplicação!
// pode se gerar um hash para identificar o erro também! mas para isso é necessário ter um método de arquivar erros!