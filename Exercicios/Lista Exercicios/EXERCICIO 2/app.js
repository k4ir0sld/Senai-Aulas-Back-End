
/************************************************************************
 * Objetivo: Calcular Media Aluno
 * Data: 27/02/2026
 * Autor: Lucas
 * Versão: 1.0
 * **********************************************************************/

//Import das bibliotecas
const { normalize } = require('path')
const readline = require('readline')
const biblioteca = require('./modulo/calcularMedia')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de todos os dados
entradaDeDados.question('Digite o nome do Aluno: ', function(nome){
    let nomeAluno = nome

    entradaDeDados.question('Digite o nome do Professor: ', function(nome){
        let nomeProfessor = nome

        console.log(' 1) Masculino\n 2) Feminino')
        entradaDeDados.question('Digite o valor correspondente ao sexo do Aluno: ', function(sexo){
                let sexoAluno = sexo

            console.log(' 1) Masculino\n 2) Feminino')
            entradaDeDados.question('Digite o valor correspondente ao sexo do Professor: ', function(sexo){
                let sexoProfessor = sexo
                
                entradaDeDados.question('Digite o nome do curso: ', function (curso){
                    let nomeCurso = curso

                    entradaDeDados.question('Digite o nome da disciplina: ', function (disciplina){
                        let nomeDisciplina = disciplina

                        entradaDeDados.question('Digite a 1° Nota: ', function (n1){
                            let nota1 = n1

                            entradaDeDados.question('Digite a 2° Nota: ', function (n2){
                                let nota2 = n2

                                entradaDeDados.question('Digite a 3° Nota: ', function (n3){
                                    let nota3 = n3

                                    entradaDeDados.question('Digite a 4° Nota: ', function (n4){
                                        let nota4 = n4

                                        //Validar sexo
                                        let sexoValidado = biblioteca.validacaoSexo(sexoAluno, sexoProfessor)

                                        if(!sexoValidado){
                                            entradaDeDados.close()
                                            return
                                        }

                                        //Validar campos vazios
                                        let vazio = biblioteca.validacaoVazio(
                                            nomeAluno,
                                            nomeProfessor,
                                            sexoAluno,
                                            sexoProfessor,
                                            nomeCurso,
                                            nomeDisciplina,
                                            nota1,
                                            nota2,
                                            nota3,
                                            nota4
                                        )

                                        if(vazio === false){
                                            console.log('Existe campo vazio')
                                            entradaDeDados.close()
                                            return
                                        }

                                        //Validar Notas
                                        let media = biblioteca.validacaoNotas(nota1, nota2, nota3, nota4)

                                        if(typeof media === 'string'){
                                            console.log(media)
                                            entradaDeDados.close()
                                            return
                                        }

                                        //Necessidade de exame
                                        let resultado = biblioteca.avaliacaoMedia(media)

                                        if(resultado.status === 'Exame'){

                                            entradaDeDados.question('Digite a nota do exame: ', function(notaExame){

                                                let exameValidado = biblioteca.validarExame(notaExame)

                                                if(!exameValidado){
                                                    console.log('Nota de exame inválida')
                                                    entradaDeDados.close()
                                                    return
                                                }

                                                //Saidas personalizadas
                                                let statusFinal = biblioteca.avaliacaoExame(exameValidado)

                                                biblioteca.exibirResultado(nomeAluno, nomeCurso, nomeDisciplina, nomeProfessor, [nota1, nota2, nota3, nota4, notaExame], media, exameValidado, statusFinal, sexoValidado)
                                                entradaDeDados.close()
                                            })

                                        }else{
                                            biblioteca.exibirResultado(nomeAluno, nomeCurso, nomeDisciplina, nomeProfessor, [nota1, nota2, nota3, nota4], media, null, resultado.status, sexoValidado)
                                            entradaDeDados.close()
                                        }

                                    })
                                })
                            })
                        })
                    })
                })
            })
         })
    })
})
