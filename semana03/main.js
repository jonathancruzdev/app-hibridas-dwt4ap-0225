const dotenv = require('dotenv');
const chalk = require('chalk');
const express = require('express');
const Product = require('./Product.js');
const server = express();
dotenv.config();
const port = process.env.PORT;


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

server.post('/api/products', async (request, response) => {
    const body = request.body;
    console.log(body);
    response.send('Recibido');
})



server.listen( port, () => {
    console.log( chalk.yellow(`Servidor Web en el puerto ${port}`) );
})