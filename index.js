//Todas as linhas desse programa são executadas de forma síncrona
//ou seja, de forma sequencial

import Evento from "./Modelos/Evento.js";


const evento = new Evento(0, "Carrielzada", "Rua Barão do Rio Branco, 198",
    "Boituva", "SP", "R$ 250,00", "100 uni");
    
//Nos métodos assíncronos é preciso manipular as promises  (Promessas)
//Então, em algum momento o método trará uma resposta e o nosso programa
//Não saberá quando isso irá acontecer.

evento.gravar()
.then(() => {
    console.log("Evento cadastrado com sucesso!");
  })
.catch((erro) => {
    console.error("Erro ao gravar evento:", erro.message);
  });