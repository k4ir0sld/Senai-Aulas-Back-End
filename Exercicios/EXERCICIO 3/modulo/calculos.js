function validarEntradaVazia(n1, n2, escolha){
    if(n1.trim() === '' || n2.trim() === '' || escolha.trim() === ''){
        return false
    }
    return true
}

function validarEntradaNumeros (n1, n2){
    let v1 = Number(n1)
    let v2 = Number(n2)

    if(isNaN(v1) || isNaN(v2)){
        return false
    }
}

function validarEscolha (escolha){
    const escolhaValida = ['soma', 'subtracao', 'divisao', 'multiplicacao']
    escolha = escolha.toLowerCase();

    return escolhaValida.includes(escolha)
}

function somar (n1, n2){
    return n1 + n2
}

function subtrair (n1, n2){
    return n1 - n2
}

function multiplicar (n1, n2){
    return n1 * n2
}

function dividir (n1, n2){
    if(n1 === 0 || n2 === 0){
        return false
    }
    return n1 / n2

} 

function realizarOperacao (n1, n2, escolha){
    if(escolha === 'soma'){
        return somar(n1, n2)
    }else if(escolha === 'subtracao'){
        return subtrair(n1, n2)
    }else if(escolha === 'multiplicacao'){
        return multiplicar(n1, n2)
    }else if(escolha === 'divisao'){
        return dividir(n1, n2)
    }
}


function trocarVirgula(n1, n2){
    n1 = n1.replace(',', '.')
    n2 = n2.replace(',', '.')

    return { n1, n2 }
}

function validarVariasVirgulas(n1, n2) {
    const regex = /^\d+([.,]\d+)?$/;
  
    if (!regex.test(n1) || !regex.test(n2)) {
      return false;
    }
  
    return true;
  }


  module.exports = {
    validarEntradaVazia,
    validarEntradaNumeros,
    validarEscolha,
    realizarOperacao,
    validarVariasVirgulas,
    trocarVirgula
}