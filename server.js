const express = require ('express');
const app = express ();

//rota principal
app.get ('/', (req, res)=> {
    res.send ('Olá, este é o servidor com Express')
})

//Rota "sobre"
app.get ('/sobre',(req,res)=>{
    res.send('Página Sobre');
});

//Rota "produtos"
app.get ('/produtos', (req,res)=>{
    res.send ('Lista de Produtos');
});

//Rota de retorna JSON (Simula uma API)
app.get('/api/produtos', (req,res)=>{
    const produtos =[
    {id: 1,nome:'Mouse'},
    {id: 2,nome:'Teclado'}
    ];
    res.json(produtos);
})

//Inicia o servidor na porta 3000
app.listen(3000, ()=>{
    console.log ('Servidor rodando http://localhost:3000');
});

//node server.js