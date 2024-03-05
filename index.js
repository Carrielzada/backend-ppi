//Todas as linhas desse programa são executadas de forma síncrona
//ou seja, de forma sequencial

import Evento from "./Modelos/Evento.js";


const evento = new Evento(3, "Falling in Reverse", "'Rua Ibiuna, 98'", "Sorocaba",
    "SP", "R$ 0.000,00", "ESGOTADO");
    
//Nos métodos assíncronos é preciso manipular as promises  (Promessas)
//Então, em algum momento o método trará uma resposta e o nosso programa
//Não saberá quando isso irá acontecer.

evento.atualizar()
.then(() => {
    console.log("Evento atualizado com sucesso!");
}).catch((erro) => {
    console.log("Erro ao atualizar evento:", erro.message);
});
