// para criar um servidor básico com express, primeiro nós instalamos o express via npm install, importamos e instanciamos em uma constante "app":
import express from "express";
import cors from "cors";
import router from "./routes.js";
const app = express();
const port = 5000;
const frontendPort = 5173;

// nós tambem instalamos o cors e passamos a ele o endereço do nosso site. Ele serve para permitir com que o frontend faça requisições à nossa API. OBS: a porta especificada é do frontend, já que é ele que estamos autorizando a fazer requisições à esta API.

app.use((req, res, next) => {
    try {
        console.log("Executado");
    } catch (error) {
        console.log(error);
    }

    next();
});

app.use(cors({
    origin: `http://localhost:${frontendPort}`
}));

// aqui nós dizemos à API que os dados vindos do frontend estão em json.
app.use(express.json());

// no primeiro argumento nós especificamos que todas as rotas do backend vão começar com "/api", e no segundo argumento, nós utilizamos o "router" que importamos no routes.js.
app.use("/api", router);

// ativa o servidor na porta especificada, fazendo com que a API "escute" as requisições nessa porta.
app.listen(port, () => {
    console.log(`Rodando servidor na porta ${port}`);
});