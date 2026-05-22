/******************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD no Banco de dados MySQL na tabela
 *           de relação entre FIlmes e Genero
 * Data: 22/05/2026
 * Autor: Lucas Duarte
 * Versão: 1.0
 ******************************************************************************/

//Import da bibliioteca para gerenciar o banco de dados Mysql no node.JS
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD Mysql
const knexConfig = require('../../database_config_knex/knexFile.js')

//Criar a conexão com o BD Mysql
const knexConex = knex(knexConfig.development)

//Função para inserir dados na tabela de genero
const insertGeneroFilme = async function(generoFilme){
    try {

        let sql = `insert into tbl_genero_filme (
                            id_filme,
                            id_genero
                            )
                    values (
                            '${generoFilme.id_filme}',
                            '${generoFilme.id_genero}'
                            );`

        //Executar o ScriptSQL no banco de dados                        
        let result = await knexConex.raw(sql)
    

        if(result)
            return result[0].insertId //Retorno o ID gerado no BD
        else
            return false

    } catch (error) {
        console.log(error)
        return false
    }
}

//Função para atualizar um genero existente na tabela
const updateGeneroFilme = async function(generoFilme){
    try {
        //Script para atualizar os dados no BD
        let sql = `update tbl_genero_filme set 
                        id_filme =  ${generoFilme.id_filme},                    
                        id_genero = ${generoFilme.id_genero}

                    where id = ${generoFilme.id}`

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

//Função para retornar todos os dados da tabela de genero
const selectAllGeneroFilme = async function(){
    try {
        //Script para retornar todos os generos
        let sql = `select * from tbl_genero_filme order by id desc`

        //Executa no banco de dados o script SQL para retornar os generos
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

//Função para retornar os dados do genero filtrando pelo ID
const selectByIdGeneroFilme = async function(id){
    try {
        let sql = `select * from tbl_genero_filme where id=${id}`

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

//Função para retornar os dados dos generos filtrando pelo ID do filme
//A pessoa solicita o genero e eu devolvo os filmes
const selectFilmesByIdGenero = async function(idGenero){
    try {
        let sql = `select tbl_filme.*
                        from tbl_filme
                            inner join tbl_genero_filme 
                                on tbl_filme.id = tbl_genero_filme.id_filme
                            inner join tbl_genero
                                on tbl_genero.id = tbl_genero_filme.id_genero
                    where tbl_genero.id=${idGenero}`

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

//Função para retornar os dados dos generos filtrando pelo ID do filme
//A pessoa solicita o filme e eu devolvo os dados do genero
const selectGenerosByIdFilmes = async function(idFilme){
    try {
        let sql = `select tbl_genero.*
                        from tbl_filme
                            inner join tbl_genero_filme 
                                on tbl_filme.id = tbl_genero_filme.id_filme
                            inner join tbl_genero
                                on tbl_genero.id = tbl_genero_filme.id_genero
                    where tbl_filme.id=${idFilme}`

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

//Função para excluir um genero pelo ID
const deleteGeneroFilme = async function(id){
    try {
        let sql = `delete from tbl_genero_filme where id=${id}`

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
    insertGeneroFilme,
    updateGeneroFilme,
    selectAllGeneroFilme,
    selectByIdGeneroFilme,
    selectFilmesByIdGenero,
    selectGenerosByIdFilmes,
    deleteGeneroFilme
}