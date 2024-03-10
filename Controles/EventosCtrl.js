import Evento from "../Modelos/Evento.js";
export default class EventoCtrl {
// Essa classe terá a responsabilidade de traduzir pedidos HTTP em comandos internos da aplicação
// A nossa aplicação sabe gravar, atualizar, excluir e consultar eventos no BD.
// Será necessário manipular requisições HTTP
// Requisições HTTP (GET, POST, PUT OU PATCH , DELETE)

// Camada de controle será síncrona, então iremos resolver os métodos assíncronos com promises

gravar(requisicao, resposta){
  
    // Preparar o método gravar para produzir resposta no formato JSON
    resposta.type('application/json');

    // HTTP gravar um cliente é enviar uma requisição do tipo post
    // Trazendo no formato do tipo JSON
    if(requisicao.method === 'POST' && requisicao.is('application/json')){
        const dados = requisicao.body; //extrair dados do corpo da requisição
        const artista = dados.artista;
        const endereco = dados.endereco;
        const cidade = dados.cidade;
        const estado = dados.estado;
        const preco = dados.preco;
        const ingressos = dados.ingressos;

        // pseudo validação nos dados
        if(artista && endereco && cidade && estado && preco && ingressos){
            const evento = new Evento(0, artista, endereco, cidade, estado, preco, ingressos);
            evento.gravar().then(()=>{
                resposta.status(201);  
                resposta.json({
                    "status":true,
                    "mensagem": "Evento gravado com sucesso!",
                    "codigo_evento": evento.codigo 
                })
            }).catch((erro) => {
                resposta.status(500);
                resposta.json({
                    "status": false,
                    "mensagem":"Não foi possível armazenar evento! " + erro.message
                })
            });
        }
        else{
            resposta.status(400);
            resposta.json({
                "status":false,
                "mensagem": "Por favor, informe todos os dados do evento, conforme documentação da API"
            });
        }
    }
    else{
        resposta.status(405);
        resposta.json({
            "status":false,
            "mensagem": "Requisição inválida! Esperando o método POST e dados no formato JSON para gravar um evento"
        })
    }
}
}


atualizar(requisicao, resposta); {
    resposta.type('application/json');
    if (requisicao.method === "PATCH" || requisicao.method === "PUT" && requisicao.is('application/json')) {
        const dados = requisicao.body; //extrair dados do corpo da requisição
        //Código será extraído da URL, exemplo http://localhost:3000/evento/1 // 1 é o código
        const codigo = requisicao.params.codigo;
        const artista = dados.artista;
        const endereco = dados.endereco;
        const cidade = dados.cidade;
        const estado = dados.estado;
        const preco = dados.preco;
        const ingressos = dados.ingressos
        if (codigo && codigo > 0 && artista && endereco && cidade && estado && preco && ingressos) {
            const evento = new Evento(codigo, artista, endereco, cidade, estado, preco, ingressos);
            evento.atualizar().then(() => {
                resposta.status(200);
                resposta.json({
                    "status": true,
                    "mensagem": "Evento atualizado com sucesso!"
                });
            }).catch((erro) => {
                resposta.status(500);
                resposta.json({
                    "status": false,
                    "mensagem": "Não foi possível atualizar o evento! " + erro.message
                })
            })
        } else {
            resposta.status(400);
            resposta.json({
                "status": false,
                "mensagem": "Por favor, informe todos os dados do evento conforme documentação da API"
            })
        }
    } else {
        resposta.status(405);
        resposta.json({
            "status": false,
            "mensagem": "Requisição inválida! Esperando o método PATCH ou PUT e dados no formato JSON para atualizar um evento!"
        });
    }
}

excluir(requisicao, resposta);{
    resposta.type('application/json');
    if (requisicao.method == "delete"){
        //O Código do evento que será excluído será extraído da URL
        const codigo = requisicao.params.codigo;
        if (codigo && codigo > 0){
            const evento = new Evento(codigo);
            evento.excluir()
            .then(()=>{
                resposta.status(200);
                resposta.json({
                    "status":true,
                    "mensagem": "Evento excluído com sucesso!",
                })
            })
            .catch((erro) => {
                resposta.status(500);
                resposta.json({
                    "status":false,
                    "mensagem": "Não foi possível excluir evento! " + erro.message
                })
            })
        }
    }
};

consultar(requisicao, resposta);{

};