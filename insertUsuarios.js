var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/quero-aulas';

MongoClient.connect(servidor, function(erro, db) {
 if(erro)
   console.log("Erro ao estabelecer conexão:" + erro);
 else 
   console.log("Conexão estabelecida com sucesso.");


var usuarios = [
{_id: 1, nome: "Administrador", sobrenome:"admin", cpf:12309867832, tipo: "admin"},//nivelAcesso 1
{_id: 2, nome: "Pedro", sobrenome:"silva", cpf:12409843498, tipo: "Professor"},//nivelAcesso 2
{_id: 3, nome: "João", sobrenome:"Barbosa", cpf:84598709465, tipo: "Professor"},//nivelAcesso 2
{_id: 4, nome: "José", sobrenome:"Fernando", cpf:09465750465, tipo: "Professor"},//nivelAcesso 2
{_id: 5, nome: "Maria", sobrenome:"dos Santos",cpf:12507867632, tipo: "Aluno"},//nivelAcesso 3
{_id: 6, nome: "Angela", sobrenome:"Maria", cpf:32509866732, tipo: "Aluno"},//nivelAcesso 3
{_id: 7, nome: "Alexandre", sobrenome:"Borges",cpf:14656091422, tipo: "AlunoPreCadastro"}//nivelAcesso 4
];
var dados = db.collection("usuarios");

dados.insertMany(usuarios, function(erro, sucesso){
    if(erro)
       console.log( "não cadastrado "+ erro);
    
    else
        console.log("Cadastrado com sucesso");
    
})

 db.close();
});



