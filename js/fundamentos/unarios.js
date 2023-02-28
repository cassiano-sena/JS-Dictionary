// unário: um operando


let num1 = 1;
let num2 = 2;

num1++; // tem prioridade, é feita primeiro!
console.log(num1);
--num1;
console.log(num1);


// Qual o retorno?
console.log(++num1 === num2--);
// () 1> o código roda sem executar a operação matemática e só faz a relação, as duas variaveis são diferentes no primeiro momento, a operação retorna falso.
// (x) 2> o código roda e executa apenas uma das operações matemáticas, que seria a com prioridade, a 'num1--', as variáveis são iguais no segundo momento, a operação retorna verdadeiro.
// () 3> o código roda e executa a operação matemática, o resultado será a variável 'num1' tomando o valor de 'num2' e vice versa no terceiro momento, a operação retorna falso.


