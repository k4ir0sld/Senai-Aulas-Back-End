/***********************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e
 *          manipulação de dados para o CRUD de atividade
 * Data:29/05/2026
 * Autor: Lucas Duarte
 * Versão: 1.0
 ***********************************************************************/

//IMport do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js')

//Import do arquivo DAO para fazer o CRUD da atividade no banco de dados
const atividadeDAO = require('../../model/DAO/atividade/atividade.js')

//Função para inserir uma nova atividade
const inserirNovaAtividade = async function (atividade, contentType) {

    let message = JSON.parse(JSON.stringify(config_message))

    try{

        if (String(contentType).toUpperCase() == 'APPLICATION/JSON') {

            let validar = await validarDadosAtividade(atividade)

            if (validar) {
                return validar //400

            }else{
                let result = await atividadeDAO.insertAtividade(atividade)

                if (result) {
                    atividade.id = result

                    message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                    message.DEFAULT_MESSAGE.response = atividade
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
                }
                return message.DEFAULT_MESSAGE
            }   
        }else{
            return message.ERROR_CONTENT_TYPE //415
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}

//Função para atualizar uma atividade
const atualizarAtividade = async function(atividade, id, contentType) {
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

            let resultBuscarID = await buscarAtividade(id)
            if(resultBuscarID.status){
                let validar = await validarDadosAtividade(atividade)
            
                if(!validar){
                    atividade.id = id

                    let result = await atividadeDAO.updateAtividade(atividade)
                    
                    if(result){
                        message.DEFAULT_MESSAGE.status      = message.SUCCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message     = message.SUCCESS_UPDATED_ITEM.message
                        message.DEFAULT_MESSAGE.message     = atividade

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
        }else{
            return message.ERROR_CONTENT_TYPE //415
        }
    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500 (Controller)
    }
}

//Função para retornar TODAS as atividades
const listarAtividade = async function(){
    let message = JSON.parse(JSON.stringify(config_message))
    
        try {
            let result = await atividadeDAO.selectAllAtividade()    
    
            //Valida se o DAO conseguiu processar os dados
            if(result){
                //Validação para verificar se existe conteúdo no array
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.count = result.length
                    message.DEFAULT_MESSAGE.response.atividade = result
    
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

//Função para buscar uma atividade pelo ID
const buscarAtividade = async function(id){
let message = JSON.parse(JSON.stringify(config_message))

    try {
        if(id == undefined || id == '' || id == null || isNaN(id)){
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        }else{
            let result = await atividadeDAO.selectByIdAtividade(id)

            if(result){
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.nacionalidade = result

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

//Função para excluir uma atividade pelo ID
const excluirAtividade = async function(id){
    let message = JSON.parse(JSON.stringify(config_message))
    try {

        let resultBuscarID = await buscarAtividade(id)

        if(resultBuscarID.status){
            let result = await atividadeDAO.deleteAtividade(id)

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

//Função para validar todos os dados da atividade
// (Obrigatórios, qtde de caracteres, etc)
const validarDadosAtividade = async function(atividade){
    let message = JSON.parse(JSON.stringify(config_message))
    
    //Validação de dados para os atrinutos da Atividade (Status 400)
     if(atividade.atividade == undefined || atividade.atividade == '' || atividade.atividade == null || atividade.atividade.length > 80){
        message.ERROR_BAD_REQUEST.field = '[ATIVIDADE] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400
    }else{
        return false
    }
}

module.exports = {
    inserirNovaAtividade,
    atualizarAtividade,
    listarAtividade,
    buscarAtividade,
    excluirAtividade
}