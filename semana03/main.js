const dotenv = require('dotenv');
const chalk = require('chalk');
const express = require('express');
const Product = require('./Product.js');
const server = express();
server.use( express.json() ); // proxima clase se datalla el uso
dotenv.config();
const port = process.env.PORT;


const model = new Product();
console.log(  chalk.bgGreen('API REST') );

const home = (request, response) => {
    response.send('Hola, soy un API ');
    console.log('Home');
}

// Ruta Raíz
server.get('/', home);
// Lista de Productos
server.get('/api/products', async (request, response)=>{
    const list = await model.getProducts()
    console.log(list);
    response.json( list);
   
})
// Producto por ID
server.get('/api/products/:id', async (request, response)=>{
    const id = request.params.id;
    const product = await model.getProductById(id);
    response.json(product);
})
// Crear Producto
server.post('/api/products', async (request, response) => {
    const body = request.body;
    await model.addProduct( body);
    console.log(body);
    response.send('Recibido');
})
// Actualizar
server.put('/api/products/:id', async( request, response) => {
    const id = request.params.id;
    const product = request.body;
    await model.updateProductById(id, product);
    response.send('Producto Actualizado');
})
// Eliminar
server.delete('/api/products/:id', async( request, response) => {
    const id = request.params.id;
    await model.deleteProductById(id);
    response.send('Producto Eliminado');
})

server.listen( port, () => {
    console.log( chalk.yellow(`Servidor Web en el puerto ${port}`) );
})