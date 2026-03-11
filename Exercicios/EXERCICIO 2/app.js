/************************************************************************
 * Objetivo: Calcular Imposto Composto
 * Data: 04/02/2026
 * Autor: Lucas
 * Versão: 1.0
 * **********************************************************************/
/*
    Utilização do módulo readline
    Permite a entrada e saída de dados pelo terminal (Node.js)
*/
const readline = require('readline') 
/*
    Criação da interface de entrada de dados
    input  -> teclado
    output -> terminal
*/
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados - Nome do Cliente
entradaDeDados.question('Digite seu nome: ', function(nome){
    let nomeCliente = nome 

    //Entrada de dados - Nome do Produto
    entradaDeDados.question('Digite o nome do produto: ', function(produto){
        let nomeProduto = produto

        
        //Entrada de dados - Valor da Compra
        entradaDeDados.question('Digite o valor da compra: R$', function(valor){
            let valorProduto = valor

            entradaDeDados.question('Digite a taxa de juros: ', function(juros){
                let taxa

                taxa = juros/100      
                /*
                Tipo de parcelamento
                (1) Anos
                (2) Meses
                */
               entradaDeDados.question(
                   'Para realizar a divisão de parcelas escolha o periodo a ser utilizado - (1) Anos (2) Meses: ',
                   function(tempo){
                       
                       let tipoDePeriodo = tempo
                       
                      //Validação de campos vazios
                      if(nomeCliente == '' || nomeProduto == '' || valorProduto == '' || tipoDePeriodo == '' || taxa == ''){
                          console.log('Erro: É obrigatório o preenchimento de todos os dados!!!')
                    
                          /*
                          Validação de números nos campos:
                          Nome do Cliente e Nome do Produto
                          */
                        }else if(!isNaN(nomeCliente) || !isNaN(nomeProduto)){
                            console.log('Erro: Nos campos de nome e produto não é permitido a digitação de números!!!')
                            
                            /*
                            Validação de letras nos campos:
                            Valor da compra e Tipo de período
                            */
                        }else if(isNaN(valorProduto) || isNaN(tipoDePeriodo) || isNaN(taxa)){
                            console.log('Erro: Nos campos de valor, parcelas e juros é apenas permitido a utilização de números!!!')
                            
                        //Validação de opção inexistente para o período
                        }else if(tipoDePeriodo < 1 || tipoDePeriodo > 2){
                            console.log('Erro: Opção de periodo inexistente!!!')
                            
                        //Conversão de anos para meses
                        }else if(tipoDePeriodo == 1){ 
                            entradaDeDados.question(
                                'Digite em quantos anos serão divididas as parcelas: ',
                                function(tempo){
                                    
                                    //Tratamento de dados e cálculo
                                    let periodoAnos = Number(tempo)
                                    let periodoMeses = periodoAnos * 12
                                    let capital = Number(valorProduto)
                                    let taxaJuros = Number(taxa)

                                    //Cáculo Montante
                                    let montante = capital * (1 + taxaJuros) ** periodoMeses
                                    let acrescimo = montante - valorProduto

                                    //Passando as variaveis pra dentro da função nova
                                    exibirResultado(nomeCliente, nomeProduto, valorProduto, periodoMeses, montante, acrescimo)

                                   //Validação de entrada - Anos
                                   if(isNaN(periodoAnos)){
                                       console.log('Erro: Este campo recebe apenas números!!!')
                                    }else if(periodoAnos == ''){
                                        console.log('Erro: O campo está vazio!!!')
                                    }
                                    
                                    entradaDeDados.close()//Finaliza a entrada de dados

                                })//Fecha a quantidade de anos
                                
                            //Entrada e validação do período em meses
                            }else if(tipoDePeriodo == 2){
                                entradaDeDados.question(
                                    'Digite em quantos meses serão divididas as parcelas: ',
                                    function(tempo){
                                        
                                        //Tratamento de dados e cálculo
                                        let periodoMeses = Number(tempo)
                                        let capital = Number(valorProduto)
                                        let taxaJuros = Number(taxa)
                                        
                                        //Cáculo Montante
                                        let montante = capital * (1 + taxaJuros) ** periodoMeses
                                        let acrescimo = montante - valorProduto

                                        //Passando as variaveis pra dentro da função nova
                                        exibirResultado(nomeCliente, nomeProduto, valorProduto, periodoMeses, montante, acrescimo)

                                        //Validação de entrada - Meses
                                       if(isNaN(periodoMeses)){
                                           console.log('Erro: Este campo recebe apenas números!!!')
                                        }else if(periodoMeses == ''){
                                            console.log('Erro: O campo está vazio!!!')
                                        }
                                        
                                        entradaDeDados.close()//Finaliza a entrada de dados

                                    })//Fecha quantidade de meses
                                    
                                }//Fecha meses digitados
                })//Fecha escolha de periodo 
            })//Fecha taxa
        })//Fecha valor
    })//Fecha o produtos   
})//Fecha o nome


function exibirResultado(nomeCliente, nomeProduto, valorProduto, periodoMeses, montante, acrescimo){
    console.log(`\n******************* [VIVAMODA] *******************`)
    console.log(`\nMuito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.`)
    console.log(`\nA compra do produto ${nomeProduto}, tem um valor de: R$${valorProduto}.`)
    console.log(`\nA sua compra será parcelada em ${periodoMeses} vezes e o Sr(a) pagará: R$${montante.toFixed(2)}.`)
    console.log(`\nO acréscimo realizado ao valor de: R$${valorProduto} será de R$${acrescimo.toFixed(2)}.`)
    console.log(`\nMuito obrigado por escolher a [VIVAMODA].`)
    console.log(`\n***************************************************`)
}//fecha função de saida