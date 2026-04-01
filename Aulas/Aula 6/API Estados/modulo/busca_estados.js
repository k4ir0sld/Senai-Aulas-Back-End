/************************************************************************
 * Objetivo: Manipular dados utilizando Array e JSON para a busca de estados
 * Data: 20/03/2026
 * Autor: Lucas Duarte
 * Versão: 1.0
*************************************************************************/

const listaDeEstados = require('./array_json')

const getListaDeEstados = function (){

    let listaSiglas = []

    listaDeEstados.estados.map(function(item){
        listaSiglas.push(item.sigla)
    })
    
    return {
        uf: listaSiglas,
        quantidade: listaSiglas.length
    }
    
}

//console.log(getListaDeEstados())

const getDadosEstado = function (uf){

    let estado = listaDeEstados.estados.find(function(estado){
        return estado.sigla.toLowerCase() === uf.toLowerCase()
    })

    if(!estado) return false

    return{
        uf: estado.sigla,
        descricao: estado.nome,
        capital: estado.capital,
        regiao: estado.regiao
    }

}
//console.log (getDadosEstado('al'))

const getCapitalEstado = function (uf){
    let infoCapital = listaDeEstados.estados.find(function(infoCapital){
        return infoCapital.sigla.toLowerCase() === uf.toLowerCase()
    })

    if(!infoCapital) return false

    return{uf: infoCapital.sigla, 
        descricao: infoCapital.nome, 
        capital: infoCapital.capital}
}

//console.log(getCapitalEstado("mg"))

const getEstadosRegiao = function (nomeRegiao){
    
    let estadosDaRegiao = {
        regiao: nomeRegiao,
        estados: []
    }
    
    listaDeEstados.estados.forEach(function(item){
        if(item.regiao.toLowerCase() == nomeRegiao.toLowerCase()){
            let dadosEstado = {
                uf: item.sigla,
                descricao: item.nome
            }
            
            estadosDaRegiao.estados.push(dadosEstado)
        }
    })
    
    if (estadosDaRegiao.estados.length === 0) return false
    
    return estadosDaRegiao
}
//console.log(getEstadosRegiao("norte"))

const getCapitalPais = function (){
    let listaCapitaisPais = {
        capitais: []
    }

    listaDeEstados.estados.forEach(function(item){
        if(item.capital_pais != undefined){
            let informacoesCapital = {
                capital_atual: item.capital_pais.capital,
                uf: item.sigla,
                descricao: item.nome,
                capital: item.capital,
                regiao: item.regiao,
                capital_pais_ano_inicio: item.capital_pais.ano_inicio,
                capital_pais_ano_termino: item.capital_pais.ano_fim
            }
            listaCapitaisPais.capitais.push(informacoesCapital)
        }
    })


    return listaCapitaisPais
}

//console.log(getCapitalPais())

const getCidades = function (uf){

    if(!uf || uf == '') return false

   let estado = listaDeEstados.estados.find(function(item){
    return item.sigla.toLowerCase() === uf.toLowerCase()
   })

   if(estado){
    return {
        uf: estado.sigla,
        descricao: estado.nome,
        quantidade_cidades: estado.cidades.length,
        cidades: estado.cidades.map(c => c.nome)
    }
   }
   return false

}

//console.log(getCidades('SP'))

module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades

}