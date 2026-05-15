/***********************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e
 *          manipulação de dados para o CRUD de sexo
 * Data:13/05/2026
 * Autor: Lucas Duarte
 * Versão: 1.0
 ***********************************************************************/

//IMport do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js')

//Import do arquivo DAO para fazer o CRUD do sexo no banco de dados
const sexoDAO = require('../../model/DAO/sexo/sexo.js')

//Função para inserir um novo Sexo
const inserirNovoSexo = async function (sexo, contentType) {

    let message = JSON.parse(JSON.stringify(config_message))

    try{

        if (String(contentType).toUpperCase() == 'APPLICATION/JSON') {

            let validar = await validarDadosSexo(sexo)

            if (validar) {
                return validar //400

            }else{
                let result = await sexoDAO.insertSexo(sexo)

                if (result) {
                    sexo.id = result[0].insertId

                    message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                    message.DEFAULT_MESSAGE.response = sexo
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

//Função para atualizar um sexo
const atualizarSexo = async function(sexo, id, contentType) {
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

            let resultBuscarID = await buscarSexo(id)
            if(resultBuscarID.status){
                let validar = await validarDadosSexo(sexo)
            
                if(!validar){
                    sexo.id = id

                    let result = await sexoDAO.updateSexo(sexo)
                    
                    if(result){
                        message.DEFAULT_MESSAGE.status      = message.SUCCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message     = message.SUCCESS_UPDATED_ITEM.message
                        message.DEFAULT_MESSAGE.message     = sexo

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

//Função para retornar TODOS os sexos
const listarSexo = async function(){
    let message = JSON.parse(JSON.stringify(config_message))
    
        try {
            let result = await sexoDAO.selectAllSexo()    
    
            //Valida se o DAO conseguiu processar os dados
            if(result){
                //Validação para verificar se existe conteúdo no array
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.count = result.length
                    message.DEFAULT_MESSAGE.response.personagem = result
    
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

//Função para buscar um sexo pelo ID
const buscarSexo = async function(id){
let message = JSON.parse(JSON.stringify(config_message))

    try {
        if(id == undefined || id == '' || id == null || isNaN(id)){
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        }else{
            let result = await sexoDAO.selectByIdSexo(id)

            if(result){
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.sexo = result

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

//Função para excluir um sexo pelo ID
const excluirSexo = async function(id){
    let message = JSON.parse(JSON.stringify(config_message))
    try {

        let resultBuscarID = await buscarSexo(id)

        if(resultBuscarID.status){
            let result = await sexoDAO.deleteSexo(id)

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

//Função para validar todos os dados de sexo
// (Obrigatórios, qtde de caracteres, etc)
const validarDadosSexo = async function(sexo){
    let message = JSON.parse(JSON.stringify(config_message))
    
    //Validação de dados para os atrinutos do sexo (Status 400)
     if(sexo.sigla == undefined || sexo.sigla == '' || sexo.sigla == null || sexo.sigla.length > 4){
        message.ERROR_BAD_REQUEST.field = '[SIGLA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400
    }else if(sexo.descricao == undefined || sexo.descricao == '' || sexo.descricao == null || sexo.descricao.length > 40){
        message.ERROR_BAD_REQUEST.field = '[DESCRIÇÃO] INVÁLIDA'
        return message.ERROR_BAD_REQUEST //400
    }
    else{
        return false
    }
}

module.exports = {
    inserirNovoSexo,
    atualizarSexo,
    listarSexo,
    buscarSexo,
    excluirSexo
}