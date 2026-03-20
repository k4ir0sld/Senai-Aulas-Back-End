/************************************************************************
 * Objetivo: Manipular dados utilizando Array e JSON
 * Data: 05/03/2026
 * Autor: Marcel
 * Versão: 1.0
*************************************************************************/

/*
    [ ] -> Representa um objeto do tipo ARRAY
    { } -> Representa um objeto do tipo JSON

    Array -> É um objeto na memória que permite trabalhar com vários valores 
             em um único objeto

             let nome  = 'José'
             let nome2 = 'Maria'
             let nome3 = 'João'

                       indice    0        1        2      -> Posição deles dentro do Array 
             let nome    =    ['José', 'Maria', 'João']


    JSON -> É um objeto na memória que permite trabalhar com CHAVE e VALOR

            let nome       = 'José'
            let telefone   = '123456789'
            let email      = 'jose@gmail.com'

            let cliente = { "nome"    : "José",
                            "telefone": "123456789",             -> Ter variaveis do mesmo seguimento
                            "email"   : "jose@gmail.com"            em um objeto separado na memória
                            }
*/

//Formas de criar um ARRAY 
const listaDeNome         = ['José', 'Maria', 'João', 'André', 'Alex', 'Carlos', 'Ana', 'Bruna', 'Jake', 'Ana', 'Ana da Silva'] //Eu consigo dentro do mesmo Array guardar tipos de dados diferentes
const listaDeClientes     = []
const listaDeFornecedores = []

const exibirDados = function  (params) {
    //Exibe o objeto Array e seu conteúdo
    console.log(listaDeNome)

    //Exibe o objeto Array em formato de tabela com seus indices
    console.table(listaDeNome)

    //Exibe apenas o valor do respectivo indice do array
    console.log(listaDeNome[2])

    //Retorna o tipo de dados de um indice do array
    console.log(typeof(listaDeNome[4]))

    console.log(`O nome do cliente é : ${listaDeNome[0]}`)
    console.log(`O nome do cliente é : ${listaDeNome[1]}`)
    console.log(`O nome do cliente é : ${listaDeNome[2]}`)
    console.log(`O nome do cliente é : ${listaDeNome[3]}`)
    console.log(`O nome do cliente é : ${listaDeNome[4]}`)

    //Estruturas de Repetição

    //While
    console.log('____________________While____________________')
    let cont = 0
    while(cont <= 4){
        console.log(`O nome do cliente é : ${listaDeNome[cont]}`)
        cont++
    }

    //For
    console.log('____________________For____________________')
    for(let contador = 0; contador < listaDeNome.length; contador++){
        console.log(`O nome do cliente é : ${listaDeNome[contador]}`)
    }

    //For Each
    //Retorna o conteúdo de cada elemento através de um callback
    console.log('____________________For Each____________________') //Para cada
    listaDeNome.forEach(function(cliente){
        console.log(`O nome do cliente é : ${cliente}`)
    })

    //For In
    //Retorna o indice do elemento, e será preciso colocar dentro do objeto Array 
    //Ex: listaDeNome[item]
    //Praticamente igual ao FOR e WHILE
    console.log('____________________For In____________________') 
    for(item in listaDeNome){
        console.log(`O nome do cliente é : ${listaDeNome[item]}`)
    } 

    //For Of
    //Percorre o Array e retorna somente o conteúdo de cada indice,
    //sendo muito parecido com o For Each
    console.log('____________________For Of____________________')
    for (cliente of listaDeNome) {
        console.log(`O nome do cliente é: ${cliente}`)
    }

    console.log(listaDeNome.length)
}

const manipularDados = function(){
    //Adicionando valores novos no Array através de indices
    listaDeClientes[0] = 'José da Silva'
    listaDeClientes[1] = 'Maria da Silva'
    listaDeClientes[2] = 'João da Silva'
    listaDeClientes[4] = 'Alex da Silva'

    console.log(listaDeClientes)

    //Permite adicionar novos valores no Array, sempre no FINAL da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'André da Silva', 'Carlos da Silva')

    console.table(listaDeFornecedores)

    //Permite adicionar novos valores no Array, sempre no INICIO da lista, empurrando os outros para baixo
    listaDeFornecedores.unshift('Ana Carolina')
    console.table(listaDeFornecedores)

    //Permite remover elementos do FINAL da lista
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    //Permite remover elementos do INICIO da lista
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

    //Splice () -> Permite remover um elemento baseado no indice
                    //splice(indice, qtde de elementos que vc deseja apagar)
    listaDeFornecedores.splice(2,1)
    console.table(listaDeFornecedores)

    //Splice () -> Permite adicionar um elemento baseado no indice
                //splice(indice, qtde de elementos que vc deseja apagar, 'Conteúdo que vc deseja adicionar')
                //ele vai ser adicionado no indice escrito no inicio
    listaDeFornecedores.splice(2,0,'Carlos da Silva')
    console.table(listaDeFornecedores)

    listaDeFornecedores[1] = 'Novo conreudo'
    console.table(listaDeFornecedores)
}

const removerItem = function(nome){
    
    //Retorna o indice de um elemneto fazendo a busca pelo conteudo
    //Se o indexof não encontrar o conteudo ele devolve -1
    let indice = listaDeNome.indexOf(nome)
    if(indice != -1){
        listaDeNome.splice(indice, 1)
        return true
    }else{
        return false
    }

    // for(indice in listaDeNome){
    //     if(listaDeNome[indice] == nome){
    //         listaDeNome.splice(indice, 1)
    //     }
    // }

    

}

const verificarItem = function(nome){
    //verifica a existencia de um conteudo dentro de uma lista (true/false)
    return listaDeNome.includes(nome)
}

const quantidadeDeItens = function(nome){
    let cont = 0
    listaDeNome.forEach(function(item){
        if(String(item).toUpperCase() == String(nome).toUpperCase())
            cont++
    })

    return cont
}

//JSON
const criandoDadosJSON = function(){
    let aluno = {"nome": "José", 
                "ra": 123456, 
                "telefone": "40028922", 
                "email": "jose@gmail.com"
                }      //Recomendasse que os atributos do JSON seja escrito em minúsculo e de preferencia entre aspas duplas

    //Exibindo o objeto completo do JSON
    console.log(aluno)
    console.table(aluno)

    //Exibindo apenas um atributo do JSON
    console.log(aluno.nome)
    console.log(aluno.email)

    //Adiciona um novo atrinuto no JSON
    aluno.sexo = 'Masculino'
    console.log(aluno)

    //Remove um atributo no JSON
    delete aluno.telefone
    console.log(aluno)
}

const cadastroDeProdutos = function(){
   let cores = [
        {"id": 1, "cor": "Branco"}, //Indice 0
        {"id": 2, "cor": "Preto"},  //Indice 1
        {"id": 3, "cor": "Azul"},   //Indice 2
        {"id": 4, "cor": "Rosa"},   //Indice 3
        {"id": 5, "cor": "Cinza"}   //Indice 4
   ]

   let marcas = [
        {"id": 1, "marca": "LG",            "telefone": "123456789", "email": "lg@lg.com..br"},
        {"id": 2, "marca": "Dell",          "telefone": "123445648", "email": "dell@gmail.com.com..br"},
        {"id": 3, "marca": "Lenovo",        "telefone": "123446348", "email": "lenovo@gmail.com.com..br"},
        {"id": 4, "marca": "Apple",         "telefone": "123493648", "email": "apple@gmail.com.com..br"},
        {"id": 5, "marca": "Rayzer",        "telefone": "109445648", "email": "rayzer@gmail.com.com..br"},
        {"id": 6, "marca": "Logitech",      "telefone": "123445645", "email": "log@gmail.com.com..br"},
        {"id": 7, "marca": "Multilaser",    "telefone": "123445609", "email": "mtlaser@gmail.com.com..br"}
   ]

   let produtos = [
        {   "id": 1, 
            "nome": "Monitor", 
            "descricao": "27 polegadas",
            "marca": [
                marcas[1].marca
            ],
            "qtde": 20,
            "cor": [
                cores[4],
                cores[1]
            ],
            "valor": 800.50
        },

        {   "id": 2,
            "nome": "Teclado",   
            "descricao": "Teclado mecânico RGB",
            "marca": [
                marcas[5].marca
            ],
            "qtde": 200,
            "cor": cores,
            "valor": 150
        },

        {   "id": 3,
            "nome": "Mouse",   
            "descricao": "Mouse sem fio",
            "marca": [
                marcas[0].marca,
                marcas[1].marca,
                marcas[5].marca
            ],
            "qtde": 500,
            "cor": [
                cores[0],
                cores[1],
                cores[4]
            ],
            "valor": 80
        }

   ]

      // Exibe o array de produtos formatado como tabela no console
    // Facilita a visualização de todos os campos e valores
    //console.table(produtos)

    // Percorre o array de cores do primeiro produto (índice 0)
    // Para cada cor, exibe uma mensagem com o nome da cor no console

    //repetição dentro da outra

    //Percorre o objeto de produto, qtde e valor para trazer dados de cada array
    /*produtos.forEach(function(itemProduto){
    console.log(`Produto: ${itemProduto.nome}`)
    console.log(`Quantidade: ${itemProduto.qtde}`)
    console.log(`Valor: ${itemProduto.valor}`)

        //Percorre o objeto de marca dentro de cada produto para trazer as marcas
        itemProduto.marca.forEach(function(marca){
        console.log( Marca: ${marca}`)
        })

        //Percorre o objeto de cor dentro de cada produto, para trazer as cores
        itemProduto.cor.forEach(function(cor){
        console.log(`Cor: ${cor.nomecor}`)

        })
    })*/


    //Pesquisando um produto pelo NOME
    /*console.log("Pesuisando produtos pelo Nome.....")
    let nome = "mouse"

    produtos.forEach(function(itemProduto){
    if(String(itemProduto.nome).toUpperCase() == String(nome).toUpperCase())
        console.log(itemProduto)
    })*/

    //Pesquisanod plea cor
    console.log("Pesquisando produto pela cor.......")

    let corBusca = "Cinza"
    let status = false
    
    produtos.forEach(function(produto){
        produto.cor.forEach(function(itemCor){
            if (itemCor.cor.toUpperCase() === corBusca.toUpperCase()) {
                console.log(produto)
                status = true
            }
        })
    })
    
    if(!status)
        console.log('Item pesquisado não foi encontrado.......')

}
cadastroDeProdutos()

//criandodadosJSON()

    //console.log(cores)
    //console.table(cores)

    //console.log(cores[2].nome)

    // console.log(produtos)
    // console.log(produtos[0].cor)
    // console.log(produtos[0].cor[1].cor) //Saida especificando a cor

    // console.table(produtos)

    //Listar as cores
    // produtos[0].cor.forEach(function(nomeCor){
    //     console.log('A cor do produto é:' + nomeCor.cor)
    // })



//exibirDados()
//manipularDados()
//console.table(listaDeNome)

// let resposta = removerItem("Maria")

// if(resposta)
//     console.log('Item removido com sucesso')
// else
//     console.log('Item não encontrado')

// console.table(listaDeNome)

//console.log(verificarItem('Maria'))

//console.log(quantidadeDeItens('Ana da Silva'))

//criandoDadosJSON()

