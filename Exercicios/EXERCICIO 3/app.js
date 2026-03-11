/************************************************************
 * Objetivo: Criar um sistema que realize calculos basicos, 
 * o sistema deve trabalhar de maneira modularizada
 * Autor: Lucas
 * Data: 13/02/2026
 * Versão: 1.0
 ************************************************************/

const calculos = require('./modulo/calculos')

// Import da biblioteca do readline
const readline = require('readline')

// Cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite dois valores para que seja realizada a operação - Valor 1: ', function(n1){
    let valor1 = n1

    entradaDeDados.question('Digite o segundo valor - Valor 2: ', function(n2){
        let valor2 = n2

        entradaDeDados.question('Digite a operação que deve ser realizada (soma, subtracao, multiplicacao, divisao): ', function(escolha){


            // Validar campos vazios
            if(calculos.validarEntradaVazia(n1, n2, escolha) === false){
                console.log("Erro: Existem campos vazios.")
                entradaDeDados.close()
                return
            }

            // Validar formato (antes de converter)
            if(calculos.validarVariasVirgulas(n1, n2) === false){
                console.log("Erro: Número inválido. Ex: 66.6 é válido, 66.66.66 não.")
                entradaDeDados.close()
                return
            }

            // Converter vírgula para ponto
            let valoresConvertidos = calculos.trocarVirgula(n1, n2)
            n1 = valoresConvertidos.n1
            n2 = valoresConvertidos.n2

            // Converter para Number
            let numero1 = Number(n1)
            let numero2 = Number(n2)

            // Validar se é número
            if(calculos.validarEntradaNumeros(n1, n2) === false){
                console.log("Erro: Digite apenas números.")
                entradaDeDados.close()
                return
            }

            // Validar operação
            if(calculos.validarEscolha(escolha) === false){
                console.log("Erro: Operação inválida.")
                entradaDeDados.close()
                return
            }
        
            //Executar operação
            let resultado = calculos.realizarOperacao(numero1, numero2, escolha.toLowerCase())
        
            if(resultado === false){
                console.log("Erro: Não é possível dividir por zero.")
            } else {
                console.log("Resultado:", resultado.toFixed(2))
            }
        
            entradaDeDados.close()
        })
    })
})