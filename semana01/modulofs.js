const Product = require('./Product.js');
const fs = require('fs/promises');
const path = 'notas.txt';

// const data = fs.readFile(path); // Obtengo una promesa
/*
fs.readFile(path).then( (rep) => {
    console.log( rep.toString() )
}).then( () => {
    fs.writeFile(path, "chau!");

})
*/
async function lectura(){
    const data = await fs.readFile(path);
    const texto = data.toString();
    console.log(texto);
    await fs.writeFile(path, "Chau!");

}

lectura();

const model = new Product();
model.addProduct({
    name: 'Mouse Genius',
    description: 'Mouse gamer',
    price: 5000,
    stock: 15
})

model.addProduct({
    name: 'Camara Web',
    description: 'Camara Full HD',
    price: 20000,
    stock: 20
})
const lista = model.getProducts();

console.table(lista);

const product = model.getProductById('213')