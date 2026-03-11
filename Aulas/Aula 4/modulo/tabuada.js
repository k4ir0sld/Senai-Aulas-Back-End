/*********************************************************************************************
 * Objetivo: Arquivo responsável por gerar a tabuada de um número
 * Data: 25/02/2026
 * Autor: Marcel
 * Versão: 1.0
 * ******************************************************************************************/ 
//Import da biblioteca de calculos matematicos
const calculosMatematicos = require('./calcular.js')

//Função para imprimir a tabuada usando while
const gerarTabuada = function(tabuada){
    //Recebe a tabuada a ser gerada
    let tab = Number(tabuada)
    let cont = 0
    let resultado

    //Repetição para gerar a tabuada até 10
    while(cont <= 10){
        //Chama a função de multiplicar para realizar a operação  
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} X ${cont} = ${resultado}`)
        
        //cont = cont + 1
        //cont++
        cont +=1
    }
}

//Função para imprimir a tabuada usando for
const gerarTabuadaFor = function(tabuada){
    //Recebe a tabuada a ser gerada
    let tab = Number(tabuada)
    //let cont = 0
    let resultado

    //Repetição para gerar a tabuada até 10
    for(let cont = 0; cont <= 10; cont++){
        //Chama a função de multiplicar para realizar a operação  
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} X ${cont} = ${resultado}`)
    }
}


gerarTabuadaFor(8)