//Todas as linhas desse programa são executadas de forma síncrona
//ou seja, de forma sequencial

import Evento from "./Modelos/Evento.js";


const evento = new Evento(8, "Renato", "'Rua Joaquim Pedroso'", "Presidente Prudente",
    "SP", "R$ 100,00", "Restam 5");
    
//Nos métodos assíncronos é preciso manipular as promises  (Promessas)
//Então, em algum momento o método trará uma resposta e o nosso programa
//Não saberá quando isso irá acontecer.


//GRAVAR NOVO EVENTO!
/*
evento.gravar().then(() => {
    console.log("Evento gravado com sucesso no banco de dados!");
})
.catch((erro) => {
    console.error("Erro ao gravar evento:", erro.message);
});*/

//ATUALIZAR EVENTO JÁ EXISTENTE
/*
evento.atualizar()
.then(() => {
    console.log("Evento atualizado com sucesso!");
}).catch((erro) => {
    console.log("Erro ao atualizar evento:", erro.message);
});

//EXCLUIR EVENTO

evento.excluir()
.then(() => {
    console.log("Evento excluído com sucesso!");
}).catch((erro) => {
    console.log("Erro ao excluir evento:", erro.message);
});

//Consultar evento

const eventoQQ = new Evento();

eventoQQ.consultar(2).then((listaEventos) => {
    console.log("Eventos encontrados:")
    for (const evento of listaEventos) {
        console.log(evento.toJSON());
    }
}).catch((erro) => {
    console.log("Não foi possível consultar o evento", erro);
});*/