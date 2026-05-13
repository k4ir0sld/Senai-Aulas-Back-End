/*****************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD no Banco de Dados MySQL na tabela
 *           Nacionalidade
 * Data: 13/05/2026
 * Autor: Lucas Duarte 
 * Versão: 1.0
 *****************************************************************************/

//Import da biblioteca para gerenciar o banco de dados MySQL no node.JS
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD MySQL
const knexConfig = require('../../database_config_knex/knexFile.js')

//Criar a conexão com o BD MySQL
const knexConex = knex(knexConfig.development)

//Função para inserir dados na tabela de Nacionalidade
const insertNacionalidade = async function(nacionalidade){
    try {

        let sql = `insert into tbl_nacionalidade(
            nome
            )
            values(
                '${nacionalidade.nome}'
                );`

                //Executar o ScriptSQL no banco de dados
                let result = await knexConex.raw(sql)
                if(result)
                    return result
                else
                    return false

    } catch (error) {
        return false
    }
}
//Função para atualizar um Nacionalidade existente na tabela
const updateNacionalidade = async function(nacionalidade){
   try {
        let sql = `update tbl_nacionalidade set
                            nome            = '${nacionalidade.nome}'
                            where id        = ${nacionalidade.id};`
                            
        let result = await knexConex.raw(sql)
        if(result)
            return true
        else
            return false

   } catch (error) {
        return false
   } 
}

//Função para retornar todos os dados da tabela de nacionalidades
const selectAllNacionalidade = async function(){
    try {
        let sql = `select * from tbl_nacionalidade order by id desc`

        let result = await knexConex.raw(sql)
        
        if(Array.isArray(result)){
            return result[0]
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}

//Função para retornar os dados do nacionalidade filtrando pelo ID
const selectByIdNacionalidade = async function(id){
    try {
        let sql = `select * from tbl_nacionalidade where id=${id}`
        let result = await knexConex.raw(sql)

        if(Array.isArray(result)){
            return result[0]
        }else{
            return false
        }

    } catch (error) {
        return false
    }
}

//Função para excluir uma nacionalidade pelo ID
const deleteNacionalidade = async function(id){
    try {
        let sql = `delete from tbl_nacionalidade where id=${id}`
        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false
    } catch (error) {
        return false
    }

}

module.exports = {
    insertNacionalidade,
    updateNacionalidade,
    selectAllNacionalidade,
    selectByIdNacionalidade,
    deleteNacionalidade
}