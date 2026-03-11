/*************************************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de calcular fatorial e validar numero
 * Data: 10/03/2026
 * Autor: Lucas Duarte
 * Versão: 1.0
 *************************************************************************************************/

// Validação do numero para calcular o fatorial, o fatorial é 
// definido apenas para números inteiros positivos maiores que 1 ou seja ve tbm se a entrada foi vazia
const validarNumero = function(n){
    if(n <= 1){
        return `O número ${n} não é válido para calcular o fatorial. O fatorial é definido apenas para números inteiros positivos maiores que 1.`
    }
}

// Função que realiza o calculo do fatorial
const calcularfatorial = function(n){
    let numeroFatorial = Number(n)
    let numeroMultiplicador = Number(n) - 1
     let passos = String(n); // Variavel para realizar a concatenação dos passos do calculo do fatorial (ex: 5x4x3x2x1)

    while(numeroMultiplicador > 1){
        numeroFatorial = numeroFatorial * numeroMultiplicador
        passos += `x${numeroMultiplicador}`; // Realização da concatenação de passos 
        numeroMultiplicador--                // += pegue o valor atual e some/concatene com isso, salvando o resultado na mesma variável
                                             // ex: let x = 5;
                                                // x += 3;  x = 8
    }
    
    return `Fatorial de ${n} é ${passos}x1 = ${numeroFatorial}`; // Saída
}

module.exports = {
    validarNumero,
    calcularfatorial
}
