// Promise é um objeto que representa o sucesso ou falha de uma tarefa, nós instanciamos o objeto e passamos uma função com dois parâmetros: "resolve" e "reject"
// O "resolve" nós chamamos quando a tarefa em específico é executada com sucesso, já o "reject" é o oposto
const temHamburger = new Promise((resolve, reject) => {
    const temIngrediente = true;
    // simula uma tarefa assíncrona
    setTimeout(() => {
        if (temIngrediente == true) {
            resolve(() => {
                console.log("Tem hamburger :)");
            });
        } else {
            reject("Não tem hamburger :(");
        }
    }, 2000);
});

// para utilizar a Promise, chamamos a instância e utilizamos os métodos .then e .catch, que são métodos que usamos para "reagir" aos casos de sucesso ou falha, respectivamente.
temHamburger
    .then((sucesso)=>{
        sucesso();
    })
    .catch((e)=>{
        console.log(e);
    })
    .finally(()=>{
        console.log("Pedido finalizado");
    });