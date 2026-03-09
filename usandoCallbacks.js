// essa função callback que será executada quando a função "baixarFilme" for concluída
function avisarConclusao(nomeFilme) {
    console.log(`Pronto! O filme "${nomeFilme}" foi baixado.`);
}
// essa função simula um processo demorado, ela recebe uma string e uma função como parâmetros
function baixarFilme(nomeDoFilme, callback) {
    setTimeout(() => {
        // depois de 3 segundos, ele vai chamar a função que for passada como parâmetro quando a função "baixarFilme" for chamada
        callback(nomeDoFilme);
    }, 3000);
}

// aqui, chamamos a função baixarFilme, passando como parâmetros uma string e uma função que queremos que seja executada depois que a função que estamos chamando for concluída
baixarFilme("Velozes e Furiosos 7", avisarConclusao);
baixarFilme("Velozes e Furiosos 8", avisarConclusao);
baixarFilme("Velozes e Furiosos 9", avisarConclusao);
// apenas para ilustrar que o código continua rodando, mesmo com aquela função executando
console.log("Eu continuo rodando")

// o exemplo acima exibe os nomes dos três filmes ao mesmo tempo após o tempo de 3 segundos, caso quiséssemos baixar um filme após o outro, cairíamos no que chamamos de "callback hell", motivo pelo qual as Promises e o Async/Await foram criados
baixarFilme("Máquina Mortífera", (nomeFilme) => {
    console.log(`Filme ${nomeFilme} baixado!`);
    
    baixarFilme("Máquina Mortífera 2", (nomeFilme) => {
        console.log(`Filme ${nomeFilme} baixado!`);
        
        baixarFilme("Máquina Mortífera 3", (nomeFilme) => {
            console.log(`Filme ${nomeFilme} baixado!`);
        })
    })
})