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

//Retorna dados dos estados filtrando pelo uf 
app.get('/v1/senai/dados/estado/:uf', function(request, response){
    
    let sigla = request.params.uf
    let dadosEstado = estadosCidades.getDadosEstado(sigla)
    
    if(!dadosEstado){
        response.status(404) //O response de status deve vir sempre primeiro!!!
        response.json({"message": "O estado informado não foi encontrado!" });
    }else{
        response.status(200)
        response.json(dadosEstado)
    }
    
})

//Retorna dados da capital filtrando pelo uf
app.get('/v1/senai/capital/estado/:uf', function(request, response){

    let sigla = request.params.uf
    let dadosCapital = estadosCidades.getCapitalEstado(sigla)

    if(!dadosCapital){
        response.status(404)
        response.json({"message": "A uf informada não foi encontrada!" });
    }else{
        response.status(200)
        response.json(dadosCapital)
    }
})

//Retorna dados dos estados que forma capitais do Brasil
app.get('/v1/senai/estados/capital/brasil', function(request, response){
    
    let capitalPais = estadosCidades.getCapitalPais()

    response.status(200)
    response.json(capitalPais)
})

//Retorna dados dos estados filtrando pela região
app.get('/v1/senai/estados/regiao/:regiao', function(request, response){
    
    let nomeRegiao = request.params.regiao
    let estadosRegiao = estadosCidades.getEstadosRegiao(nomeRegiao)

    if(!estadosRegiao){
        response.status(404)
        response.json({"message": "A região informada não foi encontrada!"})
    }else{
        response.status(200)
        response.json(estadosRegiao)
    }
})

//Retorna dados das cidades filtrando pelo uf 
app.get('/v1/senai/cidades/estado/:uf', function(request, response){
    
    let sigla = request.params.uf
    let cidades = estadosCidades.getCidades(sigla)

    if(!cidades){
        response.status(404)
        response.json({"message": "A uf informada não existe"})
    }else{
        response.status(200)
        response.json(cidades)
    }
})

//Retorna dados das cidades filtrando pela uf
app.get('/v1/senai/estados', function(request, response){

    let estados = estadosCidades.getListaDeEstados()

    response.json(estados)
    response.status(200)
})

app.get('/v1/senai/help', function(request, response){

    let docAPI = {
        "API - description": "API para manipular dados de Estados e Cidades",
        "Date": "2026-04-02",
        "Development": "Lucas Duarte",
        "Version": "1.0",
        "Endpoints": [
            {
                "id": 1,
                "Route 1": "/v1/senai/estados",
                "Description": "Retorna a lista de todos os estados" 
            },
            {
                "id": 2,
                "Route 2": "/v1/senai/dados/estado/sp",
                "Description": "Retorna os dados do estado filtrando pela sigla do estado" 
            },
            {
                "id": 3,
                "Route 3": "/v1/senai/capital/estado/rj",
                "Description": "Retorna os dados da capital filtrando pela sigla do estado" 
            },
            {
                "id": 4,
                "Route 4": "/v1/senai/estados/capital/brasil",
                "Description": "Retorna todos os estados que formaram capital do Brasil" 
            },
            {
                "id": 5,
                "Route 5": "/v1/senai/estados/regiao/nordeste",
                "Description": "Retorna todos os estados referente a uma região" 
            },
            {
                "id": 6,
                "Route 6": "/v1/senai/cidades/estado/ac",
                "Description": "Retorna todas as cidades filtrando pela sigla do estado" 
            }
        ]
    }

    response.status(200)
    response.json(docAPI)
})

//Serve para inicializar a API para receber requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requsições ...')
})