/*********************************************************************************************
- Objetivo: Calcular tabuada com contador
- Data: 05/03/2026
- Autor: Lucas
- Versão: 1.0
- *****************************************************************************************/

//Import bibliotecas
const readline = require('readline')
const bibliotecaTabuada = require('./modulo/tabuada')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite a tabuada inicial: ', function(t1){
    entradaDeDados.question('Digite a tabuada final: ', function(t2){
        entradaDeDados.question('Digite o contador inicial: ', function(c1){
            entradaDeDados.question('Digite o contador final: ', function(c2){

                // Validação de vazio (antes de converter para número)
                const erroVazio = bibliotecaTabuada.validarVazio(t1, t2, c1, c2)
                if(erroVazio){
                    console.log(erroVazio)
                    entradaDeDados.close()
                    return
                }

                // Conversão para número
                let tabInicial = Number(t1)
                let tabFinal   = Number(t2)
                let contInicial = Number(c1)
                let contFinal   = Number(c2)

                // Validações
                const erroTabuada = bibliotecaTabuada.validarTabuada(tabInicial, tabFinal)
                if(erroTabuada){ console.log(erroTabuada); entradaDeDados.close(); return }

                const erroContador = bibliotecaTabuada.validarContador(contInicial, contFinal)
                if(erroContador){ console.log(erroContador); entradaDeDados.close(); return }

                // Gerar tabuada
                bibliotecaTabuada.gerarTabuada(tabInicial, tabFinal, contInicial, contFinal)
                entradaDeDados.close()
            })
        })
    })
})