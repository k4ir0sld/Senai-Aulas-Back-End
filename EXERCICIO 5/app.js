/************************************************************************
 * Objetivo: Calcular os numeros pares e ímpares e mostrar a lista
 * Data: 10/03/2026
 * Autor: Lucas Duarte
 * Versão: 1.0
 * **********************************************************************/

//Import das bibliotecas
const bibliotecaParImpar = require('./modulo/numerosParesImpares')
const readline = require('readline')

//Criando a interface para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Criando a pergunta para o usuario e armazenando a resposta na variavel n1
entradaDeDados.question('Digite o número inicial: ', function(n1){

    //Criando a pergunta para o usuario e armazenando a resposta na variavel n2
    entradaDeDados.question('Digite o número final: ', function(n2){

        // Validação de vazio (antes de converter para número)
        const erroVazio = bibliotecaParImpar.validarVazio(n1, n2)

        if(erroVazio){
            console.log(erroVazio) // Se o resultado de vazio for vdd segue para função e retorna uma saida
            entradaDeDados.close()
            return
        }

        // Conversão para número
        let numInicial = Number(n1)
        let numFinal = Number(n2)

        // Validações
        const erroInicial = bibliotecaParImpar.validarNumeroInicial(numInicial)
        if(erroInicial){ console.log(erroInicial); entradaDeDados.close(); return }

        const erroFinal = bibliotecaParImpar.validarNumeroFinal(numFinal)
        if(erroFinal){ console.log(erroFinal); entradaDeDados.close(); return }

        const erroMaior = bibliotecaParImpar.numeroMaior(numInicial, numFinal)
        if(erroMaior){ console.log(erroMaior); entradaDeDados.close(); return }

        const erroIguais = bibliotecaParImpar.numerosIguais(numInicial, numFinal)
        if(erroIguais){ console.log(erroIguais); entradaDeDados.close(); return }

        //Recebe a opção e leva para a sua respectiva lista
        entradaDeDados.question('Escolha uma opção de lista:\n1.Lista de números Pares\n2.Lista de números Impares\n3.Lista de ambos\nEscolha: ', function (opcao, numeroInicial, numeroFinal){
            bibliotecaParImpar.escolherDivisao(opcao, numInicial, numFinal)
            entradaDeDados.close()
      })
    })
})