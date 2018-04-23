var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/quero-aulas';

MongoClient.connect(servidor, function(erro, db) {
 if(erro)
   console.log("Erro ao estabelecer conexão:" + erro);
 else 
   console.log("Conexão estabelecida com sucesso.");
//========================================

var pedidos = [
    {idAluno: 4, compra:[{data: "22/12/2017", 
                produtos:[ 
                    {idDisciplina: 1, preco:"45"},
                    {idDisciplina: 2, preco:"45"}
                    ]
                },
                {data: "11/01/2018",
                produtos:[
                    {idDisciplina: 4, preco:"600"}]   
                    }
                    ]        
    },
    
    {idAluno: 5, compra:[{ data: "10/01/2018", 
    produtos:[ 
        {idDisciplina: 3, preco:"45"},
        {idDisciplina: 4, preco:"45"}
        ]}]},
        
    {idAluno:6, compra:[{data:"12/02/2018",
        produtos:[
        {idDisciplina:1, preco:"60"}            
        ]}]}

];

var dados = db.collection("pedidos");

dados.insertMany(pedidos, function(erro, sucesso){
    if(erro)
       console.log( "Não realizado");
    
    else
        console.log("realizado com sucesso");
    
})

 db.close();
});



