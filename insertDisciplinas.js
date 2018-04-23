var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/quero-aulas';

MongoClient.connect(servidor, function(erro, db) {
 if(erro)
   console.log("Erro ao estabelecer conexão:" + erro);
 else 
   console.log("Conexão estabelecida com sucesso.");
//========================================

var disciplinas = [
    {idProfessor: 1, nome: "Português", assunto:["Redação", "interpretação de texto"]},
    {idProfessor: 2, formacao: "mestrado", nome: "Matemática", descricaoFormacao:" Atuo como professor há mais de 10 anos", assunto:["Lógica", "Probabilidade"]},
    {idProfessor: 3, nome: "Programação", assunto:["PHP"]},
    {idProfessor: 4, nome: "Programação", assunto:["TypeScript", "Angular", "mongodb", "PrimeNG"]}

];

var dados = db.collection("disciplinas");

dados.insertMany(disciplinas, function(erro, sucesso){
    if(erro)
       console.log( "Não foi possível alocar a disciplina ao professor");
    
    else
        console.log("disciplinas alocadas ao professor com sucesso");
    
})

db.close();
});



