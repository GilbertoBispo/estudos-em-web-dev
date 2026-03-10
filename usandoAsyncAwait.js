// aqui temos uma instância de Promise, igual ao exemplo do arquivo "aprendendoSobrePromises.js"
const temHamburger = new Promise((resolve, reject) => {
    let temIngrediente = true;
    setTimeout(() => {
        if (temIngrediente === true) {
            resolve(() => {
                return console.log("Tem haburger :)");
            });
        } else {
            reject("Não sobrou nada pro beta :(");
        }
    }, 2000);
});

// aqui é que a mágica acontece. Nas versões mais modernas do ES, podemos usar o await "solto" no arquivo, sem precisar de uma função marcada com "async"

// aqui, o try "tenta" executar o que tá dentro desse código, em caso de erro, ele executa o catch que "captura" o erro, que pode ser tratado posteriormente
try {
    const resultado = await temHamburger;
    resultado();
} catch(e) {
    console.log(e);
} finally {
    console.log("Operação finalizada!");
}

// um exemplo de uso de Promises com async/await é com uma função tradicional:

/*
    async function resultado () {
        try {
            const resultado = await temHamburger;
            resultado();   
        } catch(e) {
            console.log(e); 
        } finally {
            console.log("Operação finalizada!");
        }
    }

    resultado()
*/