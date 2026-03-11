/************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de calcular os numeros pares e ímpares
 * Data: 10/03/2026
 * Autor: Lucas Duarte
 * Versão: 1.0
 * **********************************************************************/

//O número inicial deverá ser limitado a entrada de valores entre 0 até 500
const validarNumeroInicial = function(numeroInicial){
    if(numeroInicial < 0 || numeroInicial > 500){
        return "O número inicial deve ser entre 0 e 500"
    }
    return null
}
//O número final deverá ser limitado a entrada de valores entre 100 até 1000
const validarNumeroFinal = function(numeroFinal){
    if(numeroFinal < 100 || numeroFinal > 1000){
        return "O número final deve ser entre 100 e 1000"
    }
    return null
}
//Validação de Vazio
const validarVazio = function(numeroInicial, numeroFinal){
    if(
        numeroInicial.trim() === "" ||
        numeroFinal.trim()   === ""
    ){
        return "Os campos deves ser preenchidos da maneira correta"
    }
    return null
}
//O numero inicial nao pode ser maior do que o numero final
const numeroMaior = function(numeroInicial, numeroFinal){
    if(numeroInicial > numeroFinal){
        return "O numero inicial deve ser menor do que o numero final"
    }
    return null
}

//Os dois numeros não podem ser iguais
const numerosIguais = function(numeroInicial, numeroFinal){
    if(numeroInicial == numeroFinal){
        return "Os numeros não podem ser iguais"
    }
    return null
}

//Função para fazer a lista de numeros pares
const separarPares = function(numeroInicial, numeroFinal){
    let contador = 0;
    let i = numeroInicial

    while(i <= numeroFinal){ //Enquanto i não ultrapassar o número final, 
                             // o loop continua. Para 2 até 10, roda para cada número: 2, 3, 4, 5...
        if(i % 2 === 0){     //A cada número, verifica se ele é par. Se o resto da divisão por 2 for 0, é par
            console.log(i)
            contador++       //Se for par, exibe o número e incrementa o contador em 1
        }
        i++
    }
    console.log(`Qtde de números encontrados: ${contador}`)
}

//Função para fazer a lista de numeros ímpares
const separarImpares = function(numeroInicial, numeroFinal){
    let contador = 0;
    let i = numeroInicial

    while(i <= numeroFinal){
        if(i % 2 !== 0){     //Se o resto da divisão por 2 for diferente de zero, o número é ímpar
            console.log(i)
            contador++
        }
        i++
    }
    console.log(`Qtde de números encontrados: ${contador}`)
}

//Função para separar a escolha de lista e chamar as suas respectivas funções
const escolherDivisao = function(opcao, numeroInicial, numeroFinal){
    if(opcao === "1"){
        console.log("Lista de números Pares")
        separarPares(numeroInicial, numeroFinal)  //Chama a função e leva seus respectivos valores
    }
    else if(opcao === "2"){
        console.log("Lista de números Ímpares")
        separarImpares(numeroInicial, numeroFinal)
    }
    else if(opcao === "3"){
        console.log("Lista de números Pares")
        separarPares(numeroInicial, numeroFinal)
        console.log("Lista de números Ímpares")
        separarImpares(numeroInicial, numeroFinal)
    }
    else{
    console.log ("Opção inválida! Digite 1, 2 ou 3")
    }
}

module.exports = {
    validarNumeroInicial,
    validarNumeroFinal,
    validarVazio,
    numeroMaior,
    numerosIguais,
    separarPares,
    separarImpares,
    escolherDivisao   
}