/**************************************************************************** 
 * Objetivo: Arquivo responsável pelas funções de Calculos para este projeto
 * Autor: Lucas
 * Data: 11/02/2026
 * Versão: 1.0
 * **************************************************************************/ 

//Criando uma função para calcular o valor da compra parcelada
//Metodo tradicional de criar uma função
function calcularJurosCompostos(valorCompra, taxaJuros, tempoPago){
    //Recebe os argumentos da função em variaveis locais
    /*As variaveis (valor, taxa e tempo são numéricas por conta da conversão)
    mas os argumentos (valorCompra, taxaJuros, tempoPago ainda será Strings)*/
    let valor = Number(valorCompra)
    let taxa = Number(taxaJuros)
    let tempo = Number(tempoPago)

    //Validação para entrada vazias ou de caracteres inválidos
    if(valorCompra == '' || isNaN(valorCompra) || tempoPago == '' || isNaN(tempoPago)){
        console.log('ERRO: Valores de compra ou tempo de pagamento estão incorretos.')
        return false
    }else{
        //Chama a função para converter o numero em percentual
        let percentual = calcularPercentual(taxa)
    
        //Validação para o erro do percentual na função calcularPercentual()
        if(percentual){
            let montante = valor * ((1+percentual) ** tempo)
            return Number(montante.toFixed(2))
        }else{
            console.log('ERRO: Valor da taxa está incorreto.')
            return false
        }
    }
}

//Calcula o percentual de um número
function calcularPercentual(numero){
    let numeroPercentual = Number(numero)
    
    //Validação para verificar se é um número válido
    if(numero == '' || numero <= 0 || isNaN(numero)){
        return false //Não pode processar
    }else{
        //Processamento do calculo do percentual
        let percentual = numeroPercentual / 100
        return Number(percentual .toFixed(2))
    }

}

//Tornando as duas funções publicas para este projeto
module.exports = {
    calcularJurosCompostos, 
    calcularPercentual
}