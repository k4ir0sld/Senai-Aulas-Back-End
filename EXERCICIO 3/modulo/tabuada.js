/*********************************************************************************************
- Objetivo: Arquivo responsável por gerar a tabuada de um número inicial e final
- Data: 05/03/2026
- Autor: Lucas
- Versão: 1.0
- *****************************************************************************************/

//Validação vazio
const validarVazio = function(tabInicial, tabFinal, contInicial, contFinal){
    if(
        tabInicial.trim() === '' ||
        tabFinal.trim() === '' ||
        contInicial.trim() === '' ||
        contFinal.trim() === ''
    ){
        return "Os campos não podem ficar vazios!"
    }
    return null
}

//A entrada da tabuada deverá ser entre 2 e 100, não sendo permitido outros valores
const validarTabuada = function(tabInicial, tabFinal){
    if(tabInicial < 2 || tabInicial > 100 || tabFinal < 2 || tabFinal > 100){
        return "A tabuada deve ser entre 2 e 100!"
    }
    return null
}

//O valor até onde será calculada a tabuada deverá ser entre 1 e 50
const validarContador = function(contadorInicial, contadorFinal){
    if(contadorInicial < 1 || contadorInicial > 50 || contadorFinal < 1 || contadorFinal > 50){
    return "O contador deve ser entre 1 e 50!"
    }
    return null

}

//Função com while para gerar tabuada
const gerarTabuada = function(tabInicial, tabFinal, contInicial, contFinal){
    let tabuadaInicial = Number(tabInicial)
    let tabuadaFinal   = Number(tabFinal)
    
    while(tabuadaInicial <= tabuadaFinal){

        let contadorInicial = Number(contInicial)   
        let contadorFinal   = Number(contFinal)
        let resultadoCont

        console.log(`\nTabuada do [${tabuadaInicial}]\n`)

        while(contadorInicial <= contadorFinal){                //Utiliza dos contadores para alcançar o numero final e exiber a quantidade certa de tabuadas
            resultadoCont = (contadorInicial * tabuadaInicial)
            console.log(`${tabuadaInicial} X ${contadorInicial} = ${resultadoCont}`)
            
            contadorInicial++
        }
        tabuadaInicial++
    }
}

module.exports = {
    validarVazio,
    validarTabuada,
    validarContador,
    gerarTabuada
}