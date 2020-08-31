const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://Jhonatan:Jhonatan0509@cluster0-3ucu8.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(3333);








// get (Pegar), post (Criar), put(Atualizar) e delete(Apagar)

/*

Tipos de parâmetros:
Query Params: (Get) request.query (Filtros, ordenação, paginação, ...)
Route Params: (Put, Delete) request.params (Identificar um recurso na alteração ou remoção)
Body: request.body (Dados para a criação ou alteração de um registro)

*/



