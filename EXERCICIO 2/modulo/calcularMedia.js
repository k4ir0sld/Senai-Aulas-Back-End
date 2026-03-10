
/*************************************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de calcular média, validar entradas e realizar a aprovação
 * Data: 27/02/2026
 * Autor: Lucas
 * Versão: 1.0
 *************************************************************************************************/

//Validação de Nomes
const validacaoNotas = function(valor1, valor2, valor3, valor4){
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)

    if(
        nota1 < 0 || nota1 > 100 ||
        nota2 < 0 || nota2 > 100 ||
        nota3 < 0 || nota3 > 100 ||
        nota4 < 0 || nota4 > 100)
        { return 'Nota inválida apenas números ente 0 a 100'
    } else{
        return calcularMedia(nota1, nota2, nota3, nota4)
    }
}


/*
  entr1 = Nome Aluno entr2 = Nome Prof
  entr3 = Sexo Aluno entr4 = Sexo Prof
  entr5 = Nome Curso entr6 = Nome Disciplina
  entr7 = Nota 1     entr8 = Nota 2
  entr9 = Nota 3     entr10 = Nota 4
*/

const validacaoVazio = function(entr1, entr2, entr3, entr4, entr5, entr6, entr7, entr8, entr9, entr10){
    if(
        entr1.trim() === '' ||
        entr2.trim() === '' ||
        entr3.trim() === '' ||
        entr4.trim() === '' ||
        entr5.trim() === '' ||
        entr6.trim() === '' ||
        entr7.trim() === '' ||
        entr8.trim() === '' ||
        entr9.trim() === '' ||
        entr10.trim() === '' 
    ){
        return false
    }
    return true
}

//Validacao do sexo para saida personalizada
const validacaoSexo = function(sexoAluno, sexoProfessor){
    const tipos = {
        1: 'Masculino',
        2: 'Feminino'
    }

    const alunoTraduzido = tipos[sexoAluno]
    const professorTraduzido = tipos[sexoProfessor]

    if(!alunoTraduzido || !professorTraduzido){
        console.log('Número para sexo inválido')
        return false
    }

    return{
        aluno: alunoTraduzido,
        professor: professorTraduzido
    }
}

//Funcao baseada em seta para calcular a media
const calcularMedia = (valor1, valor2, valor3, valor4) => (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4)) / 4

const avaliacaoMedia = function(media){
    if(media >= 70){
        return { status: 'Aprovado' }
    }else if(media < 50){
        return { status: 'Reprovado' }
    }else{
        return { status: 'Exame' }
    }
}

//Validacao de Exame
const validarExame = function(valor){
    let nota = Number(valor)

    if(nota < 0 || nota > 100){
        return false
    }

    return nota
}

//Avaliacao da nota do exame
const avaliacaoExame = function(valorEx){
    if(valorEx >= 60){
        return 'Aprovado'
    }else{
        return 'Reprovado'
    }
}

//Saida personalizadas chamando as oustras funcoes
const exibirResultado = function (nomeAluno, nomeCurso, nomeDisciplina, nomeProfessor, notas, mediaFinal, mediaExame, statusFinal, sexoValidado){
    let palavraAluno = sexoValidado.aluno === 'Masculino' ? 'aluno' : 'aluna'
    let palavraProfessor = sexoValidado.professor === 'Masculino' ? 'Professor' : 'Professora'

    let artigoAluno = sexoValidado.aluno === 'Masculino' ? 'O' : 'A'
    let artigoRelatorio = sexoValidado.aluno === 'Masculino' ? 'do' : 'da'

    let palavraStatus = statusFinal === 'Aprovado'
        ? (sexoValidado.aluno === 'Masculino' ? 'aprovado' : 'aprovada')
        : (sexoValidado.aluno === 'Masculino' ? 'reprovado' : 'reprovada')


    console.log('\n===== RELATÓRIO DO ALUNO =====\n')
    console.log(`Relatório ${artigoRelatorio} ${palavraAluno}:`)
    console.log(`${artigoAluno} ${palavraAluno} ${nomeAluno} foi ${palavraStatus} na disciplina ${nomeDisciplina}.`)
    console.log(`Curso: ${nomeCurso}`)
    console.log(`${palavraProfessor}: ${nomeProfessor}`)
    console.log(`Notas do ${palavraAluno}: ${notas.join(', ')}`)
    console.log(`Média Final: ${mediaFinal.toFixed(2)}`)

    if(mediaExame !== null){
        console.log(`Média final do Exame: ${mediaExame.toFixed(2)}`)
    }
}

module.exports = {
    validacaoNotas,
    validacaoVazio,
    validacaoSexo,
    avaliacaoMedia,
    avaliacaoExame,
    validarExame,
    exibirResultado
}
