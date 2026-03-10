
/************************************************************************
 * Objetivo: Calcular IMC
 * Data: 27/02/2026
 * Autor: Lucas
 * Versão: 1.0
 * **********************************************************************/

//Import das Bibliotecas 
const calcularIMC = require('./modulo/calcularIMC')
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados
entradaDeDados.question('Digite seu peso em KG: ', function(kg){
    let peso = kg

    entradaDeDados.question('Digite a sua altura em Metros: ', function(metros){
        let altura = metros

        //Chamando todas as funções de calculo
        let imc = calcularIMC.imcFormula(peso, altura)

        console.log(`Seu IMC é: ${imc.toFixed(2)}`)

        let classificacao = calcularIMC.classificar(imc)

        //Saida personalizada
        console.log(classificacao)

        entradaDeDados.close()
    })
})
