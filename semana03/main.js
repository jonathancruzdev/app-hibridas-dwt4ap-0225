const chalk = require('chalk');
const express = require('express');
const Product = require('./Product.js');
const port = 3000;
const server = express();

const model = new Product();
console.log(  chalk.bgGreen('API REST') );

const home = (request, response) => {
    response.send('Hola, soy un API ');
    console.log('Home');
}

server.get('/', home);

server.get('/api/products', async (request, response)=>{
    const list = await model.getProducts()
    console.log(list);
    response.json( list);
   
})

server.get('/api/products/:id', async (request, response)=>{
    console.log( request.params.id);
    response.send(request.params.id);
   
})



server.listen( port, () => {
    console.log( chalk.yellow(`Servidor Web en el puerto ${port}`) );
})