const http = require('http');
const Product = require('./Product.js');
const modelProduct = new Product();
const port = 3000;
const server = http.createServer( (request, response) => {
    const url = request.url;
    const method = request.method; // GET || POST || PUT || DELETE
    console.log(url, method);

    if( url == '/'){
        response.writeHead( 200, { 'Content-Type': 'text/html' } );
        response.end("<h1>Hola desde un Servidor NODE</h1>");
    } else if ( url == '/products'){
        response.writeHead( 200, { 'Content-Type': 'application/json' } );
        response.end("Lista de Productos");
    } else {
        response.writeHead( 401, { 'Content-Type': 'text/html' } );
        response.end(`<h4>Not Found</h4>`);
    }

});

server.listen( port, () => {
    console.log(`Servidor Web en el puerto ${port}`);
})

/* modelProduct.addProduct({
    name:'Mate 2',
    price: 3000,
    stock: 50
})
 */
/* 
modelProduct.addProduct({
    name:'Termo 1lt',
    price: 5000,
    stock: 10
}) */

/* console.log('Inicio de la Promesa');
// Con Promesa
modelProduct.getProducts().then( data => {
    console.table( data );
})
console.log('Fin de la Promesa');
 */
const buscarPorId = async (id) => {
    const resultado = await modelProduct.getProductById(id);
    console.log(resultado);
}

// buscarPorId('0ed7a0f9-717c-4cbd-b8a1-66f0123bd456');
/* modelProduct.deleteProductById('0ed7a0f9-717c-4cbd-b8a1-66f0123bd450').then( r =>{
    console.log(r);
})
    */