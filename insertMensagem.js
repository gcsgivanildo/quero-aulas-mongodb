var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/quero-aulas';

MongoClient.connect(servidor, function(erro, db) {
 if(erro)
   console.log("Erro ao estabelecer conexão:" + erro);
 else 
   console.log("Conexão estabelecida com sucesso.");
//========================================

var mensagens = [
    {idProfessor:1,  idAluno: 4, 
        conversa:[{data: "22/12/2017", 
                mensagens:[ 
                    {idProfessor:1, msg:"Posso lhe ajudar, porém o preço da aula será 80 reais"},
                    {idAluno:4, msg:"Durante quanto tempo será o curso por esse valor"},
                    {idProfessor:1, msg:"Serão 4 aulas de 2 horas cada"},
                    {idAluno:4, msg:"Ok! vou comprar o curso"},
                    {idProfessor:1, msg:"Certo! assim que vc efetuar o pagamento entrarei em contato com você"},
                    {idAluno:4, msg:"até logo"}
                    ]}]        
    },
    
    {idProfessor:3, idAluno: 5, 
    conversa:[{data: "11/01/2018",
            mensagens:[
                        {idProfessor:3, mng:"Bom dia! estou pronto para lhe ajudar"}
                    ]}] 
    }   

];

var dados = db.collection("mensagens");

dados.insertMany(mensagens, function(erro, sucesso){
    if(erro)
       console.log( "Não realizado");
    
    else
        console.log("realizado com sucesso");
    
})

 db.close();
});



