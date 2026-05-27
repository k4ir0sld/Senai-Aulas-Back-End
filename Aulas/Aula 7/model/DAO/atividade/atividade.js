/******************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD no Banco de dados MySQL na tabela
 *           atividade
 * Data: 27/05/2026
 * Autor: Lucas Duarte
 * Versão: 1.0
 ******************************************************************************/

//Import da bibliioteca para gerenciar o banco de dados Mysql no node.JS
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD Mysql
const knexConfig = require('../../database_config_knex/knexFile.js')

//Criar a conexão com o BD Mysql
const knexConex = knex(knexConfig.development)

//Função para inserir dados na tabela de atividade
const insertAtividade = async function(atividade){
    try {

        let sql = `insert into tbl_atividade (
                            atividade
                            )
                    values (
                            '${atividade.atividade}'
                            );`

        //Executar o ScriptSQL no banco de dados                        
        let result = await knexConex.raw(sql)
    

        if(result)
            return result[0].insertId //Retorno o ID gerado no BD
        else
            return false

    } catch (error) {
        //console.log(error)
        return false
    }
}

//Função para atualizar uma atividade existente na tabela
const updateAtividade = async function(atividade){
    try {
        //Script para atualizar os dados no BD
        let sql = `update tbl_atividade set 
                        atividade = '${atividade.atividade}'                    
                        where id = ${atividade.id}`

        //Executa o script SQL no BD
        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false
    } catch (error) {
        return false
    }
}

//Função para retornar todos os dados da tabela de atividade
const selectAllAtividade = async function(){
    try {
        //Script para retornar todos as atividades
        let sql = `select * from tbl_atividade order by id desc`

        //Executa no banco de dados o script SQL para retornar as atividades
        let result = await knexConex.raw(sql)
        
        //Validação para verificar se o retorno no BD é um Array
        //Se o scriptSQL der erro, o banco não devolve um array
        if(Array.isArray(result)){
            return result[0]
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}

//Função para retornar os dados da atividade filtrando pelo ID
const selectByIdAtividade = async function(id){
    try {
        let sql = `select * from tbl_atividade where id=${id}`

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

//Função para excluir uma atividade pelo ID
const deleteAtividade = async function(id){
    try {
        let sql = `delete from tbl_atividade where id=${id}`

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
    insertAtividade,
    updateAtividade,
    selectAllAtividade,
    selectByIdAtividade,
    deleteAtividade
}