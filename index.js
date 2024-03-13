const express = require('express'); // instanciar o express 
const server = express(); // criação de um servidor para receber o express com todas as depêndencias 
const filmes = require ('./src/data/filmes.json')

server.get('/filmes',(req,res ) => { // tudo que vem depois da barra é chamada de rota 
return res.json(filmes) // retornar uma resposta em json 
}); /* quando colocamos esse sinal '/' conseguimos acessar todos os 
dados da api */

server.listen (3000, () => { // definição pra o servidor escutar na porta "3000" 
    /*o sinal "=>" representa a criação de uma função anonima   */
    console.log("Servidor está funcionando"); // imprimir a mensagem que o console está ok 
});
