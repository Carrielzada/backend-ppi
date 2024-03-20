//Rota é uma micro aplicação express que se encarrega de processar
//requisições em um determina endpoint
//Por exemplo: https://localhost:3000/evento <--- evento é um endpoint
//             domínio da aplicação   endpoint

import { Router } from 'express';
import EventoCtrl from '../Controles/EventosCtrl.js';

const rotaEvento = new Router();
const eventCtrl = new EventoCtrl();

rotaEvento
.get('/', eventCtrl.consultar)
.get('/:termo', eventCtrl.consultar)  //atribuindo a função consultar como parâmetro do que executar quando receber um método get na rota
.post('/', eventCtrl.gravar)
.put('/:codigo', eventCtrl.atualizar)
.patch('/:codigo', eventCtrl.atualizar)
.delete('/:codigo', eventCtrl.excluir);


export default rotaEvento;