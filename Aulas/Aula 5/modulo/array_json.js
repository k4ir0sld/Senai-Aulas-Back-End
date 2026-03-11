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
const listaDeNome     = ['José', 'Maria', 'João', 'André', 'Alex'] //Eu consigo dentro do mesmo Array guardar tipos de dados diferentes
const listaDeClientes = []
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

    //Permite adicionar novos valores no Array, sempre no final da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'André da Silva', 'Carlos da Silva')

    console.log(listaDeFornecedores)
}
//exibirDados()
manipularDados()