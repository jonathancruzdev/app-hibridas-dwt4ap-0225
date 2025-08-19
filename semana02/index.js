const Product = require('./Product.js');
const modelProduct = new Product();

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
modelProduct.deleteProductById('0ed7a0f9-717c-4cbd-b8a1-66f0123bd450').then( r =>{
    console.log(r);
})