/************************************************************
 * Objetivo: Criar um sistema que permite o calculo de 
 * juros utilizando boas práticas com funções
 * Autor: Lucas
 * Data: 11/02/2026
 * Versão: 1.0
 ************************************************************/
// Import da biblioteca do readline
const readline = require('readline')

// Cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Entrada do nome do cliente
entradaDeDados.question('Digite o nome do cliente: ', function(nome){
    let nomeCliente = nome

    // Entrada do nome do produto
    entradaDeDados.question('Digite o nome do produto: ', function(produto){
        let nomeProduto = produto

        //Entrada capital do produto
        entradaDeDados.question('Digite o valor da compra: ', function(capital){
            let capitalProduto = capital

            //Entrada taxa da compra
            entradaDeDados.question('Digite a taxa de juros a ser aplicada na compra: ', function(taxa){
                let taxaCompra = taxa

                //Entrada do tempo de pagamento
                entradaDeDados.question('Digite o tempo para realizar o pagamento: ', function(tempo){
                    let tempoPagamento = tempo

                    //Import da biblioteca que realiza calculos financeiros 
                    let calculos = require('./modulo/calculos')

                    let montante = calculos.calcularJurosCompostos(capitalProduto, taxaCompra, tempoPagamento)

                    if(montante){   
                        console.log('O montante final é: ' + montante.toFixed(2))
                    }else{
                        console.log('ERRO: Devido a problemas no calculo de juros, o programa encerrou.')
                        entradaDeDados.close()
                    }
                    
                })//Fecha tempo de pagamento
            })//Fecha taxa
        })//Fecha capitalProduto
    })//Fecha o nome produto
})//Fecha nome cliente
