import rotaEvento from "./Rotas/rotaEvento.js";
import express from  "express";

const host = '0.0.0.0'; //IP genério que representa todas as interfaces (placas de rede)
const porta = 3000; //Sempre utilize portas com valoor maior que 1024

const app = express();
app.use(express.json()); //configurando o express para saber interpretar formato JSON
app.use(express.urlencoded({extended: true})); //QS configurando o express para saber interpretar o formato URL utilizando a biblioteca QS
app.use('/eventos', rotaEvento);
app.listen(porta, host, () => {
    console.log('Servidor rodando em http://${host}:${porta}');
});