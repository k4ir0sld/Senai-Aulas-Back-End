/************************************************************************
 * Objetivo: Calcular Fatorial de um número inteiro
 * Data: 10/03/2026
 * Autor: Lucas Duarte
 * Versão: 1.0
 * **********************************************************************/

//Import das bibliotecas
const bibliotecaFatorial = require('./modulo/fatorial')
const readline = require('readline')

//Criando a interface para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Criando a pergunta para o usuario e armazenando a resposta na variavel numero
entradaDeDados.question('Digite um número para calcular o fatorial: ', function(numero){
    let numFatorial = numero

    numFatorial = bibliotecaFatorial.validarNumero(numFatorial)
    if(numFatorial){ // Cria a condicional para validar o numero se for vdd ele entra na condicional 
                     // e mostra a msg de erro da propria função
        console.log(numFatorial)
    } else{          // E logo em seguiguida caso o numero seja valido, retornando false e
                     // indo para o else para executar o calculo do fatorial
        console.log(bibliotecaFatorial.calcularfatorial(numero))
    }
    entradaDeDados.close()
})