/************************************************************************
 * Objetivo: Calcular médias escolares
 * Data: 29/01/2026
 * Autor: Lucas
 * Versão: 1.0
 * **********************************************************************/

/*
    Existem 3 formas de criação de variáveis 

        var -> Permite a criação de um espaço na memória do tipo variável.
                Foi utilizado muito em projetos antigos.
                Recomendação: Caso você queira utilizar,
                recomenda-se na criação de variáveis globais
                (Inicio do código)

        let -> Permite a criação de um espaço na memória
                do tipo variável. A utilização deste padrão é
                para a criação dentro de blocos de programação local { }.
                Essa variável nasce e morre dentro deste bloco.
                Não é recomendado a sua utlização em escopo global. 
        
        const -> Permite a criação de um espaço na memória 
                onde não sofrerá alteração durante o código. A const
                pode ser utilizada dentro e fora de bloco { }.
                Dica: Caso você queira diferenciar uma const, um var ou um let
                A const você pode criar com letras MAIUSCULAS. 

*/

const readline = require('readline') 

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada o nome
entradaDeDados.question('Digite o nome do aluno: ', function(nome){

    //Recebe o nome do aluno que foi digitado 
    let nomeAluno = nome 

    //Entrada da nota 1
    entradaDeDados.question('Digite a nota 1: ', function(valor1){
        let nota1 = valor1

        //Entrada da nota 2
        entradaDeDados.question('Digite a nota 2: ', function(valor2){
            let nota2 = valor2

            //Entrada da nota 3
            entradaDeDados.question('Digite a nota 3: ', function(valor3){
                let nota3 = valor3

                //Entrada da nota 4
                entradaDeDados.question('Digite a nota 4: ', function(valor4){
                    let nota4 = valor4

                    /*
                        Operadores de Comparação

                        ==  -> Permite comparar a igualdade de dois conteúdos
                        <   -> Permite comparar valores menores 
                        >   -> Permite comparar valores maiores 
                        <=  -> Permite comparar valores maiores ou iguais
                        >=  -> Permite comparar valores menores ou iguais
                        !=  -> Permite comparar a diferença entre conteúdos 
                        === -> Permite comparar a igualde de conteúdos e a igualdede da tipagem de dados
                        !== -> Permite comparar a igualdade de conteúdos e a igualdade de tipo de dados
                        ==! -> Permite comparar a igualdade de conteúdos e a diferença de tipos de dados
                        !=! -> Permite comparar a diferença de conteúdos e a diferença de tipos de dados
                        
                        Operadores Lógicos

                        E   -> AND  -> &&
                        OU  -> OR   -> ||
                        NÃO -> NOT  -> !

                    */
                    /*
                        Conversões de tipos de dados
                            parseInt() -> Permite converter uma String para número INTEIRO
                            parseFloat() -> Permite converter uma String para número Decimal
                            Number() -> Permite converter uma String para NUMERO (INTEIRO OU DECIMAL)
                            String() -> Permite converter um conteúdo para STRING
                            Boolean() -> Permite converter um conteúdo para BOOLEANO
                            typeof() -> Permite verificar o tipo de dados de uma variável
                            toFixed() -> Permite fixar a qtde de casas decimais 
                    */ 
                    
                    //Validação de entrada vazia
                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' ||  nota4 == ''){
                        console.log('ERRO: É obrigatório o preenchimento de todos os dados!!!')
                    //Validação de numeros entre 0 a 100                        
                    }else if(nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 
                        || nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100){
                        console.log('Erro: Somente é permitido a entrada de valores ente 0 e 100.')
                    //Validação para a entrada de letras nas notas
                    //isNaN() -> Permite validar se o conteudo da 
                            //variavel tem algum caracter ao invés de número
                    //Não se usa a validação de uma função já boolean EX: == true; Não se usa
                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                        console.log('Erro: Não é possivel calcular a média com a entrada de letras nas notas do aluno!!!')
                    }else{
                            let statusAluno
                            //Calculo da Média
                            let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4

                            //Validação do Satus do Aluno
                            if(media <= 50){
                                statusAluno = 'REPROVADO'
                            }else if(media > 50 && media < 70){
                                statusAluno = 'RECUPERÇÃO'
                            }else{
                                statusAluno = 'APROVADO'
                            }

                            //Saída do boletim do aluno
                            console.log(`Aluno(a):${nomeAluno} \nMédia Final: ${media.toFixed(2)} \nStatus do Aluno: ${statusAluno}`)
                    }//Fecha else statusAluno

                })//Fecha a nota 4
            })//Fecha a nota 3
        })//Fecha a nota 2
    })//Fecha a nota 1
})//Fecha o nome