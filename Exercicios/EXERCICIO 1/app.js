var readline = require("readline")

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Por favor digitar o seu nome: ", function(nomeUsuario){
    entradaDeDados.question("Favor digite um valor de 1 a 10: ", function(valor1){
        entradaDeDados.question("Favor digite mais um valor: ", function(valor2){
            entradaDeDados.question("Favor digite mais um valor: ", function(valor3){
                var somaDados = (Number(valor1) + Number(valor2) + Number(valor3))
                console.log(`O nome do usuario é ${nomeUsuario} e a soma dos valores é ${somaDados} `)
            })
        })
    })

})