//Comentário em linha
/*
Cometario em
bloco
*/

//Imprime no terminal um conteúdo
console.log("Teste print")

var nome = "Lucas" //Variavel sem valor definido

console.log(nome) //Chamar saida de variavel 

//Formas de concatenar variaveis e texto
console.log("O nome do usuário é: " + nome) //Concatenar saida de variavel
console.log(`O nome do usuário é: ${nome}`) //Concatenar diversas variaveis sem +

//Import da biblioteca para captar entradad de dados via terminal 
var readline = require("readline")

//Cria uma interface para entrada e saida de dados pelo terminal 
var entradaDeDados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

/* Função para retornar o nome digitado no terminal 
    O metodo question após a digitação chama a sua função "CALL BACK"
    para entrgar o que foi digitado no terminal, atraves do argumento nomeUsuario
    */
entradaDeDados.question("Por favor digitar o seu nome: ", function(nomeUsuario){
    console.log("O nome do usuário é: " + nomeUsuario)
    //Entrada de dados para o Email
    entradaDeDados.question("Favor digitar o seu email: ", function(emailUsuario){
        console.log(`O Email informado é: ${emailUsuario}`)
    })
})