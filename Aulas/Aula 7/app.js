//Import das dependencias para criar a API
const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Import das CONTROLLERS do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')
const controllerPersonagem = require('./controller/personagem/controller_personagem.js')
const controllerNacionalidade = require('./controller/nacionalidade/controller_nacionalidade.js')
const controllerSexo = require('./controller/sexo/controller_sexo.js')
const controllerClassificacao = require('./controller/classificacao/controller_classificacao.js')
const controllerGenero = require('./controller/genero/controller_genero.js')
const controllerAtividade = require('./controller/atividade/atividade_controller.js')

//Criando um objeto para manipular dados do body da API em formato JSON
const bodyParserJSON = bodyParser.json()

//Criando um objeto para manipular o express
const app = express()

//Conjunto de permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], //A origem da requisição, podendo ser um IP ou * - TODOS
    methods: 'GET, POST, PUT, DELETE, OPTIONS',  //São os verbos que serão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['Content-type', 'Autorization'] //São permissões de cabeçalho do CORS 
}

//Configura as permissões da API atraves do CORS 
app.use(cors(corsOptions))

//ENDPOINTS - tbl_filme
//Os endpoints devem seguir o mesmo nome se diferenciando apenas pelo verbo

//Endpoint para Inserir um novo Filme no BD
app.post('/v1/senai/locadora/filme', bodyParserJSON, async function(request, response){

    //Recebe o conteúdo dentro do body da requisição
    let dados = request.body

    //Recebe o content type da requisição, para validar se é um JSON
    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirNovoFilme(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Listar todos os Filmes do BD
app.get('/v1/senai/locadora/filme', async function(request, response){
    let result = await controllerFilme.listarFilme()

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Buscar Filme pelo ID
app.get('/v1/senai/locadora/filme/:id', async function(request, response){
    //Vamos ultilizar a busca via parametro pois a busca é um identificador unico
    //Só vem via parametro o ID !!!

    let id = request.params.id

    let result = await controllerFilme.buscarFilme(id)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Atualizar um Filme pelo ID
app.put('/v1/senai/locadora/filme/:id', bodyParserJSON, async function(request, response){
    //Recebe o content type da requisição
    let contentType = request.headers['content-type']
    //Recebe o ID do registro a ser atualizado
    let id = request.params.id
    //Recebe os dados enviados no corpo da requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminha os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerFilme.atualizarFilme(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)

})

//Endpoint pata Deletar um Filme pelo ID
app.delete('/v1/senai/locadora/filme/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerFilme.excluirFilme(id)

    response.status(result.status_code)
    response.json(result)
})


//ENDPOINTS - tbl_genero
//Os endpoints devem seguir o mesmo nome se diferenciando apenas pelo verbo

//Endpoint para Inserir um novo Personagem no BD
app.post('/v1/senai/locadora/personagem', bodyParserJSON, async function(request, response){
    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerPersonagem.inserirNovoPersonagem(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Listar todos os Personagens do BD
app.get('/v1/senai/locadora/personagem', async function(request, response){
    let result = await controllerPersonagem.listarPersonagem()

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Buscar Personagem pelo ID
app.get('/v1/senai/locadora/personagem/:id', async function(request, response){
    let id = request.params.id

    let result = await controllergenero.buscargenero(id)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Atualizar um Personagem pelo ID
app.put('/v1/senai/locadora/personagem/:id', bodyParserJSON, async function(request, response){
    let contentType = request.headers['content-type']
    let id = request.params.id
    let dados = request.body

    let result = await controllerPersonagem.atualizarPersonagem(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)

})

//Endpoint pata Deletar um Personagem pelo ID
app.delete('/v1/senai/locadora/personagem/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerPersonagem.excluirPersonagem(id)

    response.status(result.status_code)
    response.json(result)
})


//ENDPOINTS - tbl_nacionalidade
//Os endpoints devem seguir o mesmo nome se diferenciando apenas pelo verbo

//Endpoint para Inserir uma nova Nacionalidade no BD
app.post('/v1/senai/locadora/nacionalidade', bodyParserJSON, async function(request, response){
    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerNacionalidade.inserirNovaNacionalidade(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Listar todas as Nacionalidades do BD
app.get('/v1/senai/locadora/nacionalidade', async function(request, response){
    let result = await controllerNacionalidade.listarNacionalidade()

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Buscar Nacionalidade pelo ID
app.get('/v1/senai/locadora/nacionalidade/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerNacionalidade.buscarNacionalidade(id)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Atualizar uma Nacionalidade pelo ID
app.put('/v1/senai/locadora/nacionalidade/:id', bodyParserJSON, async function(request, response){
    let contentType = request.headers['content-type']
    let id = request.params.id
    let dados = request.body

    let result = await controllerNacionalidade.atualizarNacionalidade(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)

})

//Endpoint pata Deletar uma Nacionalidade pelo ID
app.delete('/v1/senai/locadora/nacionalidade/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerNacionalidade.excluirNacionalidade(id)

    response.status(result.status_code)
    response.json(result)
})


//ENDPOINTS - tbl_sexo
//Os endpoints devem seguir o mesmo nome se diferenciando apenas pelo verbo

//Endpoint para Inserir um novo Sexo no BD
app.post('/v1/senai/locadora/sexo', bodyParserJSON, async function(request, response){
    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerSexo.inserirNovoSexo(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Listar todos os Sexos do BD
app.get('/v1/senai/locadora/sexo', async function(request, response){
    let result = await controllerSexo.listarSexo()

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Buscar Sexo pelo ID
app.get('/v1/senai/locadora/sexo/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerSexo.buscarSexo(id)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Atualizar um Sexo pelo ID
app.put('/v1/senai/locadora/sexo/:id', bodyParserJSON, async function(request, response){
    let contentType = request.headers['content-type']
    let id = request.params.id
    let dados = request.body

    let result = await controllerSexo.atualizarSexo(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)

})

//Endpoint pata Deletar um Sexo pelo ID
app.delete('/v1/senai/locadora/sexo/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerSexo.excluirSexo(id)

    response.status(result.status_code)
    response.json(result)
})

//ENDPOINTS - tbl_classificacao
//Os endpoints devem seguir o mesmo nome se diferenciando apenas pelo verbo

//Endpoint para Inserir uma Classificacao
app.post('/v1/senai/locadora/classificacao', bodyParserJSON, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição
    let dados = request.body
    
    //Recebe o content type da requisição, para validar se é um JSON
    let contentType = request.headers['content-type']

    let result = await controllerClassificacao.inserirNovoClassificacao(dados, contentType)
   
    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Listar todas as Classificações
app.get('/v1/senai/locadora/classificacao', async function(request, response){
    let result = await controllerClassificacao.listarClassificacao()

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Buscar uma Classificação pelo ID
app.get('/v1/senai/locadora/classificacao/:id', async function(request, response){
    //Recebe o ID via parametro
    let id = request.params.id

    let result = await controllerClassificacao.buscarClassificacao(id)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Atualiar uma Classificação pelo ID
app.put('/v1/senai/locadora/classificacao/:id', bodyParserJSON, async function(request, response){
    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']
    //Recebe o ID do registro a ser atualizado
    let id = request.params.id
    //Recebe os dados enviados no corpo da requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminha os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerClassificacao.atualizarClassificacao(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Deletar uma Classificação pelo ID
app.delete('/v1/senai/locadora/classificacao/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerClassificacao.excluirClassificacao(id)

    response.status(result.status_code)
    response.json(result)
})

//ENDPOINTS - tbl_genero
//Os endpoints devem seguir o mesmo nome se diferenciando apenas pelo verbo

//Endpoint para Inserir um novo genero no BD
app.post('/v1/senai/locadora/genero', bodyParserJSON, async function(request, response){
    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerGenero.inserirNovoGenero(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Listar todos os generos do BD
app.get('/v1/senai/locadora/genero', async function(request, response){
    let result = await controllerGenero.listarGenero()

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Buscar genero pelo ID
app.get('/v1/senai/locadora/genero/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerGenero.buscarGenero(id)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Atualizar um genero pelo ID
app.put('/v1/senai/locadora/genero/:id', bodyParserJSON, async function(request, response){
    let contentType = request.headers['content-type']
    let id = request.params.id
    let dados = request.body

    let result = await controllerGenero.atualizarGenero(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)

})

//Endpoint pata Deletar um genero pelo ID
app.delete('/v1/senai/locadora/genero/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerGenero.excluirGenero(id)

    response.status(result.status_code)
    response.json(result)
})

//ENDPOINTS - tbl_atividade
//Os endpoints devem seguir o mesmo nome se diferenciando apenas pelo verbo

//Endpoint para Inserir uma nova Atividade no BD
app.post('/v1/senai/locadora/atividade', bodyParserJSON, async function(request, response){
    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerAtividade.inserirNovaAtividade(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Listar todas as Atividades do BD
app.get('/v1/senai/locadora/atividade', async function(request, response){
    let result = await controllerAtividade.listarAtividade()

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Buscar Atividade pelo ID
app.get('/v1/senai/locadora/atividade/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerAtividade.buscarAtividade(id)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Atualizar uma Atividade pelo ID
app.put('/v1/senai/locadora/atividade/:id', bodyParserJSON, async function(request, response){
    let contentType = request.headers['content-type']
    let id = request.params.id
    let dados = request.body

    let result = await controllerAtividade.atualizarAtividade(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)

})

//Endpoint pata Deletar uma Atividade pelo ID
app.delete('/v1/senai/locadora/atividade/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerAtividade.excluirAtividade(id)

    response.status(result.status_code)
    response.json(result)
})


app.listen(3000, function(){
    console.log('API funcionando e aguardando novas requsições ...')
})