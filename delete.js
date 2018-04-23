var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/quero-aulas';

MongoClient.connect(servidor, function(erro, db) {
 if(erro)
   console.log("Erro ao estabelecer conexão:" + erro);
 else 
   console.log("Conexão estabelecida com sucesso.");

var colecao = db.collection("usuarios");
var filtro = {nome: "Pedro"}

colecao.deleteOne(filtro, function(erro, sucesso){
    if(erro)
       console.log("erro ao excluir dados" + erro)
    else
        console.log(" Usuário excluído com sucesso")
})

 db.close();
});
