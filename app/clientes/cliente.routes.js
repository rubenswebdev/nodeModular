/*Cliente Model*/
var Cliente = require('./cliente.model');

/*Clientes Routes*/
exports.index = function(req, res) {
	Cliente.find(
				{}, //Where em branco traz tudo
				{}, //campos a trazer no resultado
				function(err, data){ //o que fazer com o resultado
					res.json(data);
				}
	);
}

exports.get = function(req, res) {
	Cliente.find(
			{_id: req.params.id},// Where
			function(err, data){ // o que fazer com o resultado
				res.json(data);
			}
	);
}

exports.new = function(req, res) {
	var cliente = new Cliente;
	cliente.nome = req.body.nome;
	cliente.sobrenome = req.body.sobrenome;
	cliente.enderecos = req.body.enderecos;

	cliente.save(function(err, data){
		res.json(data);
	});
}

exports.delete = function(req, res) {
	Cliente.remove({_id: req.body._id},function(err) {
		res.json(err);
	})
}

exports.edit = function(req, res) {
	Cliente.update(
		{_id: req.body._id}, //where
		{ //set
			nome: req.body.nome,
			sobrenome: req.body.sobrenome,
			enderecos: req.body.enderecos
		},//options
		function (err, data){
			res.json(data);
		}
	);
}

exports.deleteEndereco = function(req, res) {
	Cliente.update(
		{_id: req.body._id},
		{$pull: {"enderecos": {_id: req.body.idEndereco}}},
		function(err, data) {
			res.json(data);
		}
	);
}