/*****************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD no Banco de Dados MySQL na tabela
 *           Personagem
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

//Função para inserir dados na tabela de personagem
const insertPersonagem = async function(personagem){
    try {

        let sql = `insert into tbl_personagem(
			nome
            )
			values(
			    '${personagem.nome}'
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
//Função para atualizar um Personagem existente na tabela
const updatePersonagem = async function(personagem){
   try {
        let sql = `update tbl_personagem set
                            nome            = '${personagem.nome}'
                            where id        = ${personagem.id};`
                            
        let result = await knexConex.raw(sql)
        if(result)
            return true
        else
            return false

   } catch (error) {
        return false
   } 
}

//Função para retornar todos os dados da tabela de personagens
const selectAllPersonagem = async function(){
    try {
        let sql = `select * from tbl_personagem order by id desc`

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

//Função para retornar os dados do personagem filtrando pelo ID
const selectByIdPersonagem = async function(id){
    try {
        let sql = `select * from tbl_personagem where id=${id}`
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

//Função para excluir um personagem pelo ID
const deletePersonagem = async function(id){
    try {
        let sql = `delete from tbl_personagem where id=${id}`
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
    insertPersonagem,
    updatePersonagem,
    selectAllPersonagem,
    selectByIdPersonagem,
    deletePersonagem
}