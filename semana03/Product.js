const fs = require('fs/promises');
const path = './data/products.json';

class Product {
    products = [];

    constructor(products=[]){
        this.products = products;
    }
    saveJSONP(){
        const data = JSON.stringify( this.products );
        fs.writeFile(path, data).then( () => {
            console.log('Datos Guardados')
        })
    }
    async saveJSON(){
        const data = JSON.stringify( this.products, null, 2 );
        try {
            await fs.writeFile(path, data);
            console.log('Datos Guardados')
        } catch (error) {
            console.error('No se guardo el JSON ');
        }
    }
    async readJSON(){
        try {
            const data = await fs.readFile(path);
            return JSON.parse( data );
        } catch (error) {
            console.error('No se pudimos leer el JSON ');
        }
    }
    // Agrega un producto al array
    async addProduct( product ){
        this.products = await this.readJSON();
        const id = crypto.randomUUID();
        this.products.push({
            id: id,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock
        })
        await this.saveJSON();
    }
    // Retorna la lista de productos
    async getProducts(){
        const products = await this.readJSON();
        return products;
    }
    async getProductById(id){
        const products = await this.readJSON();
        const res = products.find( item => item.id == id);
        return res ? res : 'Not found';
    }
    getProductById2(id){
        this.readJSON().then( products => {
            const product = products.find( item => item.id == id);
            return product ? product : 'Not found';
        })
    }
    async deleteProductById(id){
        // Leemos los datos del json local
        this.products = await this.readJSON();
        // Buscamos la posición el producto en el array
        const index = this.products.findIndex( product => product.id == id );
        if( index != -1) {
            console.log(index);
            this.products.splice(index, 1);
            await this.saveJSON();
        } else {
            console.log('Not Found');
        }
    }
    async updateProductById(id, product){
        this.products = await this.readJSON();
        // Buscamos la posición el producto en el array
        const index = this.products.findIndex( product => product.id == id );
        if( index != -1) {
            console.log(index);
            this.products[index].name = product.name;
            this.products[index].price = product.price;
            this.products[index].stock = product.stock;
            await this.saveJSON();
        } else {
            console.log('Not Found');
        }
    }
}

module.exports = Product;