var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/quero-aulas';

MongoClient.connect(servidor, function(erro, db) {
 if(erro)
   console.log("Erro ao estabelecer conexão:" + erro);
 else 
   console.log("Conexão estabelecida com sucesso.");
//========================================

var anuncios = [
    {idAluno: 4, disciplina: "Português", assunto: "Redação", preco: 40, horario:"noite",
        observacao: "Olá a todos gostaria que o horário das aulas fossem após às 21 horas" },
    {idAluno: 3, disciplina: "Matemática", assunto: "Probabilidade", preco: 50, horario:"Tarde",
        observacao: "Melhor horaŕio às 15 horas" },
    {idAluno: 3, disciplina: "Programação", assunto: "Angular", preco: 50, horario:"Tarde",
        observacao: "Melhor horaŕio durante o dia" }
    {idAluno: 5, disciplina: "Programação", assunto: "PHP", preco: 50, horario:"Tarde",
        observacao: "Melhor horaŕio de manhã" }
   ];

var dados = db.collection("anuncios");

dados.insertMany(anuncios, function(erro, sucesso){
    if(erro)
       console.log( "Não realizado");
    
    else
        console.log("realizado com sucesso");
    
})

 db.close();
});



