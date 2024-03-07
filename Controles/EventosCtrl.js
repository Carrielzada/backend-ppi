export default class EventoCtrl {
// Essa classe terá a responsabilidade de traduzir pedidos HTTP em comandos internos da aplicação
// A nossa aplicação sabe gravar, atualizar, excluir e consultar eventos.
// Será necessário manipular requisições HTTP
// Requisições HTTP (GET, POST, PUT OU PATCH , DELETE)

// Camada de controle será síncrona, então iremos resolver os métodos assíncronos com promises

gravar(requisicao, resposta){

    // HTTP gravar um cliente é enviar uma requisição do tipo post
    // Trazendo no formato do tipo JSON
    if(requisicao.method === 'POST' && requisicao.is('application/json')){
        const dados = requisicao.body;
        const artista = dados.artista;
        const endereco = dados.endereco;
        const cidade = dados.cidade;
        const estado = dados.estado;
        const preco = dados.preco;
        const ingressos = dados.ingressos;

        // pseudo validação nos dados
        if(artista && endereco && cidade && estado && preco && ingressos){
            const evento = new evento(0, artista, endereco, cidade, estado, preco, ingressos);

        }

    }
}
}


atualizar(requisicao, resposta){

};

excluir(requisicao, resposta){

};

consultar(requisicao, resposta){

};