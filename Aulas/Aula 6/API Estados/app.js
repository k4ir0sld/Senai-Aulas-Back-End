/************************************************************************
 * Objetivo: Arquivo responsável pela criação da API do projeto de Estados e Cidades (Sempre no app)
 * Data: 01/Abril/2026
 * Autor: Lucas Duarte
 * Versão: 1.0
*************************************************************************/

/*  API
    HTTP(Verbos)
     - get      (Solicitar Dados)
     - post     (Solicitar a inserção de um novo item)
     - put      (Solicitar uma alteração)
     - delete   (Solicitar um delete)

     Vamos ultilizar a biblioteca EXPRESS
     Buscar no npm que tem todas as dependencias para ser instaladas no node

     Instalação do EXPRESS  - npm install express --save
        Dependencia responsável pela utilização do protocolo HTTP para 
        criar uma API

     Instalação do CORS     - npm install cors --save
        Dependencia responsável pelas configurações a serem realizadas para 
        a permissão de acesso da API
*/ 

//ESTRUTURA BASE DA API!!!!!

//Import das dependencias para criar a API
const express   = require('express')
const cors      = require('cors')

//Criando um objeto para manipular o express
const app = express()

//Conjunto de permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], //A origem da requisição, podendo ser um IP ou * - TODOS
    methods: 'GET', //São os verbos que serão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['Content-type', 'Autorization'] //São permissões de cabeçalho do CORS 
}

//Configura as permissões da API atraves do CORS 
app.use(cors(corsOptions))

//Response  -> Retornos da API
//Request   -> São chegadas de dados na API

//Import do arquivo de funções
const estadosCidades = require('./modulo/busca_estados.js')
const { estados } = require('./modulo/array_json.js')

//Criando EndPoints para a API
app.get('/v1/senai/estados', function(request, response){

    let estados = estadosCidades.getListaDeEstados()

    response.json(estados)
    response.status(200)
})

app.get('/v1/senai/dados/estado/:uf', function(request, response){

    let sigla = request.params.uf
    let dadosEstado = estadosCidades.getDadosEstado(sigla)

    if(!dadosEstado){
        response.status(404)
        response.json({ erro: 'Estado não encontrado' });
    }else{
        response.json(dadosEstado)
        response.status(200)
    }
    
})

app.get('/v1/senai/cidades', function(request, response){

    let cidades = estadosCidades.getCidades()
    response.json(cidades)
    response.status(200)
})

//Serve para inicializar a API para receber requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requsições ...')
})