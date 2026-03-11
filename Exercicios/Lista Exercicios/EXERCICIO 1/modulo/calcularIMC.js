/*************************************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de calcular IMC e classifcar peso
 * Data: 27/02/2026
 * Autor: Lucas
 * Versão: 1.0
 *************************************************************************************************/

//Arrow Function
 const imcFormula = (peso, altura) => Number(peso) / Number(altura)**2


//Ele utiliza ja o IMC calculado
//Avalicao de todas as condições
 const classificar = function (imc){
    if(imc < 18.5 ){
        return 'Sua classificação é: Abaixo do peso'
    } else if(imc < 25 ){
        return 'Sua classificação é: Peso Normal'
    }else if(imc < 30){
        return 'Sua classificação é: Acima do peso (sobrepeso)'
    }else if(imc < 35 ){
        return 'Sua classificação é: Obesidade 1'
    }else if(imc < 40){
        return 'Sua classificação é: Obesidade 2'
    }else if(imc >= 40){
        return 'Sua classificação é: Obesidade 3'
    }
 }

 module.exports = {
    imcFormula,
    classificar
 }