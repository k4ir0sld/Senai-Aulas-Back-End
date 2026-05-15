/*****************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD no Banco de Dados MySQL na tabela
 *           Sexo
 * Data: 15/05/2026
 * Autor: Lucas Duarte 
 * Versão: 1.0
 *****************************************************************************/

//Import da biblioteca para gerenciar o banco de dados MySQL no node.JS
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD MySQL
const knexConfig = require('../../database_config_knex/knexFile.js')

//Criar a conexão com o BD MySQL
const knexConex = knex(knexConfig.development)

//Função para inserir dados na tabela de sexo
const insertSexo = async function(sexo){
    try {

        let sql = ` insert into tbl_sexo
                    (sigla, descricao)
	            values 	
                    ('${sexo.sigla}', '${sexo.descricao}');`

                //Executar o ScriptSQL no banco de dados
                let result = await knexConex.raw(sql)
                if(result)
                    return result
                else
                    return false

    } catch (error) {
        console.log(error)
        return false
    }
}

//Função para atualizar um sexo existente na tabela
const updateSexo = async function(sexo){
   try {
        let sql = `update tbl_sexo set
                            sigla           = '${sexo.sigla}',
                            descricao       = '${sexo.descricao}'
                            where id        = '${sexo.id}';`
                            
        let result = await knexConex.raw(sql)
        if(result)
            return true
        else
            return false

   } catch (error) {
    console.log(error)
        return false
   } 
}

//Função para retornar todos os dados da tabela de sexo
const selectAllSexo = async function(){
    try {
        let sql = `select * from tbl_sexo order by id desc`

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

//Função para retornar os dados do sexo filtrando pelo ID
const selectByIdSexo = async function(id){
    try {
        let sql = `select * from tbl_sexo where id=${id}`
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

//Função para excluir um sexo pelo ID
const deleteSexo = async function(id){
    try {
        let sql = `delete from tbl_sexo where id=${id}`
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
    insertSexo,
    updateSexo,
    selectAllSexo,
    selectAllSexo,
    selectByIdSexo,
    deleteSexo
}

