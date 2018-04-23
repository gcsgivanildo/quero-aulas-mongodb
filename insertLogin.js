var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/quero-aulas';

MongoClient.connect(servidor, function(erro, db) {
 if(erro)
   console.log("Erro ao estabelecer conexão:" + erro);
 else 
   console.log("Conexão estabelecida com sucesso.");


var login = [
{idUsuario: 1, login: "Administrador", senha:"admin"},
{idUsuario: 2, login: "pedro", senha:"123456"},
{idUsuario: 3, login: "joao", senha:"123456"},
{idUsuario: 4, login: "jose", senha:"123456"},
{idUsuario: 5, login: "maria", senha:"123456"},
{idUsuario: 6, login: "angela", senha:"123456"}
];
var dados = db.collection("login");

dados.insertMany(login, function(erro, sucesso){
    if(erro)
       console.log( "não cadastrado");
    
    else
        console.log("Cadastrado com sucesso");
    
})

 db.close();
});



