var express = require('express');
var clientesApi = express.Router();
/*arquivo com as funcoes da rota*/
var clientesRouter = require('./cliente.routes');


/*Rotas*/
/*get all*/
clientesApi.get('/', clientesRouter.index);

/*get by id*/
clientesApi.get('/:id', clientesRouter.get);

/*save one*/
clientesApi.post('/', clientesRouter.new);

/*Edit one */
clientesApi.put('/', clientesRouter.edit);

/*Delete one params: {_id: "12038102380"}*/
clientesApi.delete('/', clientesRouter.delete);

/*Delete Endereco*/
clientesApi.delete('/enderecos', clientesRouter.deleteEndereco);


/*Export*/
module.exports = clientesApi;
