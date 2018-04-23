var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/quero-aulas';

MongoClient.connect(servidor, function(erro, db) {
 if(erro)
   console.log("Erro ao estabelecer conexão:" + erro);
 else 
   console.log("Conexão estabelecida com sucesso.");

var colecao = db.collection("usuarios");

//colecao.createIndex(nome);

var filtro = { nome : "Maria" };


colecao.find(filtro).toArray(function(erro, documento){
    documento.forEach(function(doc){
        console.log("Nome: " + doc.nome);
    });
});


 db.close();
});
