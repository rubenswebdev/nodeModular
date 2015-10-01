var mongoose = require('mongoose');

var ClienteSchema = mongoose.Schema({
  nome: String,
  sobrenome: String,
  enderecos: [{
  	cep: String,
  	cidade: String,
  	bairro: String,
  	complemento: String,
  	numero: String,
  	estado: String
  }]
});

module.exports = mongoose.model('Cliente', ClienteSchema);