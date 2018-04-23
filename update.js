var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/quero-aulas';

MongoClient.connect(servidor, function(erro, db) {
 if(erro)
   console.log("Erro ao estabelecer conexão:" + erro);
 else 
   console.log("Conexão estabelecida com sucesso.");


var newDados = {nome: "Jose", sobrenome: "Silva", idade: 23};

var dados = db.collection("usuarios");

var filtro = {nome: "Jose"}

var alteracao = {$set: { ativo: true}}

dados.updateMany(filtro, alteracao, newDados, function(erro, sucesso){
    if (erro)
        console.log("erro ao atualizar dados" + erro)
    else
        console.log("Update realizado com sucesso")
})


 db.close();
});
