/*****************************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e 
 *      manipulação de dados para a tabela de GENERO_FILME
 * Data: 22/05/2026
 * Autor: Lucas Duarte
 * Versão: 1.0
 *****************************************************************************/

//Import do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js')

//Import do arquivo DAO para fazer o CRUD do genero no banco de dados
const generoFilmeDAO = require('../../model/DAO/genero_filme/genero_filme.js')

//Função para inserir um novo genero
const inserirNovoGeneroFilme = async function (generoFilme) {

    let message = JSON.parse(JSON.stringify(config_message))

    try{
        let validar = await validarDadosGenero(generoFilme)

         if (validar) {
             return validar //400

        }else{
            let result = await generoFilmeDAO.insertGeneroFilme(generoFilme)

            if (result) {
                generoFilme.id = result //result[0].insertId - Desta vez nao entrando dentro do Array pois ja foi feito isso no DAO

                message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                message.DEFAULT_MESSAGE.response = generoFilme
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
            }
            return message.DEFAULT_MESSAGE
            }   

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}

//Função para atualizar um genero
const atualizarGeneroFilme = async function(generoFilme, id) {
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        let resultBuscarID = await buscarGeneroFilme(id)
        if(resultBuscarID.status){
            let validar = await validarDadosGenero(generoFilme)
            
            if(!validar){
                generoFilme.id = id

                let result = await generoFilmeDAO.updateGeneroFilme(generoFilme)
                    
                if(result){
                    message.DEFAULT_MESSAGE.status      = message.SUCCESS_UPDATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_UPDATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message     = message.SUCCESS_UPDATED_ITEM.message
                    message.DEFAULT_MESSAGE.message     = generoFilme

                    return message.DEFAULT_MESSAGE //200 (Atualizado)

                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL //500
                }
            }else{
                return validar //400
            }
        }else{
            return resultBuscarID //400 ou 404 ou 500 - Pq esta função já tem a validação 
        }                           // e a resposta com as respectivas menssagens
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500 (Controller)
    }
}

//Função para retornar TODOS os generos
const listarGeneroFilme = async function(){
    let message = JSON.parse(JSON.stringify(config_message))
    
        try {
            let result = await generoFilmeDAO.selectAllGeneroFilme()    
    
            //Valida se o DAO conseguiu processar os dados
            if(result){
                //Validação para verificar se existe conteúdo no array
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.count = result.length
                    message.DEFAULT_MESSAGE.response.genero_filme = result
    
                    return message.DEFAULT_MESSAGE //200 (Dados do Filme)
                }else{
                    return message.ERROR_NOT_FOUND
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
            }
    
        } catch (error) {
            return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
        }
}

//Função para buscar um genero pelo ID
const buscarGeneroFilme = async function(id){
let message = JSON.parse(JSON.stringify(config_message))

    try {
        if(id == undefined || id == '' || id == null || isNaN(id)){
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        }else{
            let result = await generoFilmeDAO.selectByIdGeneroFilme(id)

            if(result){
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.genero_filme = result

                    return message.DEFAULT_MESSAGE //200
                }else{
                    return message.ERROR_NOT_FOUND //404
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500 (Model)
            }
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }
}

//Função para buscar um genero pelo ID
const buscarFilmeIdGenero = async function(idGenero){
    let message = JSON.parse(JSON.stringify(config_message))
    
        try {
            if(idGenero == undefined || idGenero == '' || idGenero == null || isNaN(idGenero)){
                message.ERROR_BAD_REQUEST.field = '[ID_GENERO] INVÁLIDO'
                return message.ERROR_BAD_REQUEST //400
            }else{
                let result = await generoFilmeDAO.selectFilmesByIdGenero(idGenero)
    
                if(result){
                    if(result.length > 0){
                        message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                        message.DEFAULT_MESSAGE.response.genero_filme = result
    
                        return message.DEFAULT_MESSAGE //200
                    }else{
                        return message.ERROR_NOT_FOUND //404
                    }
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL //500 (Model)
                }
            }
        } catch (error) {
            return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
        }
}

//Função para buscar um genero pelo ID
const buscarGeneroIdFilme = async function(idFilme){
    let message = JSON.parse(JSON.stringify(config_message))
    
        try {
            if(idFilme == undefined || idFilme == '' || idFilme == null || isNaN(idFilme)){
                message.ERROR_BAD_REQUEST.field = '[ID_FILME] INVÁLIDO'
                return message.ERROR_BAD_REQUEST //400
            }else{
                let result = await generoFilmeDAO.selectGenerosByIdFilmes(idFilme)
    
                if(result){
                    if(result.length > 0){
                        message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                        message.DEFAULT_MESSAGE.response.genero_filme = result
    
                        return message.DEFAULT_MESSAGE //200
                    }else{
                        return message.ERROR_NOT_FOUND //404
                    }
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL //500 (Model)
                }
            }
        } catch (error) {
            return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
        }
}

//Função para excluir um genero pelo ID
const excluirGeneroFilme = async function(id){
    let message = JSON.parse(JSON.stringify(config_message))
    try {

        let resultBuscarID = await buscarGeneroFilme(id)

        if(resultBuscarID.status){
            let result = await generoFilmeDAO.deleteGeneroFilme(id)

            if(result){
                message.DEFAULT_MESSAGE.status = message.SUCCESS_DELETED_ITEM.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_DELETED_ITEM.status_code
                message.DEFAULT_MESSAGE.message = message.SUCCESS_DELETED_ITEM.message
            
                return message.DEFAULT_MESSAGE //200
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500 (Model)
            }
        }else{
            return resultBuscarID //400 ou 404
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (Controller)
    }
}

//Função para excluir os generos relacionados com o filme
const excluirGenerosIdFilme = async function(idFilme){
    let message = JSON.parse(JSON.stringify(config_message))
    try{
        //Chamar a função do DAO para excluir o genero
        let result = await generoFilmeDAO.deleteGenerosByIdFIlme(idFilme)

        if(result){
            message.DEFAULT_MESSAGE.status = message.SUCCESS_DELETED_ITEM.status
            message.DEFAULT_MESSAGE.status_code = message.SUCCESS_DELETED_ITEM.status_code
            message.DEFAULT_MESSAGE.message = message.SUCCESS_DELETED_ITEM.message
            
            return message.DEFAULT_MESSAGE //200
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL //500 (Model)
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (Controller)
    }
}


//Função para validar todos os dados do genero
// (Obrigatórios, qtde de caracteres, etc)
const validarDadosGenero = async function(generoFilme){
    let message = JSON.parse(JSON.stringify(config_message))
    
    //Validação de dados para os atrinutos do genero (Status 400)
     if(generoFilme.id_filme == undefined || generoFilme.id_filme == '' || generoFilme.id_filme == null || isNaN(generoFilme.id_filme)){
        message.ERROR_BAD_REQUEST.field = '[ID_FILME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400
    }else if(generoFilme.id_genero == undefined || generoFilme.id_genero == '' || generoFilme.id_genero == null || isNaN(generoFilme.id_genero)){
        message.ERROR_BAD_REQUEST.field = '[ID_GÊNERO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400{
    }else{
        return false
    }
}

module.exports = {
    inserirNovoGeneroFilme,
    atualizarGeneroFilme,
    listarGeneroFilme,
    buscarGeneroFilme,
    buscarFilmeIdGenero,
    buscarGeneroIdFilme,
    excluirGeneroFilme,
    excluirGenerosIdFilme
}