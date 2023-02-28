{
    {
        {
            {
                // o escopo é visível apenas dentro
                var sera = 'Será???';
            }
        }
    }
}

// Aqui a questão é, se a função executada não está no mesmo local que a variável, o resultado será o esperado?
console.log(sera);

// Quando você cria uma variável global, ela está visível em toda a aplicação. Mas quando ocorre alteração na mesma, existe o perigo de mudar a lógica de alguma operação em que ela é utilizada (em local de trabalho, outras pessoas irão utilizar o mesmo código e podem usar a mesma variável que está sendo alterada).