var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/quero-aulas';

MongoClient.connect(servidor, function(erro, db) {
 if(erro)
   console.log("Erro ao estabelecer conexão:" + erro);
 else 
   console.log("Conexão estabelecida com sucesso.");


var newDados = {_id: 4, nome: "José", sobrenome:"Fernando", cpf:09465750465, tipo: "Professor"};

var dados = db.collection("usuarios");

var filtro = {_id: 4}

var alteracao = {$set: { sobrenome: "Fernando da Silva Costa"}}//Mudar o sobre nome

dados.updateMany(filtro, alteracao, newDados, function(erro, sucesso){
    if (erro)
        console.log("erro ao atualizar dados" + erro)
    else
        console.log("Update realizado com sucesso")
})


 db.close();
});
