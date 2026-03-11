/*************************************************************************************************
 * Objetivo: 
 * Data: 20/02/2026
 * Autor: Lucas
 * Versão: 1.0
 *************************************************************************************************/

//import da biblioteca para calculos
const calculosMatematicos = require('./modulo/calcular')

let resposta = calculosMatematicos.calcular(10, 60, 'somar')
let respostaSoma = calculosMatematicos.somar(50,30)

console.log(resposta)
console.log(respostaSoma)