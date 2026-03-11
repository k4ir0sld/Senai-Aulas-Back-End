/*************************************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de calcular (SOMA, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * Data: 20/02/2026
 * Autor: Lucas
 * Versão: 1.0
 *************************************************************************************************/
//toLowerCase() -> Retorna a string em minusculo
//toUpperCase() -> Retorna a string em MAIuSCULO



//Modelo de função anonima - Pois ela não tem um nome
//Calcular as 4 operações matemáticas

//Entrada
const calcular = function(numero1, numero2, operador){
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let resultado = false
    let operadorMatematico = String(operador).toUpperCase()

    //Condicionais para validar qual o tipo de operação matemática
    //A ausencia da { } na condicional é porque qualquer condicional que tenha apenas uma linha
    //de processamento a { } torna-se opcional

    //Processamento
    if(operadorMatematico == 'SOMAR')
        resultado = somar(valor1, valor2)
    else if(operadorMatematico == 'SUBTRAIR')
        resultado = subtrair(valor1, valor2)
    else if(operadorMatematico == 'MULTIPLICAR')
        resultado = multiplicar(valor1, valor2)
    else if(operadorMatematico == 'DIVIDIR')
        resultado = dividir(valor1, valor2)
    
    //Saida
    return resultado
}

//Exemplo de funções baseada em SETA (Arrow function)
//Funções para realizar as operações matemáticas
const somar = (numero1, numero2) => Number(numero1) + Number(numero2)
const subtrair = (numero1, numero2) => Number(numero1) - Number(numero2)
const multiplicar = (numero1, numero2) => Number(numero1) * Number(numero2)
const dividir = (numero1, numero2) => Number(numero1) / Number(numero2)


module.exports = {
    calcular,
    somar,
    multiplicar,
    dividir,
    subtrair
}